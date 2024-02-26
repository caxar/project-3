export enum Status {
  Pending = "pending",
  Succeeded = "succeeded",
  Failed = "failed",
}

export interface AirProps {
  list: [
    {
      components: {
        o3: number;
        no2: number;
        so2: number;
        pm2_5: number;
      };
    }[]
  ];
}

export interface airSliceState {
  entities: any[];
  status: Status;
}

export interface fetchAirPopulation {
  city: any;
}
