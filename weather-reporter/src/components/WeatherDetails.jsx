import AirIcon from '@mui/icons-material/Air'; // Wind
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // UV
import OpacityIcon from '@mui/icons-material/Opacity'; // Humidity
import VisibilityIcon from '@mui/icons-material/Visibility'; // Visibility

export default function WeatherDetails({ weather }) {
  if (!weather) return null;
  const { current } = weather;

  return (
    <div className="bg-[#1b1b1d] w-[580px] p-4 rounded-2xl ml-20 text-white">
      <h2 className="text-center text-lg font-semibold mb-4">Today's Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#232c3b] rounded-xl p-4 flex flex-col items-center justify-center text-center h-32">
          <AirIcon style={{ fontSize: 30 }} />
          <p className="text-sm mt-2">Wind Status</p>
          <p className="text-base font-semibold">{current.wind_kph} km/h</p>
        </div>

        <div className="bg-[#232c3b] rounded-xl p-4 flex flex-col items-center justify-center text-center h-32">
          <WbSunnyIcon style={{ fontSize: 30 }} />
          <p className="text-sm mt-2">UV Index</p>
          <p className="text-base font-semibold">{current.uv}</p>
        </div>

        <div className="bg-[#232c3b] rounded-xl p-4 flex flex-col items-center justify-center text-center h-32">
          <OpacityIcon style={{ fontSize: 30 }} />
          <p className="text-sm mt-2">Humidity</p>
          <p className="text-base font-semibold">{current.humidity}%</p>
        </div>

        <div className="bg-[#232c3b] rounded-xl p-4 flex flex-col items-center justify-center text-center h-32">
          <VisibilityIcon style={{ fontSize: 30 }} />
          <p className="text-sm mt-2">Visibility</p>
          <p className="text-base font-semibold">{current.vis_km} km</p>
        </div>
      </div>
    </div>
  );
}
