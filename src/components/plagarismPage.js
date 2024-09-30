import Header from './header';
import Footer from './footer';
import { useState } from 'react';
import axios from 'axios';
import StatCard from './statCard';
import Loader from './loading';

const PlagiarismPage = () => {
     const [selectedFile, setSelectedFile] = useState(null);
    const [requestId, setRequestId] = useState(null);
    const [plagiarismResult, setPlagiarismResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(process.env.REACT_APP_TOKEN);


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setError("Please select a file first.");
            return;
        }

        // Ensure the file is under the size limit and is of the correct format
        if (selectedFile.size > 5 * 1024 * 1024) {
            setError("File is too large. Max size is 5MB.");
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append("document", selectedFile); // Append the file
        formData.append("is_search_web", "1");     // Search web for plagiarism
        formData.append("is_search_storage", "1"); // Search stored documents
        formData.append("is_json", "1"); 
       
        const headers = {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,  
        };
    
    
        try {
            const response = await axios.post('/api/v3/reports/create', formData, {
                headers:headers
            });

            const  id = response.data.data.id;
            if(response.data.status ){
                setRequestId(id);  // Save the request ID
            setError(null);

            // // Poll the status of the scan every 10 seconds
            pollScanStatus(id);
            }
            

        } catch (error) {
            console.error("Error while checking for plagiarism:", error);
            setError("Something went wrong during the API request.");
        }
    };
    const pollScanStatus = async (id) => {
        const interval = setInterval(async () => {
            try {
                const statusResponse = await axios.get(`/api/v3/reports/status/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const status = statusResponse.data.data.status_ex;
                console.log('RESPONSEEE POLLING', statusResponse.data)
                if (status === "checked") {
                    clearInterval(interval);  // Stop polling once scan is complete
                    fetchReport(id);  // Fetch the report
                }

            } catch (error) {
                console.error("Error polling scan status:", error);
                setError("Error while polling for scan status.");
            }
        }, 15000);  // Poll every 15 seconds
    };
    const fetchReport = async (id) => {
        try {
            const reportResponse = await axios.get(`/api/v3/reports/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if(reportResponse.status){
                console.log('REPORTT',reportResponse)
                setLoading(false)
                setPlagiarismResult(reportResponse.data);  // Display the report

            }
        } catch (error) {
            console.error("Error fetching report:", error);
            setError("Error while fetching the plagiarism report.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen ">
            <Header />

            {/* Main Content */}
            <section className='flex min-h-screen min-w-screen w-full bg-gray-100'>
            <div className="container mx-auto flex-1 flex flex-col items-center justify-center py-16 px-4 ">
                <h1 className="text-4xl sm:text-4xl font-bold mb-6 text-gray-800">AI Plagiarism Detection</h1>
                <div className="w-full max-w-3xl max-h-max bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Upload Your Document</h2>
                    <p className="text-lg text-gray-500 mb-2">Supported formats: <span className="font-semibold text-gray-600">.doc, .docx, .pdf</span></p>
                    <p className="text-lg text-gray-500 mb-6">Max file size: <span className="font-semibold text-gray-600">5MB</span></p>
                    
                    {/* File Input */}
                    <input 
                        type="file" 
                        accept=".doc,.docx,.pdf" 
                        onChange={handleFileChange} 
                        className="w-full p-5 mb-4 border-2 border-gray-300 rounded-lg focus:border-blue-500"
                    />
 
                    {/* Upload Button */}
                    <button
                        className="w-full text-lg font-semibold text-white bg-black hover:bg-blue-700 rounded-lg py-3 transition-colors duration-300"
                        onClick={handleUpload}
                    >
                        Upload Your Document
                    </button>

                    {/* Error Message */}
                    {error && (
                        <p className="text-red-500 mt-4">{error}</p>
                    )}

                    {/* Loading Screen */}
                    {loading && (
                        <div className="flex items-center justify-center mt-8">
                            <Loader /> {/* Replace with your loading spinner component */}
                            <p className="text-lg text-gray-600 ml-4">Analyzing your document, please wait...</p>
                        </div>
                    )}

                    {/* Display plagiarism result */}
                    {!loading && plagiarismResult && (
                        <div className="mt-8 bg-gray-100 p-4 rounded-lg text-left shadow-inner">
                            <h3 className="text-xl font-semibold mb-2">Plagiarism Report:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <StatCard
                                    title="Originality Score"
                                    value={`${plagiarismResult.data.originality}%`}
                                    description="Content originality"
                                    color="text-green-600"
                                />
                                <StatCard
                                    title="Plagiarism Detected"
                                    value={`${plagiarismResult.data.similarity}%`}
                                    description="Potential plagiarism"
                                    color="text-red-600"
                                />
                                <StatCard
                                    title="Word Count"
                                    value={plagiarismResult.data.checked_words.toString()}
                                    description="Total words analyzed"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </section>
            

            <Footer />
        </div>
    );
};

export default PlagiarismPage;
