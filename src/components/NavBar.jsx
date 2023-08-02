import { useState } from 'react'
import { Link } from 'react-scroll'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../images/logo.png'
import './css/NavBar.css'


const NavBar = () => {


  const [nav, setNav] = useState(false)

  const hanldeNavClick = () => setNav(!nav)
  const closeMenu = () => setNav(false)

  const [color, setColor] = useState(false) 

  window.addEventListener('scroll', () => {
    if (window.scrollY > 90) {
      setColor(true)
    }else{
      setColor(false)
    }

  })
  


  return (
    <section className={color ? 'header header-bg' : 'header'}>
      <nav className="navbar">
        <Link to="hero" spy={true} smooth={true} duration={1500} className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={hanldeNavClick} >
        {nav ? (<FaTimes size='30' style={{ color: '#fff' }} />) :
        (<FaBars size='30' style={{ color: '#fff' }} />)}
        </div>
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="hero" spy={true} smooth={true} offset={-80} duration={1500} onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="testimonials" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Testimonials</Link>
          </li>
          <li className="nav-item">
            <Link to="demo" spy={true} smooth={true} offset={-70} duration={1500} onClick={closeMenu}>Demo</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default NavBar