import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar1 = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setShow(true); 
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-1 text-uppercase">
      <div className="container">
        <a className="navbar-brand text-info" href="#Home" rel="noopener noreferrer">
          <img src="images/brandlogo.jpg" alt="" />
        </a>
        <button
          className="navbar-toggler border border-info text-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShow(!show)}
        >
          {show ? <MenuIcon /> : <CloseIcon />}
        </button>
        <div className={show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#Home" onClick={() => setShow(!show)}>
                Home
              </a>
            </li>
            <li className="nav-item">
<a className="nav-link" href="#About" onClick={() => setShow(!show)}>
About
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#Projects" onClick={() => setShow(!show)}>
Projects
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#Contact" onClick={() => setShow(!show)}>
Contacts
</a>
</li>
</ul>
</div>
</div>
</nav>
);
};

export default Navbar1;
