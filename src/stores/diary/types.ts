export interface IDiary {
  id: number | string;
  title?: string;
  duration?: number;
  importance?: 'important' | 'not_important' | null;
}

export interface IDiaryStore {
  diaries: IDiary[];
  newDiary: Partial<IDiary>;
}
