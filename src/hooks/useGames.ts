
import useData from "./useData";

export interface Platoform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platoform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
