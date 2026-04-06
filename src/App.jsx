
import './App.css'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'

//github.com/Edtech-solutions-Rwanda
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
     
  )
}

export default App
