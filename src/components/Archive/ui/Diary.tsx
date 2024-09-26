import { uniqueId } from 'lodash';
import React from 'react';
import { IDiary } from 'stores/diary/types';
import { DiaryItemWrapper } from '../styles';
import { Paragraph } from 'uikit/components';
import { Dropdown } from 'antd';
import { deleteDiaryFx, unarchiveDiaryFx } from 'stores/diary/diary';

export const Diary = (diary: IDiary) => {
  const context = [
    {
      label: (
        <>
          <Paragraph
            text='Вернуть из архива'
            onClick={() => unarchiveDiaryFx({ diaryId: diary?._id })}
          />
        </>
      ),
      key: 'unarchive',
    },
    {
      label: (
        <Paragraph
          text='Удалить'
          onClick={() => {
            deleteDiaryFx({ diaryId: diary._id });
          }}
        />
      ),
      key: 'delete',
    },
  ];

  return (
    <Dropdown key={uniqueId()} menu={{ items: context }} trigger={['contextMenu']}>
      <DiaryItemWrapper>
        <Paragraph text={diary?.title} />
      </DiaryItemWrapper>
    </Dropdown>
  );
};
