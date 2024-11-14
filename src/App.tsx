import { Route, Routes } from 'react-router-dom'
import MainHome from './components/pages/home/MainHome'
import GetInTouch from './components/pages/home/GetInTouch'
import Footer from './components/pages/layout/Footer'

const App = () => {
  return (
  <>
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/contact-us" element={<GetInTouch />} />
    </Routes>

    <Footer />
  </>
  )
}

export default App
