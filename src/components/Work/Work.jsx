import './work.css'
import Galaxy from '../../assets/Galaxy.png'
import Fanatic from '../../assets/Fanatic.png'
import Leon from '../../assets/Leon-Template.png'
import Odin from '../../assets/Odin.png'

function Work() {

  return (
    <section className="work" id='work'>
        
        <div className="work-header">
          <div></div>
          <h2>Featured Work</h2>
        </div>

            <div className="all-works">
              <div className="left">
                <div className="a-work">
                  <a href="https://walidsahnoun0001.github.io/implementation-galaxy-design/" target="_blank">
                    <figure>
                      <div className="overlay"></div>
                      <img src={Galaxy} alt="" />
                    </figure>
                  </a>
                </div>
                <div className="a-work">
                  <a href="https://walidsahnoun0001.github.io/fanatic-design-implementation/" target="_blank">
                    <figure>
                      <div className="overlay"></div>
                      <img src={Fanatic} alt="" />
                    </figure>
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="a-work">
                <a href="https://walidsahnoun0001.github.io/implementation-odin-design-react-vite/" target="_blank">
                    <figure>
                      <div className="overlay"></div>
                      <img src={Odin} alt="" />
                    </figure>
                  </a>
                </div>
                <div className="a-work">
                  <a href="https://walidsahnoun0001.github.io/implementaion-leon-template-design/" target="_blank">
                    <figure>
                      <div className="overlay"></div>
                      <img src={Leon} alt="" />
                    </figure>
                  </a>
                </div>
              </div>
            </div>
    </section>
  )
}

export default Work