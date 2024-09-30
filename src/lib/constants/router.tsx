import {
  DiaryPage,
  WelcomePage,
  AuthPage,
  RegisterPage,
  ArchivePage,
  ProfilePage,
  SettingsPage,
} from 'pages';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPage />,
  },
  {
    path: '/reg',
    element: <RegisterPage />,
  },
  {
    path: '/welcome',
    element: <WelcomePage />,
  },
  {
    path: '/diary',
    element: <DiaryPage />,
  },
  {
    path: '/archive',
    element: <ArchivePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
]);
