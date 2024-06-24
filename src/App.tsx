import './App.css'
import Home from './components/pages/home/Home'
import Navbar from './components/pages/layout/Navbar'
import Services from './components/pages/home/Services'
import GetInTouch from './components/pages/home/GetInTouch'

const App = () => {

  return <section>
    <Navbar />

    <Home />

    <Services />

    <GetInTouch />
  </section>
}

export default App
