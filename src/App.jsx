import './App.css'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router'
import Footer from './Component/Footer'
import ScrollTop from './Component/ScrollTop'

function App() {
  return (
    <div className="App">
      <ScrollTop/>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
