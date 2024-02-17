import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {

  return (
    <div className='bg-white h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </div>
  )
}

export default App
