import '@/assets/App.css'
import MainPage from '@/app/routes/MainPage/MainPage'
import CartPage from '@/app/routes/CartPage/CartPage'
import NotFoundPage from '@/app/routes/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'jotai'
import NaviBar from '@/components/naviBar/NaviBar';
import { Header } from './Header';
import { ThemeProvider } from '@/stores/UseContextStore';

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <NaviBar/>
        <Provider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
