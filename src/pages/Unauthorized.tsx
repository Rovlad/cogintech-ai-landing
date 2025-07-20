import React from "react";
import { Helmet } from "react-helmet";

const Unauthorized: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>401 Unauthorized - Cogintech</title>
        <meta name="description" content="Access denied. You don't have permission to access this resource." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-red-600 mb-4">401</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Unauthorized Access
            </h2>
            <p className="text-gray-600 mb-8">
              You don't have permission to access this resource.
            </p>
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unauthorized; 