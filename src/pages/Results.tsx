
import React from 'react';
import ResultCard from '@/components/ResultCard';
import { useLocation, Navigate } from 'react-router-dom';
import { StudentResult } from '@/data/studentResults';

const Results = () => {
  const location = useLocation();
  const searchResult = location.state?.result as StudentResult;

  if (!searchResult) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-education-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Examination Results
          </h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <a
              href="/"
              className="text-education-600 hover:text-education-700 inline-flex items-center"
            >
              ← Back to Search
            </a>
          </div>
          
          <ResultCard result={searchResult} />
        </div>
      </main>
      
      <footer className="bg-gray-100 border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Springfield High School. All rights reserved.</p>
          <p className="mt-2">For any assistance, please contact the examination department.</p>
        </div>
      </footer>
    </div>
  );
};

export default Results;
