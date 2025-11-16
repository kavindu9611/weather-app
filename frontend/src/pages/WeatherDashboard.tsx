import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react"; // ← NEW
import WeatherCard from "../components/WeatherCard";
import type { WeatherData } from "../types/weather";
import WeatherDetail from "./WeatherDetail";

export default function Dashboard() {
  const {
    isAuthenticated,
    isLoading: authLoading,
    getAccessTokenSilently,
    logout,
    user,
  } = useAuth0();

  const [cities, setCities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchWeather = async () => {
      try {
        const token = await getAccessTokenSilently();
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/weather`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setCities(res.data);
      } catch (err) {
        console.error("Failed to fetch weather:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Authenticating…
      </div>
    );
  }

  if (!isAuthenticated) return null; 

  if (selected) {
    return <WeatherDetail city={selected} onBack={() => setSelected(null)} />;
  }

  if (loading)
    return <div className="mt-20 text-center text-white">Loading…</div>;

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          Weather App
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-300">{user?.email}</span>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter a city"
          className="flex-1 px-4 py-2 text-white placeholder-gray-400 bg-gray-800 rounded"
          disabled
        />
        <button
          className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700"
          disabled
        >
          Add City
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 mx-auto mb-6 max-w-7xl md:grid-cols-2 sm:gap-6 sm:mb-8">
        {cities.map((city, i) => (
          <WeatherCard key={i} city={city} onSelect={() => setSelected(city)} />
        ))}
      </div>

      <p className="text-xs text-center text-gray-400 sm:text-sm">
        @kavindu Wickramasinghe
      </p>
    </div>
  );
}
