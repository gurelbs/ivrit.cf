import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import './../styles/nav.css'
import MenuList from './MenuList.component'
export default function App() {
  const [scrollY, setClientHeight] = useState(null)
  
  useEffect(() => {
    const scroll = () => setClientHeight(window.scrollY)
    document.addEventListener('scroll', scroll)
    return () => document.removeEventListener('scroll', scroll)
  }, [scrollY])

  return (
      <nav className={`${scrollY > 100 ? 'line' : ''}`}>
        <div className="logo_wrap">
          <Link to="/">
          <span>
            <img 
              className="logo"
              src="./logo.png" 
              alt="logo" 
            />
          </span>
          </Link>
        </div>
        <div className="list_wrap">
          <MenuList />
        </div>
      </nav>
  );
}