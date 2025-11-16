import { BackArrow, Cloud, WindIcon } from "../assets/WeatherIcons";
import { iconMap } from "../constants/weatherConfig";
import type { WeatherData } from "../types/weather";

interface WeatherDetailProps {
  city: WeatherData;
  onBack: () => void;
}

export default function WeatherDetail({ city, onBack }: WeatherDetailProps) {
  const Icon = iconMap[city.weather[0].main] || Cloud;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
      <div className="w-full max-w-3xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-4 text-base text-white sm:mb-6 sm:text-lg hover:opacity-80"
        >
          <BackArrow />
        </button>

        <div className="relative p-6 overflow-hidden text-white bg-blue-400 rounded-t-2xl sm:rounded-t-3xl sm:p-8">
          <div className="relative z-10 mb-6 text-center sm:mb-8">
            <h2 className="text-2xl font-bold sm:text-4xl">
              {city.name}, {city.sys.country}
            </h2>
            <p className="mt-1 text-base sm:text-lg opacity-90 sm:mt-2">
              9.19am, Feb 8
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-4 mb-6 sm:flex-row sm:gap-8 sm:mb-8">
            <Icon />
            <div className="hidden w-px h-20 bg-white sm:block opacity-30"></div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold sm:text-7xl">
                {Math.round(city.main.temp)}°C
              </div>
              <p className="mb-3 text-lg capitalize sm:text-xl sm:mb-4">
                {city.weather[0].description}
              </p>
              <div className="space-y-1 text-base sm:text-lg">
                <p>Temp Min: {Math.round(city.main.temp_min)}°c</p>
                <p>Temp Max: {Math.round(city.main.temp_max)}°c</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 text-white bg-gray-800 rounded-b-2xl sm:rounded-b-3xl sm:p-8">
          <div className="grid grid-cols-3 gap-3 mb-4 text-center sm:gap-6 sm:mb-6">
            <div>
              <p className="mb-1 text-xs sm:text-sm opacity-70">Pressure</p>
              <p className="text-sm font-semibold sm:text-lg">
                {city.main.pressure}hPa
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs sm:text-sm opacity-70">Humidity</p>
              <p className="text-sm font-semibold sm:text-lg">
                {city.main.humidity}%
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs sm:text-sm opacity-70">Visibility</p>
              <p className="text-sm font-semibold sm:text-lg">
                {(city.visibility / 1000).toFixed(1)}km
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 pt-4 text-sm border-t border-gray-700 sm:flex-row sm:gap-0 sm:pt-6 sm:text-base">
            <div className="flex items-center gap-2 sm:gap-3">
              <WindIcon />
              <span>
                {city.wind.speed}m/s {city.wind.deg} Degree
              </span>
            </div>
            <div className="space-y-1 text-center sm:text-right">
              <p>
                <span className="font-semibold">Sunrise:</span>{" "}
                {new Date(city.sys.sunrise * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p>
                <span className="font-semibold">Sunset:</span>{" "}
                {new Date(city.sys.sunset * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-center text-gray-400 sm:text-sm sm:mt-8">
          @Kavindu Wickramasinghe
        </p>
      </div>
    </div>
  );
}
