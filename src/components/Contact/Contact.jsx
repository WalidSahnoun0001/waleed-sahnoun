import './contact.css'

function Contact() {
  return (
    <section className="contact" id='contact'>
        <h2>Contact Me</h2>
        <p>
          If you are looking to hire a Frontend developer, send me a message.
          I'm available for freelance jobs
        </p>
        <div className="email-me">
          <a href="mailto:sahnouneloualid1422@gmail.com"><i className="fa-regular fa-envelope"></i><span>sahnouneloualid1422@gmail.com</span></a>
        </div>
    </section>
  )
}

export default Contact