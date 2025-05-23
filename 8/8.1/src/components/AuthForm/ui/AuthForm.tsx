import { Button } from '@mui/material';
import { VITE_YANDEX_CLIENT_ID, VITE_REDIRECT_URI } from '../../../utils/env';

export const AuthForm = () => {
  const handleYandexLogin = () => {
    const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${VITE_YANDEX_CLIENT_ID}&redirect_uri=${VITE_REDIRECT_URI}`;
    window.location.href = url;
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleYandexLogin}
    >
      Войти через Яндекс
    </Button>
  );
};
