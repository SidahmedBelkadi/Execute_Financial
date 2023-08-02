import './css/Testimonials.css'
import user1 from '../images/user1.jpeg'
import user2 from '../images/user2.jpeg'
import user3 from '../images/user3.jpeg'

const Testimonials = () => {
  return (
    <section className="testimonials" id='testimonials'>
        <div className="container">
            <h2>Testimonials</h2>
            <span className="line"></span>
            <div className="content">
                <div className="card">
                    <img src={user1} alt="user" />
                    <p>It is note every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks Jhon!</p>
                    <p><span>Johnson.M.J</span></p>
                    <p>Director of "Financial Times"</p>
                </div>
                <div className="card">
                    <img src={user2} alt="user" />
                    <p>In just 2 very short meetings with John he managed to find the solution peronally catered tto my solution and expectations. Punctual, well informed very reliable.</p>
                    <p><span>Carol Harper</span></p>
                    <p>Director at Risktec Solution Ltd</p>
                </div>
                <div className="card">
                    <img src={user3} alt="user" />
                    <p>A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time i have known him, and he is fast to respond to my concerns.</p>
                    <p><span>Snow.J.R</span></p>
                    <p>Managing Director of BPW Global</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials