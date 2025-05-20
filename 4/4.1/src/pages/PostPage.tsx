import { useQuery } from 'react-query';
import axios from 'axios';
import { z } from 'zod';
import { useHandleComments } from '../hooks/hooks';

const schema = z.object({
  data: z.array(z.object({ id: z.number(), name: z.string() })),
});

const fetchData = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  return schema.parse(res.data);
};

export function PostPage() {
  const { data, isLoading, error } = useQuery('myData', fetchData);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  const handleLoadComments = useHandleComments()

  return (
    <ul>
      {data.data.map(item => (
        <li key={item.id} onClick={handleLoadComments}>{item.name}</li>
      ))}
    </ul>
  );
}