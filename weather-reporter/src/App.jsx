import { useState, useEffect } from 'react';
import { fetchWeather } from './api/weatherApi';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import WeatherDetails from './components/WeatherDetails';
import Loader from './components/Loader';

function App() {
  const [city, setCity] = useState('Colombo');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchWeather(city)
      .then(data => setWeather(data))
      .finally(() => setLoading(false));
  }, [city]);

  return (
    <div className="min-h-screen bg-[#111015] text-white p-4">
      <SearchBar onSearch={setCity} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <WeatherCard weather={weather} />
          <WeatherDetails weather={weather} />
        </>
      )}
    </div>
  );
}

export default App;