import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { PostPage } from './pages/PostPage';
import { CommentsPage } from './pages/CommentsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/post-page" element={<PostPage />} />
            <Route path="/comments-page" element={<CommentsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
  );
}

export default App
