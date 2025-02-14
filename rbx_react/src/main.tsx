import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NotFound from "./pages/NotFound/NotFound.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ArtistPage from './pages/ArtistPage/ArtistPage.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "*", element: <NotFound />},
  {path: "/artist/:_id", element: <ArtistPage />}

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
