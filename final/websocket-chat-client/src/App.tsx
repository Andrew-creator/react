import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NaviBar from './components/NaviBar';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ChatPage from "./pages/ChatPage"

function App() {
  console.log("redraw app screen")

  return (
    <>
    <BrowserRouter>
      <Header />
      <NaviBar/>
      <div className='h-full w-full'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App
