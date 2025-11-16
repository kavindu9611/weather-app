interface CacheItem {
  data: any;
  timestamp: number;
}
const cache = new Map<string, CacheItem>();
const TTL = 5 * 60 * 1000;

export const getCache = (key: string) => {
  const item = cache.get(key);
  if (item && Date.now() - item.timestamp < TTL) return item.data;
  cache.delete(key);
  return null;
};

export const setCache = (key: string, data: any) => {
  cache.set(key, { data, timestamp: Date.now() });
};