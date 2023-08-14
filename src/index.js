import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/app/App';
import Dois from './pages/dois/dois'
import Soma from './pages/soma/soma';
import Subtrair from './pages/subtracao/subtracao';
import Aluno from './pages/aluno/index';
import Correios from './pages/correios/correios';
import Carro from './pages/carro/index';
import Sorveteria from './pages/sorveteria/index';
import Filmes from './pages/filmes/index';
import Marvel from './pages/marvel/index';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/dois' element={<Dois />} />
      <Route path='/soma' element={<Soma />} />
      <Route path='/subtracao' element={<Subtrair />} />
      <Route path='/correios' element={<Correios />} />
      <Route path='/carro' element={<Carro />} />
      <Route path='/aluno' element={<Aluno />} />
      <Route path='/sorveteria' element={<Sorveteria />} />
      <Route path='/filmes' element={<Filmes />} />
      <Route path='/marvel' element={<Marvel />} />
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
