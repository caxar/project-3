export type FavItem = {
  id: string | number;
  title: string;
  lat: number;
  lon: number;
  count?: number | undefined;
  country: string;
};

export interface FavSliceState {
  items: FavItem[];
}
