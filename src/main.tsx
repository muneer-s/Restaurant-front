import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateList from './pages/CreateList.tsx';
import ViewList from './pages/ViewList.tsx';
import EditList from './pages/EditList.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/createlist" element={<CreateList />} />
        <Route path="/viewlist" element={<ViewList />} />
        <Route path="/editlist/:id" element={<EditList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
