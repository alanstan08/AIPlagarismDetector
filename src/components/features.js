import React from 'react';
import { HiOutlineBolt } from "react-icons/hi2";
import { LuCheckCircle } from "react-icons/lu";
import { IoDocumentsOutline } from "react-icons/io5";
import Header from './header';
import Footer from './footer';
function Features() {
  return (
    <div className='flex flex-col min-h-screen '>
        <Header />
        <section className='flex min-h-screen'>
        <div className="flex-1 flex flex-col items-center justify-center space-y-4 text-center bg-gray-100 py-12">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
        Our Features
      </h1>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 px-6">
        <div className="flex flex-col items-center space-y-2 p-4">
          <HiOutlineBolt size={60} />
          <h3 className="text-xl font-bold">Lightning Fast</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Get results in seconds, not minutes.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4">
          <LuCheckCircle size={60} />
          <h3 className="text-xl font-bold">Highly Accurate</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Powered by advanced AI for precise detection.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4">
          <IoDocumentsOutline size={60} />
          <h3 className="text-xl font-bold">Detailed Reports</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Comprehensive analysis with source citations.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4">
          <IoDocumentsOutline size={60} />
          <h3 className="text-xl font-bold">Detailed Reports</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Comprehensive analysis with source citations.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4">
          <IoDocumentsOutline size={60} />
          <h3 className="text-xl font-bold">Detailed Reports</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Comprehensive analysis with source citations.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 p-4">
          <IoDocumentsOutline size={60} />
          <h3 className="text-xl font-bold">Detailed Reports</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Comprehensive analysis with source citations.
          </p>
        </div>
      </div>
    </div>
    </section>
    <Footer />
    </div>
    
    
  );
}

export default Features;
