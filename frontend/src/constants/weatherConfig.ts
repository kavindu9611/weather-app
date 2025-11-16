import { ClearSky, FewClouds, LightRain, Mist } from "../assets/WeatherIcons";


export const iconMap: Record<string, React.FC> = {
  Clouds: FewClouds,
  'Few clouds': FewClouds,
  Clear: ClearSky,
  Rain: LightRain,
  Mist: Mist,
};

export const cardBg: Record<string, string> = {
  Colombo: 'bg-blue-400',
  Tokyo: 'bg-purple-500',
  Liverpool: 'bg-green-400',
  Sydney: 'bg-orange-400',
  Boston: 'bg-red-400',
};