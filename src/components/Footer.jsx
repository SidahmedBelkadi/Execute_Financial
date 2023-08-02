import { Link } from 'react-scroll'
import './css/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul>
        <li>
        <Link to="hero" spy={true} smooth={true} offset={-80} duration={1500}>Home</Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>About</Link>
      </li>
      <li>
        <Link to="testimonials" spy={true} smooth={true} offset={-70} duration={500}>Testimonials</Link>
      </li>
      <li>
        <Link to="demo" spy={true} smooth={true} offset={-70} duration={1500}>Demo</Link>
      </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2023 Execute, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer