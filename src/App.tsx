import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      {/* Outros componentes da aplicação */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;