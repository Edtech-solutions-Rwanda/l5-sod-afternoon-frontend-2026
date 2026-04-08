
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/RegisterPage'
import Header from './components/HeaderPage'
import Footer from './components/Footer'
import PageLogin from './pages/loginPage'
import DashboardPage from './pages/Dashboard' 
//github.com/Edtech-solutions-Rwanda
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<PageLogin/>}/>
        <Route path='/dashboard' element={DashboardPage}></Route>

      </Routes>

      <Footer/>
    </>

  )
}

export default App
