import Project2 from "./project2";
import ProjectSection from "./project-section";
import '../App.css'

function ProjectPage(){
    return(
        <section className="pro-page">
            <h1>My Project</h1>
            <ProjectSection/>
            <Project2/>

        </section>
    )
}
export default ProjectPage;