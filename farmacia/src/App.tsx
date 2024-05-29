
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias' 
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria'
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria'

function App() {
  return (
    <>
      
      <BrowserRouter>
      <NavBar/>
          <div className='min-h-[80vh]'>
            <></>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/formCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      
    </>
  )
}

export default App