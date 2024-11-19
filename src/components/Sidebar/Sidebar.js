import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaFolder, FaFile, FaBriefcase, FaBlogger, FaHandshake, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setSidebarOpen(false); // Close the sidebar when a link is clicked
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkIsMobile();

    const handleResize = () => {
      checkIsMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      {isMobile ? (
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </div>
      ) : null}
      <ul>
        <li>
          <Link 
            to="/" 
            className={`sidebar-link ${selectedLink === "Portfolio" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Portfolio")}
          >
            {isMobile ? <FaFolder /> : <><FaFolder /> Portfolio</>}
          </Link>
        </li>
        <li>
          <Link 
            to="/Resume" 
            className={`sidebar-link ${selectedLink === "Resume" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Resume")}
          >
            {isMobile ? <FaFile /> : <><FaFile /> Resume</>}
          </Link>
        </li>
        <li>
          <Link 
            to="/Projects" 
            className={`sidebar-link ${selectedLink === "Projects" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Projects")}
          >
            {isMobile ? <FaBriefcase /> : <><FaBriefcase /> Projects</>}
          </Link>
        </li>
        <li>
          <Link 
            to="/Blogs" 
            className={`sidebar-link ${selectedLink === "Blogs" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Blogs")}
          >
            {isMobile ? <FaBlogger /> : <><FaBlogger /> Blogs</>}
          </Link>
        </li>
        <li>
          <Link 
            to="/Services" 
            className={`sidebar-link ${selectedLink === "Services" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Services")}
          >
            {isMobile ? <FaHandshake /> : <><FaHandshake /> Services</>}
          </Link>
        </li>
        <li>
          <Link 
            to="/Contact" 
            className={`sidebar-link ${selectedLink === "Contact" ? "active" : ""}`} 
            onClick={() => handleLinkClick("Contact")}
          >
            {isMobile ? <FaEnvelope /> :  <><FaEnvelope /> Contact</>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
