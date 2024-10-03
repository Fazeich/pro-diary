import { uniqueId } from 'lodash';
import React from 'react';
import { IDiary } from 'stores/diary/types';
import { DiaryItemWrapper } from '../styles';
import { Paragraph } from 'uikit/components';
import { Dropdown, notification } from 'antd';
import { unarchiveDiaryFx } from 'stores/diary/diary';
import { useUnit } from 'effector-react';
import { $main } from 'stores/main/main';

export const Diary = (diary: IDiary) => {
  const { isMobile } = useUnit($main);

  const context = [
    {
      label: (
        <Paragraph
          text='Вернуть из архива'
          noColor
          onClick={() =>
            unarchiveDiaryFx({ diaryId: diary?._id }).catch((req) => {
              const errorMessage = req?.response?.data?.message;

              notification.error({
                message: errorMessage || 'Не удалось вернуть задачу из архива',
              });
            })
          }
        />
      ),
      key: 'unarchive',
    },
    // {
    //   label: (
    //     <Paragraph
    //       text='Удалить'
    //       onClick={() => {
    //         deleteDiaryFx({ diaryId: diary._id });
    //       }}
    //     />
    //   ),
    //   key: 'delete',
    // },
  ];

  return (
    <Dropdown
      key={uniqueId()}
      menu={{ items: context }}
      trigger={isMobile ? ['click'] : ['contextMenu']}
    >
      <DiaryItemWrapper>
        <Paragraph text={diary?.title} className='select-none' />
      </DiaryItemWrapper>
    </Dropdown>
  );
};
