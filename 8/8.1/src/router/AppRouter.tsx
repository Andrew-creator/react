import { Route, Routes } from 'react-router';
import MainPage from '../pages/MainPage';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';
import OAuthRedirectHandler from '../components/AuthForm/ui/OAuthRedirectHandler';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        index
        element={<MainPage />}
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/auth/yandex"
        element={<OAuthRedirectHandler />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
};
