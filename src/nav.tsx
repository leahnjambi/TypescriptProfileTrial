import './App.css'
import logo from './assets/Union.png'
function Mynav(){
    return(
        <nav className="nav">
            <ul className="nav-links">
                <img height="100" className="logo" src={logo} alt="Vite logo" />
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/skills">Portfolio</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Mynav