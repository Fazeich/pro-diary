export interface IDiary {
  _id?: string;
  title?: string;
  duration?: number;
  importance?: 'important' | 'not_important' | null;
}

export interface IDiaryStore {
  diaries: IDiary[];
  newDiary: IDiary;
}

export interface IGetDiaryParams {
  userId: string;
}

export interface IDeleteDiaryParams {
  diaryId: string;
}

export interface ICreateDiaryParams {
  userId: string;
  diary?: {
    title?: string;
    duration?: number;
    importance?: 'important' | 'not_important' | null;
  };
}
