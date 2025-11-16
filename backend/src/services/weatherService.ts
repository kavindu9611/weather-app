import axios from "axios";
import { getCache, setCache } from "../cache";

const API_KEY = process.env.OPENWEATHER_API_KEY || '38362449fce13e8bcd4a6bc7e4f8596e'
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";


export const fetchWeatherById = async (cityId: string): Promise<any> => {
  try {
    const cacheKey = `weather_${cityId}`;
    const cached = getCache(cacheKey);
    if (cached) return cached;

    const response = await axios.get(BASE_URL, {
      params: { id: cityId, appid: API_KEY },
    });

    setCache(cacheKey, response.data);
    return response.data;

  } catch (err: any) {
    const status = err.response?.status || 500;
    const message = err.response?.data?.message || "Failed to fetch weather";

    throw {
      cityId,
      status,
      message,
    };
  }
};
