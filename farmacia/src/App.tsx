
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
          <div className='min-h-[80vh]'>
            <></>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

            </Routes>
          </div>
        </BrowserRouter>
       <Footer></Footer>
    </>
  )
}

export default App