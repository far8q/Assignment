import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from'./components/Contact';

function App(){
    return(
        <BrowserRouter>
        <div className='App' >
            <Navbar/>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            </Routes>

        </div>
        </BrowserRouter>
    );
}

export default App;