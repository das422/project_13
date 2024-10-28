import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react"
import App from './App.jsx'
import Loader from './components/Loader/Loader.jsx'
import './globals.css'
import { persistor, store } from './store/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
