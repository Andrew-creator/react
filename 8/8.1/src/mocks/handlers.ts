import { http, HttpResponse } from 'msw';
import { YandexAuthBody } from '../components/AuthForm/ui/OAuthRedirectHandler';

export const handlers = [
  http.post('http://localhost:5173/auth/yandex', async ({ request }) => {
    const body = (await request.json()) as Partial<YandexAuthBody>;

    if (body?.code) {
      return HttpResponse.json(
        {
          token: 'mock-token',
          user: { name: 'Yandex User', id: 1, role: 'admin' },
        },
        { status: 200 },
      );
    }

    return HttpResponse.json({ error: 'No code provided' }, { status: 400 });
  }),
];
