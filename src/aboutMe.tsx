import './App.css'
import profile from './assets/profile.png'
function AboutMe(){
    return(
        <section id="about-me">
            <div className='aboutme-content'>
                <div className='about-img'>
                <img src={profile} alt="Profile" />
            </div>
            <div className='about-p'>
                <h1>About Me</h1>
                <p>
                    I am a passionate web developer with experience in building responsive and user-friendly websites. I enjoy working with modern web technologies and continuously learning new skills to enhance my development capabilities.
                </p>
                <button>Resume</button>
            </div>
            </div>
            
        </section>
    )
}
export default AboutMe