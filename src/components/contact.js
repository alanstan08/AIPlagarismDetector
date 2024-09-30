import Header from './header';
import Footer from './footer';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />
            
            {/* Contact Section */}
            <div className='flex-1 flex flex-col items-center justify-center py-16 bg-gray-100'>
                <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
                
                <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
                    <div className='mb-6'>
                        <label htmlFor="name" className='block text-lg font-medium mb-2'>Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Enter your name" 
                            className='w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-primary'
                        />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="email" className='block text-lg font-medium mb-2'>Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter your email" 
                            className='w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-primary'
                        />
                    </div>

                    <div className='text-center'>
                        <button className='px-6 py-2 bg-primary text-white font-semibold rounded-lg  bg-black min-w-[200px] hover:bg-primary-dark' onClick={() => window.location.href = "/contact"}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Contact;
