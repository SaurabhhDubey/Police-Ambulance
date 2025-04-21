import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Ambulance() {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleSearch = () => {
    if (location.trim() === '') {
      alert('Please enter a location!');
    } else {
      alert(`Searching hospitals near "${location}"...`);
    }
  };

  return (
    <div className="h-screen w-full bg-cover bg-center flex flex-col bg-[url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1745232489/vecteezy_hospital-reception-hall-with-desk-and-elevator-vector_16724353_nhugii.jpg')]">
      
      {/* Header Section */}
      <div className="w-full flex items-center justify-between p-6 bg-black bg-opacity-50 backdrop-blur-sm shadow-md">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleNavigate('/')}
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-lg"
          >
            Main Portal
          </button>
        </div>

        <div className="flex items-center gap-8">
          <button 
            onClick={() => handleNavigate('/register')}
            className="text-white font-semibold hover:text-blue-300 transition duration-300"
          >
            Register
          </button>
          <button 
            onClick={() => handleNavigate('/information')}
            className="text-white font-semibold hover:text-blue-300 transition duration-300"
          >
            Information
          </button>
        </div>
      </div>

      {/* Left Side Content shifted UP */}
      <div className="flex flex-1 flex-col justify-start items-start pl-20 pt-24 gap-6">
        <p className="text-3xl font-bold text-white bg-black bg-opacity-50 p-4 rounded-lg shadow-md">
          Enter location for searching nearby hospitals
        </p>
        
        <div className="flex gap-4 items-center">
          <input 
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location..."
            className="px-5 py-3 w-72 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          <button 
            onClick={handleSearch}
            className="px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition duration-300 shadow-lg"
          >
            Search
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Ambulance;
