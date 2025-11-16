import { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";
import Header from "../components/Header";

export default function Dashboard() {
  const [cities, setCities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/api/weather`)
      .then((r) => setCities(r.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <div className="mt-20 text-center text-white">Loading…</div>;

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 sm:p-6">
      <Header />
      <div className="grid grid-cols-1 gap-4 mx-auto mb-6 max-w-7xl md:grid-cols-2 sm:gap-6 sm:mb-8">
        {cities.map((city, i) => (
          <WeatherCard key={i} city={city} />
        ))}
      </div>

      <p className="text-xs text-center text-gray-400 sm:text-sm">
       @kavindu Wickramasinghe
      </p>
    </div>
  );
}
