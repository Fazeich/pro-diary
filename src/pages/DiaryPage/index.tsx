import { Diary, Footer, Sidebar } from "components";
import { DiaryLayout } from "layouts";
import React from "react";

export const DiaryPage = () => {
  return (
    <DiaryLayout>
      <Sidebar />
      <Diary />
      <Footer />
    </DiaryLayout>
  );
};
