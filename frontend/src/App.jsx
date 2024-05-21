import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Game from './pages/Game'
import AdminGame from './pages/AdminGame'
function App() {
 

  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/games" element={<Game/>}/>
        <Route path="/admin" element={<AdminGame/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App