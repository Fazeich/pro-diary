export interface IUser {
  login: string;
  name: string;
  id?: string;
  settings: ISettings;
}

export interface ISettings {
  isUsingEfficiency: boolean;
  efficiency: number;
}

export interface IMainStore {
  user: IUser;
  isMobile: boolean;
}

export interface IAuthParams {
  login: string;
  password: string;
}
