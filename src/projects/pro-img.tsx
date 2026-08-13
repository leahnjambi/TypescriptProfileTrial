import '../App.css'
type ProImage = {
    image : string;
    title : string;
};
function ProjectImage({
    image,
    title

}: ProImage){
    return(
        <div className="about-img">
            <img src={image} alt={title} />
        </div>
    )
}
export default ProjectImage;