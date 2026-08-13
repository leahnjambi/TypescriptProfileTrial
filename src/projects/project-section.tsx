import profile from '../assets/profile.png'
import ProjectImage from './pro-img';
import Description from './description';
import '../App.css'
function ProjectSection() {
    return (
            <div className='project-container'>

                <Description
                    title='E-commerce Website'
                    description='Technologies: React, TypeScript, CSS 

Developed a responsive online shopping platform.
Implemented product search and filtering.
Designed reusable React components.
Integrated API data for product listings.'
                />
                <ProjectImage
                    image={profile}
                    title='Profile'
                />
            </div>

    )
}
export default ProjectSection;