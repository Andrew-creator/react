import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/index.css'
import App from '@/app/App.tsx'
import { Provider } from 'react-redux'
import CartStore from '@/stores/CartStore'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={CartStore}>
        <App />
      </Provider>
    </BrowserRouter>
    </StrictMode>,
)
