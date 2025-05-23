import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function Police() {
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [policeStations, setPoliceStations] = useState([]);
  const [showMap, setShowMap] = useState(false);

  const geocodeLocation = async () => {
    if (!searchLocation.trim()) {
      alert('Please enter a location!');
      return;
    }

    try {
      const geoRes = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: { q: searchLocation, format: 'json' },
      });

      if (geoRes.data.length === 0) {
        alert('Location not found');
        return;
      }

      const { lat, lon } = geoRes.data[0];
      const latNum = parseFloat(lat);
      const lonNum = parseFloat(lon);
      setCoordinates([latNum, lonNum]);
      setShowMap(true);

      const overpassQuery = `
        [out:json];
        (
          node["amenity"="police"](around:5000,${latNum},${lonNum});
          way["amenity"="police"](around:5000,${latNum},${lonNum});
          relation["amenity"="police"](around:5000,${latNum},${lonNum});
        );
        out center;
      `;

      const overpassRes = await axios.post(
        'https://overpass-api.de/api/interpreter',
        overpassQuery,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      const stations = overpassRes.data.elements.map((item) => {
        const center = item.lat ? { lat: item.lat, lon: item.lon } : item.center;
        return {
          id: item.id,
          name: item.tags?.name || 'Unnamed Police Station',
          lat: center.lat,
          lon: center.lon,
        };
      });

      setPoliceStations(stations);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('An error occurred while fetching data.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1742355389/portrait-male-security-guard-with-uniform_23-2150368732_qyyu5p.jpg')",
      }}
    >
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-black bg-opacity-60 text-white shadow-md">
        <button onClick={() => navigate('/')} className="font-bold">Main Portal</button>
        <nav className="flex gap-6">
          <Link to="/police" className="hover:text-gray-300">Home</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </nav>
      </div>

      {/* Main Body */}
      <div className="flex flex-col lg:flex-row gap-8 p-6 items-start">
        
        {/* Search Panel */}
        <div className="bg-black bg-opacity-60 text-white p-8 rounded-xl w-full max-w-md mx-auto lg:mx-0 shadow-xl">
          <p className="text-2xl font-bold mb-6">Enter your location to find nearby police stations:</p>
          <input
            type="text"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            placeholder="Type city, area or landmark..."
            className="px-5 py-3 w-full mb-6 rounded-lg text-black text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={geocodeLocation}
            className="w-full bg-green-600 text-white text-lg font-semibold px-5 py-3 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
          >
            Search
          </button>
        </div>

        {/* Map Section */}
        {showMap && coordinates && (
          <div className="relative w-full lg:max-w-4xl h-[400px] bg-white bg-opacity-90 rounded-lg shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-4 right-4 z-10 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Close Map
            </button>

            <MapContainer center={coordinates} zoom={13} className="w-full h-full rounded-lg z-0">
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={coordinates}>
                <Popup>Your searched location</Popup>
              </Marker>
              {policeStations.map((station) => (
                <Marker key={station.id} position={[station.lat, station.lon]}>
                  <Popup>{station.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        )}
      </div>
    </div>
  );
}

export default Police;
