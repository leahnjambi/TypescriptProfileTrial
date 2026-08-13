import Project2 from "./project2";
import '../App.css'

function ProjectPage(){
    return(
        <section className="pro-page">
            <h1>My Project</h1>
            <Project2/>
            <button className="button">View More</button>
        </section>
    )
}
export default ProjectPage;