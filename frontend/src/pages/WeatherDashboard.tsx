import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react"; // ← NEW
import WeatherCard from "../components/WeatherCard";
import type { WeatherData } from "../types/weather";
import WeatherDetail from "./WeatherDetail";
import Header from "../components/Header";

export default function Dashboard() {
  const {
    isAuthenticated,
    isLoading: authLoading,
    getAccessTokenSilently,
  } = useAuth0();

  const [cities, setCities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchWeather = async () => {
      try {
        setLoading(true);

        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "https://weatherr-app/api",
            scope: "weather:read",
          },
        });

        const res = await axios.get("http://localhost:5000/api/weather", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCities(res.data);
      } catch (err: any) {
        console.error("Failed to fetch weather:", err);

        if (err.error === "consent_required") {
          const { loginWithRedirect } = useAuth0();
          await loginWithRedirect({
            authorizationParams: {
              audience: "https://weatherr-app/api",
              scope: "openid profile email weather:read",
              prompt: "consent",
            },
          });
        }
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
    <div className="min-h-screen p-4 bg-gradient-to-br from-blue-500 via-blue-600 to-slate-800 sm:p-6">
      <Header />
      <div className="grid grid-cols-1 gap-4 mx-auto mb-6 max-w-7xl md:grid-cols-2 sm:gap-6 sm:mb-8">
        {cities.map((city, i) => (
          <WeatherCard key={i} city={city} onSelect={() => setSelected(city)} />
        ))}
      </div>

      <p className="text-xs text-center text-gray-400 sm:text-sm">
        @Kavindu Wickramasinghe
      </p>
    </div>
  );
}
