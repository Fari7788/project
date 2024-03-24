
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
import Service from './Service';
import About from './About';
import Projects from './Projects';
import Service1 from './Service1';
import ServiceDetails from './ServiceDetails';
const App = () => {
  const [Data, setData] = useState(0);
  const [Data1, setData1] = useState('hey');
  const [Data2, setData2] = useState('tttt');
  const [Data3, setData3] = useState('Ali');
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/Projects' element={<Projects/>}/>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Service1' element={<Service1 />} />
          <Route path='/ServiceDetails' element={<ServiceDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

