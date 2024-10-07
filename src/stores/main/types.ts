export interface IUser {
  login: string;
  name: string;
  id?: string;
  settings: ISettings;
}

export interface ISettings {
  userSettings: IUserSettings;

  serverSettings: IServerSettings;
}

export interface IUserSettings {
  isUsingEfficiency: boolean;
  efficiency: number;
}

export interface IServerSettings {
  isDailyArchivating: boolean;
  archivatingTime: number;
  isShowWelcome: boolean;
  isShowLearn: boolean;
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

export interface IChangeUserSettingsParams {
  userId: string;
  settings: Partial<IUserSettings>;
}

export interface IChangeServerSettingsParams {
  userId: string;
  settings: Partial<IServerSettings>;
}
