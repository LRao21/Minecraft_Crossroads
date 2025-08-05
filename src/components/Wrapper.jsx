import React from 'react';
import '../styles/Wrapper.css';

import navBar from './Navigation';
import footer from './Footer';


function Wrapper({children}) {
  return (
    <div className="wrapper">
        <div className = "container"> {navBar} </div>
        {children}
        <div className = "container"> {footer} </div>
    </div>
  );
}
    
export default Wrapper;