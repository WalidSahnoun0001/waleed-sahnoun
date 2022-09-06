import './navbar.css'

function Navbar() {

  const handleClick = () => {
    window.location.reload()
  }

  return (
    <section className='header'>
        <header>
            <h2 onClick={handleClick}>Waleed Sahnoun</h2>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    </section>
  )
}

export default Navbar