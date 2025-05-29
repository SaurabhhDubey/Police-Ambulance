import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contactNumber: '',
    address: '',
    emergencyContact: '',
    medicalHistory: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      alert('Registration Successful!');
      navigate('/ambulance'); // Redirect to ambulance page after successful registration
    } catch (err) {
      setError(err.message);
      alert('Registration failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-cover bg-center flex flex-col bg-[url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1745232489/vecteezy_hospital-reception-hall-with-desk-and-elevator-vector_16724353_nhugii.jpg')] bg-fixed">
      
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
            onClick={() => navigate('/information')}
            className="text-white font-medium hover:text-blue-300 transition duration-300"
          >
            Information
          </button>
          <button 
            onClick={() => navigate('/ambulance')}
            className="text-white font-medium hover:text-blue-300 transition duration-300"
          >
            Ambulance
          </button>
        </div>
      </div>

      {/* Register Form Section */}
      <div className="flex flex-1 flex-col justify-center items-center gap-6 px-4">
        <h2 className="text-3xl font-medium text-white bg-black bg-opacity-50 p-4 rounded-lg shadow-md">
          Hospital Registration Form
        </h2>
        
        {error && (
          <div className="w-full max-w-lg bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-black bg-opacity-60 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4">
            {/* Name */}
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="px-4 py-2 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            
            {/* Age */}
            <input 
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
              className="px-4 py-2 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Gender */}
            <select 
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="px-4 py-2 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            {/* Contact Number */}
            <input 
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              placeholder="Contact Number"
              className="px-4 py-2 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Address */}
            <textarea 
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="px-4 py-2 rounded-lg bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Emergency Contact */}
            <input 
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              placeholder="Emergency Contact"
              className="px-4 py-2 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Medical History */}
            <textarea 
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleInputChange}
              placeholder="Medical History (Optional)"
              className="px-4 py-2 rounded-lg bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={loading}
              className={`px-6 py-2 bg-green-500 text-white font-medium rounded-full transition duration-300 shadow-lg mt-6 ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
              }`}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default Register;
