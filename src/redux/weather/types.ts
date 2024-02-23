export enum Status {
  Pending = "pending",
  Succeeded = "succeeded",
  Failed = "failed",
}

export interface WeatherProps {
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface weatherSliceState {
  entities: any[];
  search: string;
  city: any;
  status: Status;
}

export type fetchWeatherCity = {
  city: any;
};
