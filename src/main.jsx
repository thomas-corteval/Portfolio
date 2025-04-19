import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Projets from './pages/projets/projets'
import Contact from './pages/contact'
import A_propos from './pages/a-propos';
import SAE0105 from './pages/projets/SAE-01-05'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> 
      </Routes>
      <Routes>
        <Route path="/projets" element={<Projets />} /> 
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Routes>
        <Route path='/a-propos' element={<A_propos />}/>
      </Routes>
      <Routes>
        <Route path='/sae-01-05' element={<SAE0105 />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
