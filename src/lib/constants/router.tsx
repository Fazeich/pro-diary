import { DiaryPage, WelcomePage } from "pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    path: "/",
    element: <DiaryPage />,
  },
]);
