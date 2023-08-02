import './css/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul>
          <li>
              <a href="/">Home</a>
          </li>
          <li>
              <a href="/">About</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
          <li>
            <a href="/">Demo</a>
          </li>
        </ul>
        <div className="bottom">
          <spane className="line"></spane>
          <p>2023 Execute, Inc. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer