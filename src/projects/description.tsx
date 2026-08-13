import '../App.css'
type Details = {
    title : string;
    description : string;
};

function Description({
    title,
    description
}: Details){
    return(
        <div className="about-p">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>

    )
}
export default Description;