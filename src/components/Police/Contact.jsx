import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-900 to-black text-white flex flex-col items-center justify-center p-6 space-y-8">
      
      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/police')}
          className="bg-yellow-800 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all"
        >
          Home
        </button>
        <button
          onClick={() => navigate('/about')}
          className="bg-yellow-800 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all"
        >
          About
        </button>
        
      </div>

      {/* Contact Card */}
      <div className="bg-yellow-900 bg-opacity-90 p-10 rounded-2xl shadow-2xl max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center border-b-2 border-yellow-600 pb-2">
          📞 Contact Police Department
        </h1>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="text-2xl">🚨</div>
            <div>
              <h2 className="text-xl font-semibold">Emergency Call</h2>
              <p className="text-yellow-300">+91 100 / +91 112</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-2xl">✉️</div>
            <div>
              <h2 className="text-xl font-semibold">Email Us</h2>
              <p className="text-yellow-300">help@policedept.gov.in</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-2xl">📍</div>
            <div>
              <h2 className="text-xl font-semibold">Headquarters</h2>
              <p className="text-yellow-300">123 Main Street, Lucknow, UP, India</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-yellow-400 text-sm">
            🚔 Serving and Protecting 24/7
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
