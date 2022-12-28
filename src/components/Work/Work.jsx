import './work.css'
import Fanatic from '../../assets/Fanatic.png'
import Leon from '../../assets/Leon-Template.png'
import Odin from '../../assets/Odin.png'
import EcommerceRoomHomePage from '../../assets/ecommerce-room-home-page.png'

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
                  <a href="https://walidsahnoun0001.github.io/ecommerce-room-home-page-react/" rel='noreferrer' target="_blank">
                    <figure>
                      <div className="overlay"></div>
                      <img src={EcommerceRoomHomePage} alt="" />
                    </figure>
                  </a>
                </div>
                <div className="a-work">
                  <a href="https://walidsahnoun0001.github.io/fanatic-design-implementation/" rel='noreferrer' target="_blank">
                    <figure>
                      <div className="overlay"></div>
                      <img src={Fanatic} alt="" />
                    </figure>
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="a-work">
                <a href="https://walidsahnoun0001.github.io/implementation-odin-design-react-vite/" rel='noreferrer' target="_blank">
                    <figure>
                      <div className="overlay"></div>
                      <img src={Odin} alt="" />
                    </figure>
                  </a>
                </div>
                <div className="a-work">
                  <a href="https://walidsahnoun0001.github.io/implementaion-leon-template-design/" rel='noreferrer' target="_blank">
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