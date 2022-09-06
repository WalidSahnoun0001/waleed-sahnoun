import './hero.css'

function Hero() {
  return (
    <section className='hero' id='home'>
        <div className="hero-content">
            <h2>I'm Waleed Sahnoun A Frontend Developer based in Algeria.</h2>
            <p>
                I do implementations from designs with React, Vue.
                Do you want to convert your design file into a landing page or a lot of
                pages? Don't forget to contact me.
            </p>
            <div className="email-me">
                <a href="mailto:sahnouneloualid1422@gmail.com"><i className="fa-regular fa-envelope"></i><span>sahnouneloualid1422@gmail.com</span></a>
            </div>
        </div>
    </section>
  )
}

export default Hero