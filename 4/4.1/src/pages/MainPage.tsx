import { useEffect, useState } from 'react';
import { useHandlePost } from '../hooks/hooks';

export function MainPage() {
    const [data, setData] = useState([]);

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error(error));
    }, []);

 

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
              <tr key={index}>
                <Post post={item} />
              </tr>
            ))}
          </tbody>
        </table>
    );
}

function Post(props) {
  const post = props.post
  const handleLoadNotify = useHandlePost()

  return(
    <>
    <td onClick={handleLoadNotify}>{post.field1}</td>
    <td>{post.field2}</td>
    </>
  )
}
