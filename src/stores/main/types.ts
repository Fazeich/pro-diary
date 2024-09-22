import { ThemeType } from "stores/theme/types";

export interface IUser {
  login: string;
  name: string;
  id: number;
}

export interface ISettings {
  theme: ThemeType;
  efficiency: number;
}

export interface IMainStore {
  user: IUser;
  isMobile: boolean;
  settings: ISettings;
}
