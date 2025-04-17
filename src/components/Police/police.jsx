import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Police() {
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [showMap, setShowMap] = useState(false);
  const [isMapsReady, setIsMapsReady] = useState(false);

  // Load Google Maps JS API
  const loadGoogleMapsAPI = () => {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps) {
        resolve();
        return;
      }

      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCJYUlWJWn2os-ZwMhSLjSwSQPtwHxPLOQ&libraries=places&loading=async`;

        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      } else {
        const checkReady = setInterval(() => {
          if (window.google && window.google.maps) {
            clearInterval(checkReady);
            resolve();
          }
        }, 100);
      }
    });
  };

  // Initialize the map with police stations nearby
  const initMap = (lat, lng) => {
    const location = { lat, lng };
    const map = new window.google.maps.Map(mapRef.current, {
      center: location,
      zoom: 14,
    });

    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(
      {
        location,
        radius: 5000,
        type: 'police',
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          results.forEach((place) => {
            new window.google.maps.Marker({
              position: place.geometry.location,
              map,
              title: place.name,
            });
          });
        }
      }
    );
  };

  // Trigger search & map load
  const geocodeLocation = () => {
    if (!isMapsReady || !window.google) {
      alert('Google Maps is still loading. Please wait a moment.');
      return;
    }
  
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: searchLocation }, (results, status) => {
      console.log('Geocoder Status:', status);
      console.log('Geocoder Results:', results);
  
      if (status === 'OK') {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        initMap(lat, lng);
        setShowMap(true);
      } else {
        alert('Geocode failed: ' + status);
      }
    });
  };
  
  

  
  useEffect(() => {
    loadGoogleMapsAPI()
      .then(() => {
        setIsMapsReady(true);
        console.log('Google Maps API loaded!');
      })
      .catch(() => alert('Failed to load Google Maps.'));
  }, []);

  return (
    <div className="h-screen bg-cover opacity-90 flex justify-center items-center bg-center bg-[url('https://res.cloudinary.com/dyjmgpb5p/image/upload/v1742355389/portrait-male-security-guard-with-uniform_23-2150368732_qyyu5p.jpg')]">
      <div className='relative w-full h-full'>
        <div className='text-white absolute top-40 left-10 text-lg'>Enter location to get Police station information</div>
        
        <div className='absolute top-60 left-10 flex gap-2'>
          <input 
            type='text' 
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            placeholder='Enter city or address'
            className='px-4 py-2 rounded-md w-[300px]'
          />
          <button 
            onClick={geocodeLocation} 
            className='bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-80'
          >
            Search
          </button>
        </div>

        <div className='absolute top-10 left-10 right-10 flex items-center justify-between'>
          <div 
            className='bg-black text-white px-4 py-2 rounded-lg opacity-85 hover:cursor-pointer' 
            onClick={() => navigate("/")}
          >
            MAIN Portal
          </div>
          <nav className='bg-black bg-opacity-70 text-white px-6 py-2 rounded-lg absolute left-1/2 -translate-x-1/2 inline-flex gap-x-10'>
            <Link to="/police" className="hover:text-gray-300">Home</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
    
          </nav>
        </div>

        {showMap && (
          <div className='absolute bottom-10 left-10 right-10 h-[300px] rounded-lg shadow-lg bg-white bg-opacity-90 p-4'>
            <div className='flex justify-end mb-2'>
              <button 
                onClick={() => setShowMap(false)} 
                className='bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700'
              >
                Close Map
              </button>
            </div>
            <div ref={mapRef} className='w-full h-full rounded-lg'></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Police;
