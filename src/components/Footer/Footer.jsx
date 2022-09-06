import './footer.css'

function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <div className="part">
                <p>Made by <a href="https://www.linkedin.com/in/walid-sahnoun-757864220/" target="_blank">Oualid Sahnoun</a> - Design From <a href="https://www.figma.com/community/file/1066969260514965061" target="_blank">Figma - Viraj Aher</a> -- Design Modified -- Copyright 2022</p>
            </div>
            <div className="part">
               <div className="social-media">
                <a href="https://twitter.com/WalidSahnoun8" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://github.com/WalidSahnoun0001" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/walid-sahnoun-757864220/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
               </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer