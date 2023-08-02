import john from '../images/john-doe.png'
import './css/About.css'

const About = () => {
  return (
    <section className="about" id='about'>
        <div className="container">
            <img src={john} alt="John Doe" />
            <div className="col-2">
                <h2>About</h2>
                <span className="line"></span>
                <p>Itense is an International Financial Planing company with offices in mulitple jurisictions over the world. Working with Intense gives me the ability to advise international expatriates living in the middle east from where i live in USA.</p>
                <p>I am John Doe, a senior advisor for an independently owned financial planning company called intense</p>
                <button className='button'>explore more</button>
            </div>
        </div>
    </section>
  )
}

export default About