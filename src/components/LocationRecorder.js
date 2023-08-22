import React, { useState } from 'react';

function LocationRecorder() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  function getLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocation({
          latitude,
          longitude
        });
      },
      () => {
        setError("Unable to retrieve your location");
      }
    );
  }

  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      {location ? (
        <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
      ) : null}
      {error ? <p>Error: {error}</p> : null}
    </div>
  );
}

export default LocationRecorder;