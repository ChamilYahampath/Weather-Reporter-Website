import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GrainIcon from '@mui/icons-material/Grain';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LocationOnIcon from '@mui/icons-material/LocationOn';

  

  
  export default function WeatherCard({ weather }) {
    if (!weather) return null;
  
    const { location, current, forecast } = weather;
  
    // Get the date and day
    const dateObj = new Date(location.localtime);
    const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    const day = formattedDate.split(',')[0];
    const date = formattedDate.replace(`${day}, `, '');

    // Get high and low temp
    const high = forecast?.forecastday?.[0]?.day?.maxtemp_c ?? current.temp_c + 1;
    const low = forecast?.forecastday?.[0]?.day?.mintemp_c ?? current.temp_c - 1;
  
    // Choose icon based on condition text
    const getWeatherIcon = (condition) => {
        const c = condition.toLowerCase();
      
        if (c.includes('thunder')) {
          return <ThunderstormIcon style={{ fontSize: 64 }} />;
        } else if (c.includes('fog')) {
          return <WbCloudyIcon style={{ fontSize: 64 }} />;
        } else if (c.includes('snow') || c.includes('ice')) {
          return <AcUnitIcon style={{ fontSize: 64 }} />;
        } else if (c.includes('rain') || c.includes('drizzle')) {
          return <GrainIcon style={{ fontSize: 64 }} />;
        } else if (c.includes('cloud')) {
          return <CloudIcon style={{ fontSize: 64 }} />;
        } else if (c.includes('sunny') || c.includes('clear')) {
          return <WbSunnyIcon style={{ fontSize: 64 }} />;
        } else {
          return <WbSunnyIcon style={{ fontSize: 64 }} />; // default fallback
        }
      };
      
      
  
    return (
      <div className="bg-[#1b1b1d] text-white w-[580px] h-[230px] rounded-2xl p-6 flex items-center justify-between shadow-lg ml-20 mb-6">
        <div>
          <div className="flex items-center mb-2">
            <span className="bg-purple-600 text-xs px-3 py-1 rounded-full mr-2">
              <LocationOnIcon style={{ fontSize: 16, marginRight: 4, marginBottom: 3 }} />
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
            High: {high}°C Low: {low}°C
          </div>
        </div>
        <div className="flex flex-col items-center">
          {getWeatherIcon(current.condition.text)}
          <div className="text-xl mt-2">{current.condition.text}</div>
        </div>
      </div>
    );
  }
  