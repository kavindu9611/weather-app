import { Request, Response } from "express";
import citiesData from "../../cities.json";
import { fetchWeatherById } from "../services/weatherService";

const cities = citiesData.List;

export const getAllWeather = async (req: Request, res: Response) => {
  try {
    const weatherPromises = cities.map(async (city) => {
      try {
        return await fetchWeatherById(city.CityCode);
      } catch (err: any) {
        return {
          cityId: err.cityId,
          error: err.message,
          status: err.status,
        };
      }
    });

    const results = await Promise.all(weatherPromises);
    res.json(results);
    
  } catch (error: any) {
    res.status(500).json({
      error: "Server error while fetching weather",
      details: error.message,
    });
  }
};
