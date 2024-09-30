import React from 'react';
import Header from './header';
import Footer from './footer';
const TermsOfService = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-50 '>   
         <Header />
         <div className="container mx-auto p-8  flex-1 flex flex-col items-center justify-center py-16 px-4">
       
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Terms of Service</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Introduction</h2>
        <p className="text-gray-600 mb-4">
          These terms govern your use of our website and services. By accessing or using our service, you agree to be bound by these terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Usage</h2>
        <p className="text-gray-600 mb-4">
          You are responsible for your use of the service and for any content you provide. You must use the service according to all laws and regulations.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Modifications</h2>
        <p className="text-gray-600 mb-4">
          We may modify these terms at any time, and we will notify you of changes by updating the "Last Updated" date.
        </p>
      </div>
      
    </div>
    <Footer />

    </div>
   
  );
};

export default TermsOfService;
