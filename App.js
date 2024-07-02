
import './App.css';
import { useState}from'react'
import UseGeolocation from './useGeolocation';



export default function App() {

 const {isLoading,error,getPosition,position: {lat, lng},}= UseGeolocation()
  
  const [countClicks, setCountClicks] = useState(0);
  
  function handleclickcount(){
    setCountClicks((count) => count + 1);
    getPosition();
  }

  return (
    <div>
      <button onClick={handleclickcount} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
