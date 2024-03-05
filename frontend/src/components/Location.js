import React, { useState, useEffect } from 'react';
function MyLocation() {
    const [position, setPosition] = useState({ latitude: null, longitude: null });
  
    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        });
      } else {
        console.log("Geolocation is not available in your browser.");
      }
    }, []);
  
    return (
      <div>
        <h2>My Current Location</h2>
        {position.latitude && position.longitude ? (
          <p>
            Latitude: {position.latitude}, Longitude: {position.longitude}
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  
  export default MyLocation;