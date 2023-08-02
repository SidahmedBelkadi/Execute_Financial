import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../images/logo.png'
import './css/NavBar.css'
import { useState } from 'react'


const NavBar = () => {


    const [nav, setNav] = useState(false)

    const hanldeNavClick = () => setNav(!nav)

  return (
    <section className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={hanldeNavClick} >
        {nav ? (<FaTimes size='30' style={{ color: '#fff' }} />) :
        (<FaBars size='30' style={{ color: '#fff' }} />)}
        </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="/">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="/">Demo</a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default NavBar