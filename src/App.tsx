import { Provider } from 'react-redux'
import Footer from './components/Footer';

import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import { store } from './store'
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;