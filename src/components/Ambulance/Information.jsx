import React from 'react';
import { useNavigate } from 'react-router-dom';

function Information() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-fixed flex flex-col bg-[url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1745232489/vecteezy_hospital-reception-hall-with-desk-and-elevator-vector_16724353_nhugii.jpg')]">
      
      {/* Header Section */}
      <div className="w-full flex items-center justify-between p-4 bg-black bg-opacity-50 backdrop-blur-sm shadow-md">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-lg"
          >
            Main Portal
          </button>
        </div>

        <div className="flex items-center gap-8">
          <button 
            onClick={() => navigate('/register')}
            className="text-white font-medium hover:text-blue-300 transition duration-300"
          >
            Register
          </button>
          <button 
            onClick={() => navigate('/ambulance')}
            className="text-white font-medium hover:text-blue-300 transition duration-300"
          >
            Ambulance
          </button>
          <button 
            onClick={() => navigate('/information')}
            className="text-white font-medium hover:text-blue-300 transition duration-300"
          >
            Information
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col items-center gap-8 p-6">

        {/* Page Title */}
        <h1 className="text-4xl font-semibold text-white bg-black bg-opacity-40 p-6 rounded-lg shadow-2xl">
          Ambulance & Emergency Process Information
        </h1>

        {/* Ambulance Process Section */}
        <section className="w-full max-w-3xl p-6 bg-black bg-opacity-60 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Ambulance Process</h2>
          <ul className="list-disc pl-6 text-white text-lg leading-relaxed">
            <li><strong>Step 1:</strong> Call emergency services and describe your situation clearly.</li>
            <li><strong>Step 2:</strong> Ambulance is dispatched to your location immediately.</li>
            <li><strong>Step 3:</strong> Paramedics provide first aid and transport to hospital.</li>
            <li><strong>Step 4:</strong> Hospital staff takes over for detailed treatment.</li>
          </ul>
          <p className="mt-4 text-white">
            Staying calm and accurate while sharing details can save lives.
          </p>
        </section>

        {/* Emergency Process Section */}
        <section className="w-full max-w-3xl p-6 bg-black bg-opacity-60 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Emergency Process</h2>
          <ol className="list-decimal pl-6 text-white text-lg leading-relaxed">
            <li>Check surroundings for danger before helping.</li>
            <li>Call ambulance and provide all necessary information.</li>
            <li>Assist the injured if possible until professionals arrive.</li>
            <li>Follow instructions of emergency services carefully.</li>
          </ol>
          <p className="mt-4 text-white">
            Quick and correct actions during emergencies ensure better outcomes.
          </p>
        </section>

        {/* Health Rescue Tips Section */}
        <section className="w-full max-w-3xl p-6 bg-black bg-opacity-60 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">Health Rescue Tips</h2>
          <ul className="list-disc pl-6 text-white text-lg leading-relaxed">
            <li>Learn basic First Aid techniques (CPR, wound care).</li>
            <li>Stay hydrated and maintain a healthy diet.</li>
            <li>Keep a personal medical kit at home and in your vehicle.</li>
            <li>Memorize emergency contacts and hospital numbers.</li>
            <li>Recognize warning signs like chest pain or difficulty breathing.</li>
          </ul>
          <p className="mt-4 text-white">
            Prevention and preparation are the best strategies for personal health rescue.
          </p>
        </section>

      </div>

    </div>
  );
}

export default Information;
