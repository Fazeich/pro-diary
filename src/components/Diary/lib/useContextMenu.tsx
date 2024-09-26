import { useUnit } from 'effector-react';
import { cloneDeep } from 'lodash';
import { archiveDiaryFx, createDiaryFx, finishDiaryFx, returnDiaryFx } from 'stores/diary/diary';
import { $efficiency, $main } from 'stores/main/main';
import { Paragraph } from 'uikit/components';

export const useContextMenu = ({ diary }) => {
  const { timeLost } = useUnit($efficiency);
  const { user } = useUnit($main);

  const defaultContext = [
    {
      label: (
        <Paragraph
          text='Дублировать'
          theme={timeLost >= (diary?.duration || 0) ? 'primary' : 'secondary'}
          onClick={() => {
            if (timeLost >= (diary?.duration || 0)) {
              const newDiary = cloneDeep(diary);

              delete newDiary._id;

              createDiaryFx({
                diary: { ...newDiary, title: `${newDiary.title}*` },
                userId: user.id,
              });
            }
          }}
        />
      ),
      key: 'dublicate',
      disabled: timeLost < (diary?.duration || 0),
    },

    {
      label: (
        <Paragraph
          text={diary?.finished ? 'Вернуть' : 'Завершить'}
          onClick={() => {
            if (diary?.finished) {
              returnDiaryFx({ diaryId: diary?._id });
            } else {
              finishDiaryFx({ diaryId: diary._id });
            }
          }}
        />
      ),
      key: 'finish',
    },
    {
      label: (
        <Paragraph
          text='Архивировать'
          onClick={() => {
            archiveDiaryFx({ diaryId: diary?._id });
          }}
        />
      ),
      key: 'archive',
    },
  ];

  return defaultContext;
};
