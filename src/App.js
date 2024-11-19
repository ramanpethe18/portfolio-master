// Import necessary components and libraries
import React from 'react';
import { Routes, Route } from 'react-router-dom';
  import './App.css';
// import Community from './pages/Community';

import Blogs from './pages/blogs';
import Projects from './pages/project';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/navbar';
import { Analytics } from '@vercel/analytics/react';

// Main App Component
const App = () => {
  

  return (
    <div className='App'>
      <Navbar />
      <Sidebar/>
        <Routes>
          {/* Define your routes inside the Sidebar component */}
          <Route path="/" element={<Portfolio />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        <Analytics />
      {/* </Sidebar> */}
    </div>
  );
};

export default App;
