export type ImportanceTypes = 1 | 2 | undefined;

export interface IDiary {
  _id?: string;
  title?: string;
  duration?: number;
  finished?: boolean;
  importance?: ImportanceTypes;
}

export interface IDiaryStore {
  diaries: IDiary[];
  archive: {
    finished: IDiary[];
    unfinished: IDiary[];
  };
  newDiary: IDiary;
}

export interface IGetDiaryParams {
  userId: string;
}

export interface IGetArchivedDiaryParams {
  userId: string;
  finished?: boolean;
}

export interface IDeleteDiaryParams {
  diaryId: string;
}

export interface ICreateDiaryParams {
  userId: string;
  diary?: {
    title?: string;
    duration?: number;
    importance?: ImportanceTypes;
  };
}
