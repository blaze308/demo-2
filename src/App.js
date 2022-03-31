import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import ServicePage from './components/pages/ServicePage';

const App = () => {
  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          <Route path="service" element={<ServicePage/>}/>
          <Route path="counter" element={<Counter/>} />
        </Routes>
      </BrowserRouter>  
  )
}

export default App
