import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHandleComments } from '../hooks/hooks';

export function CommentsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  const handleRefetchComments = useHandleComments()

  return (
    <>
    <CommentsTable data={data} />
    <button onClick={handleRefetchComments}>refetch</button>
    </>
  );
}

function CommentsTable(props) {
    const data=props.data
    return (
        <table>
          <thead>
            <tr>
              <th>Поле 1</th>
              <th>Поле 2</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}><td>{item.id}</td><td>{item.name}</td><td>{item.email}</td><td>{item.body}</td></tr>
            ))}
          </tbody>
        </table>
    );
}