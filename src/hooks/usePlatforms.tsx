import useData from "./useData";

export interface Platform {
  id: number | null;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>("/platforms");

export default usePlatforms;
