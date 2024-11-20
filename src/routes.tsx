import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sushi from './pages/Sushi'
//import LaDolce from './pages/LaDolce'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hiokisushi" element={<Sushi />} />
    {/*<Route path="/ladolcevitatrattoria" element={<LaDolce />} />*/}
  </Routes>
)

export default Rotas
