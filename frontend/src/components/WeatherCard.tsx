
import { Cloud, WindIcon } from '../assets/WeatherIcons';
import { iconMap, cardBg } from '../constants/weatherConfig';
import type { WeatherData } from '../types/weather';

interface WeatherCardProps {
  city: WeatherData;
}

export default function WeatherCard({ city}: WeatherCardProps) {
  const Icon = iconMap[city.weather[0].main] || Cloud;
  const bg = cardBg[city.name] || 'bg-blue-400';

  return (
    <div className="w-full mx-auto">
      <div 
      className={`${bg} text-white rounded-t-2xl p-4 sm:p-6 relative overflow-hidden cursor-pointer hover:opacity-95 transition-opacity`}>
      
        <div className="relative z-10 mb-4 sm:mb-6">
          <h3 className="text-xl font-bold sm:text-2xl">{city.name}, {city.sys.country}</h3>
          <p className="text-xs sm:text-sm opacity-90">9.19am, Feb 8</p>
        </div>
        
        <div className="relative z-10 flex items-center justify-between gap-2">
          <div className="flex items-center flex-shrink-0 gap-2 sm:gap-3">
            <Icon />
            <span className="text-sm font-medium leading-tight capitalize sm:text-lg">{city.weather[0].description}</span>
          </div>
          <div className="flex-shrink-0 text-right">
            <div className="text-4xl font-bold sm:text-5xl">{Math.round(city.main.temp)}°C</div>
            <div className="text-xs sm:text-sm mt-1 space-y-0.5">
              <p>Temp Min: {Math.round(city.main.temp_min)}°c</p>
              <p>Temp Max: {Math.round(city.main.temp_max)}°c</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 text-white bg-gray-800 rounded-b-2xl sm:p-6">
        <div className="grid grid-cols-2 gap-3 mb-3 text-xs sm:gap-4 sm:mb-4 sm:text-sm">
          <div className="space-y-1">
            <p><span className="font-semibold">Pressure:</span> {city.main.pressure}hPa</p>
            <p><span className="font-semibold">Humidity:</span> {city.main.humidity}%</p>
            <p><span className="font-semibold">Visibility:</span> {(city.visibility / 1000).toFixed(1)}km</p>
          </div>
          <div className="space-y-1 text-right">
            <p><span className="font-semibold">Sunrise:</span> {new Date(city.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p><span className="font-semibold">Sunset:</span> {new Date(city.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-2 pt-3 border-t border-gray-700 sm:pt-4">
          <WindIcon />
          <span className="text-xs sm:text-sm">{city.wind.speed}m/s {city.wind.deg} Degree</span>
        </div>
      </div>
    </div>
  );
}