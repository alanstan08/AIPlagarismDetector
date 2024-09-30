import './App.css';
import { HiOutlineBolt } from "react-icons/hi2";
import { LuCheckCircle } from "react-icons/lu";
import { IoDocumentsOutline } from "react-icons/io5";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Features from './components/features';
import Contact from './components/contact';
import PlagiarismPage from './components/plagarismPage';
import TermsOfService from './components/termsOfService';
import Privacy from './components/privacy';
const path = require('path-browserify');

function App() {
  return (
    <div className='App flex flex-col min-h-screen'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/features' element={<Features />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/upload-document' element={<PlagiarismPage />}/>
          <Route path='/terms-of-service' element={<TermsOfService />}/>
          <Route path='/privacy' element={<Privacy />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
