import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import AddProducts from './pages/AddProducts'
import EditProducts from './pages/EditProducts'


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/landing" element={<Landing/>}/>
              <Route path="/addproducts" element={<AddProducts/>}/>
              <Route path="/editproducts" element={<EditProducts />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
