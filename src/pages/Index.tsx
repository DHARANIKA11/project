
import React, { useState } from "react";
import SearchForm from "@/components/SearchForm";
import ResultCard from "@/components/ResultCard";
import { findStudentResult, StudentResult } from "@/data/studentResults";
import { toast } from "sonner";

const Index = () => {
  const [searchResult, setSearchResult] = useState<StudentResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (rollNumber: string, dateOfBirth: string) => {
    setIsLoading(true);
    setHasSearched(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = findStudentResult(rollNumber, dateOfBirth);
      
      if (result) {
        setSearchResult(result);
        toast.success("Results found successfully!");
      } else {
        setSearchResult(null);
        toast.error("No results found. Please check your roll number and date of birth.");
      }
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-education-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Student Exam Results Portal
          </h1>
          <p className="text-center text-education-100 mt-2">
            View your examination results by entering your credentials
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-center mb-6 text-education-800">
              Enter Your Details to View Results
            </h2>
            <div className="flex justify-center">
              <SearchForm onSearch={handleSearch} isLoading={isLoading} />
            </div>
          </div>
          
          {isLoading && (
            <div className="text-center py-8">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-education-500 border-r-transparent">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-2 text-education-700">Searching for your results...</p>
            </div>
          )}
          
          {!isLoading && hasSearched && (
            <div className="mt-8">
              {searchResult ? (
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-education-800">
                    Your Examination Results
                  </h2>
                  <ResultCard result={searchResult} />
                </div>
              ) : (
                <div className="text-center py-8 bg-white rounded-lg shadow-md">
                  <div className="text-5xl mb-4">😕</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No Results Found</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We couldn't find any results matching your roll number and date of birth. 
                    Please verify your details and try again.
                  </p>
                </div>
              )}
            </div>
          )}
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

export default Index;
