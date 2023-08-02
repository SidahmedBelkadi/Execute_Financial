import './css/Demo.css'

const Demo = () => {
  return (
    <section className="demo">
      <div className="container">
          <div className="col-1">
          <p>More Than 100 Financial Planners,</p>
          <p>One Philosophy</p>
          <p>Every Single one of our financial advisors receives rigorous training according to John Doe's philosophy based on academic research (including that of Nobel laureate in Economics) and Behavioral Finance.</p>
          <button className='button'>Get you free financial analysis</button>
          </div>
          <div className="col-2">
          <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      </div>
    </section>
  )
}

export default Demo