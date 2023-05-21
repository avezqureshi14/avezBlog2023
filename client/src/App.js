import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Single from './pages/Single';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import ContactForm from './pages/Contact';
import Write from './pages/Write';
import RegistrationForm from './pages/Regsiter';
import UpdateBlog from './pages/Update';

function App() {
  console.log("Avez Qureshi React Boilerplates, Application Working Fine from client Side")
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>      
        <Route path='/login' element={<Login/>} ></Route>      
        <Route path='/register' element={<RegistrationForm/>} ></Route>      
        <Route path='/single/:id' element={<Single/>} ></Route>      
        <Route path='/about' element={<About/>} ></Route>      
        <Route path='/contact' element={<ContactForm/>} ></Route>      
        <Route path='/write' element={<Write/>} ></Route>      
        <Route path='/update/:id' element={<UpdateBlog/>} ></Route>      
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
