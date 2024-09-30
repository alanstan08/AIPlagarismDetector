import React from 'react';
import Header from './header';
import Footer from './footer';
const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-8  flex-1 flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Information Collection</h2>
        <p className="text-gray-600 mb-4">
          We collect information you provide directly to us, such as when you create an account or communicate with us.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Use of Information</h2>
        <p className="text-gray-600 mb-4">
          We use your information to provide, maintain, and improve our services, and to communicate with you about updates.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Data Protection</h2>
        <p className="text-gray-600 mb-4">
          We implement security measures to protect your personal information but cannot guarantee the absolute security of data.
        </p>
      </div>
    </div>
      <Footer />
    </div>
    
  );
};

export default PrivacyPolicy;
