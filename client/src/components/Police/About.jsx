import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
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
          onClick={() => navigate('/contact')}
          className="bg-yellow-800 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all"
        >
          Contact
        </button>
      </div>

      {/* About Section */}
      <div className="bg-yellow-900 bg-opacity-90 p-10 rounded-2xl shadow-2xl max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center border-b-2 border-yellow-600 pb-2">
          👮 About Police Department
        </h1>

        <p className="text-yellow-200 text-lg leading-relaxed mb-4">
          The Police Department is committed to maintaining law and order,
          protecting citizens, and ensuring justice with integrity. With a
          legacy of service and a focus on modernization, our department
          prioritizes community engagement and technological advancements to
          make our city safer every day.
        </p>

        <p className="text-yellow-200 text-lg leading-relaxed mb-4">
          Our officers undergo rigorous training and operate with strict
          discipline, ensuring that public safety and justice remain at the
          core of everything we do. We are proud to serve our communities 24/7.
        </p>

        <p className="text-yellow-300 italic mt-6 text-center">
          “To Protect and Serve — with Honor, Courage, and Dedication.”
        </p>
      </div>
    </div>
  );
}

export default About;
