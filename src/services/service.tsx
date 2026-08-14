import '../App.css'
type Service ={
    id : number
    image : string;
    title : string;
    description : string;
};
function OurService({
    image,
    title,
    description
}: Service){
    return(
        <div className="service-container">
            <div className="service-header">
                <img src={image} alt={title} 
                />
                <h1>{title}</h1>
            </div>
            <div>{description}</div>
        </div>
    )
}
export default OurService;