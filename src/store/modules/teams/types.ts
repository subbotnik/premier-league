export interface TeamInfo {
  team: {
    code: string,
    country: string,
    founded: number,
    id: number,
    logo: string,
    name: string,
    national: false,
  },
  venue: {
    address: string,
    capacity: number,
    city: string,
    country: string,
    name: string,
    surface: string,
    image: string,
  },
}

export interface PlayerInfo {
  id: number;
  name: string;
  age: number;
  position: string;
  number: number;
  photo: string;
}

export interface TeamsState {
  data: Array<TeamInfo>;
  loading: boolean;
  players: Array<PlayerInfo>;
}

