import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function Ambulance() {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [showMap, setShowMap] = useState(false);

  const handleNavigate = (path) => navigate(path);

  const handleSearch = async () => {
    if (!location.trim()) {
      alert('Please enter a location!');
      return;
    }

    try {
      const geoRes = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: { q: location, format: 'json' }
      });

      if (geoRes.data.length === 0) {
        alert('Location not found');
        return;
      }

      const { lat, lon } = geoRes.data[0];
      setCoordinates([parseFloat(lat), parseFloat(lon)]);
      setShowMap(true);

      const query = `
        [out:json];
        (
          node["amenity"="hospital"](around:5000,${lat},${lon});
          way["amenity"="hospital"](around:5000,${lat},${lon});
          relation["amenity"="hospital"](around:5000,${lat},${lon});
        );
        out center;
      `;

      const response = await axios.post(
        'https://overpass-api.de/api/interpreter',
        query,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      const data = response.data.elements.map(item => {
        const center = item.lat ? { lat: item.lat, lon: item.lon } : item.center;
        return {
          id: item.id,
          name: item.tags?.name || 'Unnamed Hospital',
          lat: center.lat,
          lon: center.lon
        };
      });

      setHospitals(data);
    } catch (err) {
      console.error(err);
      alert('Error fetching data.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1745232489/vecteezy_hospital-reception-hall-with-desk-and-elevator-vector_16724353_nhugii.jpg')"
      }}
    >
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-black bg-opacity-60 text-white shadow-md">
        <button onClick={() => handleNavigate('/')} className="font-bold">Main Portal</button>
        <div className="flex gap-6">
          <button onClick={() => handleNavigate('/register')}>Register</button>
          <button onClick={() => handleNavigate('/information')}>Information</button>
        </div>
      </div>

      {/* Search Panel */}
      <div className="p-6 flex flex-col lg:flex-row gap-6">
        <div className="bg-black bg-opacity-60 text-white p-6 rounded-xl w-full max-w-md">
          <p className="text-2xl font-bold mb-4">Enter your location to find nearby hospitals:</p>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location..."
            className="px-4 py-3 w-full rounded-lg text-black text-lg mb-4 shadow focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSearch}
            className="w-full bg-green-600 text-white text-lg font-semibold px-5 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Search
          </button>
        </div>

        {/* Map Section */}
        {showMap && coordinates && (
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden border-2 border-white shadow-xl bg-white bg-opacity-90">
            {/* Close Button */}
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-4 right-4 z-10 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Close Map
            </button>

            <MapContainer center={coordinates} zoom={13} className="h-full w-full z-0">
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={coordinates}>
                <Popup>Your searched location</Popup>
              </Marker>
              {hospitals.map(h => (
                <Marker key={h.id} position={[h.lat, h.lon]}>
                  <Popup>{h.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ambulance;
