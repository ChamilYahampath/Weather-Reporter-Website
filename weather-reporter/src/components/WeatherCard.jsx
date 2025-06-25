import {
    LocationOn as LocationIcon,
    WbSunny as SunnyIcon,
    Cloud as CloudyIcon,
    Thunderstorm as StormIcon,
    AcUnit as SnowIcon,
    Grain as RainIcon,
    Foggy as FogIcon,
  } from '@mui/icons-material';
  
  export default function WeatherCard({ weather }) {
    if (!weather) return null;
  
    const { location, current } = weather;
  
    // Get the date and day
    const dateObj = new Date(location.localtime);
    const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    const day = formattedDate.split(',')[0];
    const date = formattedDate.replace(`${day}, `, '');
  
    // Choose icon based on condition text
    const getWeatherIcon = (condition) => {
        const c = condition.toLowerCase();
      
        if (c.includes('thunder')) {
          return <StormIcon style={{ fontSize: 64 }} />;
        } else if (c.includes('fog')) {
          return <FogIcon style={{ fontSize: 64 }} />;
        } else if (c.includes('snow') || c.includes('ice')) {
          return <SnowIcon style={{ fontSize: 64 }} />;
        } else if (c.includes('rain') || c.includes('drizzle')) {
          return <RainIcon style={{ fontSize: 64 }} />;
        } else if (c.includes('cloud')) {
          return <CloudyIcon style={{ fontSize: 64 }} />;
        } else if (c.includes('sunny') || c.includes('clear')) {
          return <SunnyIcon style={{ fontSize: 64 }} />;
        } else {
          return <SunnyIcon style={{ fontSize: 64 }} />; // default fallback
        }
      };
      
      
  
    return (
      <div className="bg-[#1b1b1d] text-white w-[580px] h-[230px] rounded-2xl p-6 flex items-center justify-between shadow-lg ml-20 mb-6">
        <div>
          <div className="flex items-center mb-2">
            <span className="bg-purple-600 text-xs px-3 py-1 rounded-full mr-2">
              <LocationIcon style={{ fontSize: 16, marginRight: 4, marginBottom: 3 }} />
              {location.name}
            </span>
          </div>
          <div className="flex items-center mt-4">
          <h2 className="text-3xl font-semibold">{day}</h2>
          </div>
          <div className="flex items-center mb-2">
          <p className="text-sm text-gray-400">{date}</p>
          </div>
          <div className="text-4xl font-bold mt-4">{current.temp_c}°C</div>
          <div className="text-sm text-gray-400">
            High: {current.temp_c + 1} Low: {current.temp_c - 1}
          </div>
        </div>
        <div className="flex flex-col items-center">
          {getWeatherIcon(current.condition.text)}
          <div className="text-xl mt-2">{current.condition.text}</div>
        </div>
      </div>
    );
  }
  