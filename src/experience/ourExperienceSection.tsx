import OurExperience from "./experience";
import union from '../assets/Union.png'
import '../App.css'
import python from '../assets/social-icons/python.jpg'
import htmlicon from '../assets/social-icons/html.png'
import cssicon from '../assets/social-icons/css.png'
import cicon from '../assets/social-icons/c++.png'
import myreacticon from '../assets/social-icons/react.png'
import mytypescript from '../assets/social-icons/typescript.png'

const Experience = [
    {
        id : 1,
        image : python,
        title : "jifjrkejjfbuhyr"
    },
    {
        id : 2,
        image : cicon,
        title : "jifjrkejjfbuhyr"
    },
    {
        id : 3,
        image : myreacticon,
        title : "jifjrkejjfbuhyr"
    },
    {
        id : 4,
        image : mytypescript,
        title : "jifjrkejjfbuhyr"
    },
    {
        id : 5,
        image : htmlicon,
        title : "jifjrkejjfbuhyr"
    },
    {
        id : 6,
        image :cssicon,
        title :"jifjrkejjfbuhyr"
    },
    {
        id : 7,
        image : union,
        title :"jifjrkejjfbuhyr"
    },
    {
        id : 8,
        image : union,
        title :"jifjrkejjfbuhyr"
    }


];
function OurExpertSection(){
    return(
        <section className="experience-section">
            <h1>Experience</h1>
            <div className="experience-container">
                {Experience.map((experience) => (
                    <OurExperience
                    key = {experience.id}
                    id = {experience.id}
                    image={experience.image}
                    title={experience.title}
                    />
                ))}
                
            </div>
        </section>
    )
}
export default OurExpertSection;