import { BackArrow, Cloud, WindIcon } from "../assets/WeatherIcons";
import Header from "../components/Header";
import { iconMap, cardBg } from "../constants/weatherConfig";
import type { WeatherData } from "../types/weather";

interface WeatherDetailProps {
  city: WeatherData;
  onBack: () => void;
}

export default function WeatherDetail({ city, onBack }: WeatherDetailProps) {
  const Icon = iconMap[city.weather[0].main] || Cloud;
  const bg = cardBg[city.name] || "bg-blue-400";

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 sm:p-6">
      <Header />
      <div className="w-full max-w-3xl mx-auto mt-8 sm:mt-12">
        <div
          className={`relative ${bg} p-6 overflow-hidden text-white rounded-t-2xl sm:rounded-t-3xl sm:p-8`}
        >
          <button
            onClick={onBack}
            className="absolute z-20 flex items-center gap-2 text-base text-white top-4 left-4 sm:top-6 sm:left-6 sm:text-lg hover:opacity-80"
          >
            <BackArrow />
          </button>

          <div className="relative z-10 mb-6 text-center sm:mb-8">
            <h2 className="text-2xl font-bold sm:text-4xl">
              {city.name}, {city.sys.country}
            </h2>
            <p className="mt-1 text-base sm:text-lg opacity-90 sm:mt-2">
              9.19am, Feb 8
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-center gap-6 mb-6 sm:gap-12 sm:mb-8">
            <div className="flex-shrink-0">
              <Icon />
              <p className="mt-3 text-base text-center capitalize sm:text-lg">
                {city.weather[0].description}
              </p>
            </div>

            <div className="w-px h-32 bg-white opacity-30"></div>

            <div className="text-center">
              <div className="mb-4 text-5xl font-bold sm:text-7xl">
                {Math.round(city.main.temp)}°C
              </div>
              <div className="space-y-1 text-base sm:text-lg">
                <p>Temp Min: {Math.round(city.main.temp_min)}°c</p>
                <p>Temp Max: {Math.round(city.main.temp_max)}°c</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 text-white bg-gray-800 rounded-b-2xl sm:rounded-b-3xl sm:p-8">
          <div className="grid grid-cols-3 gap-4 text-sm sm:gap-6 sm:text-base">
            <div className="space-y-1">
              <p>
                <span className="font-semibold">Pressure:</span>{" "}
                {city.main.pressure}hPa
              </p>
              <p>
                <span className="font-semibold">Humidity:</span>{" "}
                {city.main.humidity}%
              </p>
              <p>
                <span className="font-semibold">Visibility:</span>{" "}
                {(city.visibility / 1000).toFixed(1)}km
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <WindIcon />
              <span className="mt-2 text-xs text-center sm:text-sm">
                {city.wind.speed}m/s {city.wind.deg} Degree
              </span>
            </div>

            <div className="space-y-1 text-right">
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

        <p className="text-center text-gray-400 mt-text-xs mt sm:text-sm sm:mt-60 ">
          @Kavindu Wickramasinghe
        </p>
      </div>
    </div>
  );
}
