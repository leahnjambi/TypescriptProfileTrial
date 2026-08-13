import OurExperience from "./experience";
import union from '../assets/Union.png'
import '../App.css'
function OurExpertSection(){
    return(
        <section className="experience-section">
            <h1>Experience</h1>
            <div className="experience-container">
                <OurExperience
                image={union}
                title="jifjrkejjfbuhyr"
                />
                <OurExperience
                image={union}
                title="jifjrkejjfbuhyr"
                />
                <OurExperience
                image={union}
                title="jifjrkejjfbuhyr"
                /><OurExperience
                image={union}
                title="jifjrkejjfbuhyr"
                /><OurExperience
                image={union}
                title="jifjrkejjfbuhyr"
                /><OurExperience
                image={union}
                title="jifjrkejjfbuhyr"
                /><OurExperience
                image={union}
                title="jifjrkejjfbuhyr"
                /><OurExperience
                image={union}
                title="jifjrkejjfbuhyr"
                />

            </div>
        </section>
    )
}
export default OurExpertSection;