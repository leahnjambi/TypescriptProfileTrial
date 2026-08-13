import profile from '../assets/profile.png'
import ProjectImage from './pro-img';
import Description from './description';
import '../App.css'
function Project2() {
    return (
        <section className='project-section'>
            <div>
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
                <div className='project-container'>
                <ProjectImage
                    image={profile}
                    title='Profile'
                />
                <Description
                    title='kjffjigi'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, accusantium exercitationem nemo vero, dignissimos pariatur, a fugit ullam tenetur ad voluptatibus! Laudantium ipsum tempore, nostrum nemo corrupti similique nam sed?'
                />
            </div>
                <div className='project-container'>
                <Description
                    title='kjffjigi'
                    description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, accusantium exercitationem nemo vero, dignissimos pariatur, a fugit ullam tenetur ad voluptatibus! Laudantium ipsum tempore, nostrum nemo corrupti similique nam sed?'
                />
                <ProjectImage
                    image={profile}
                    title='Profile'
                />

            </div>

            </div>
            

        </section>

    )
}
export default Project2;