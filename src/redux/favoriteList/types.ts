export type FavItem = {
  id: string | number;
  title: string;
  lat: number;
  lon: number;
  count?: number | undefined;
  country: string;
  isFavorite?: boolean;
};

export interface FavSliceState {
  items: FavItem[];
}
