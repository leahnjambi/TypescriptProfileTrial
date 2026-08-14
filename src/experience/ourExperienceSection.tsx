import OurExperience from "./experience";
import union from '../assets/Union.png'
import '../App.css'

const Experience = [
    {
        id : 1,
        image : union,
        title : "jifjrkejjfbuhyr"
    },
    {
        id : 2,
        image : union,
        title : "jifjrkejjfbuhyr"
    },
    {
        id : 3,
        image : union,
        title : "jifjrkejjfbuhyr"
    },
    {
        id : 4,
        image : union,
        title : "jifjrkejjfbuhyr"
    },
    {
        id : 5,
        image : union,
        title : "jifjrkejjfbuhyr"
    },
    {
        id : 6,
        image :union,
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