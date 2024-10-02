export interface IUser {
  login: string;
  name: string;
  id?: string;
  settings: ISettings;
}

export interface ISettings {
  isUsingEfficiency: boolean;
  efficiency: number;
  isShowWelcome: boolean;
}

export interface IMainStore {
  user: IUser;
  isMobile: boolean;
}

export interface IAuthParams {
  login: string;
  password: string;
}

export interface IChangeUserParams {
  userId: string;
  userData: IUser;
}

export interface IGetSettingsParams {
  userId: string;
}

export interface IChangeSettingsParams {
  userId: string;
  settingsData: Partial<ISettings>;
}
