import '../App.css'
type Expert ={
    id : number
    image : string;
    title : string
};
function OurExperience({
    image,
    title
}: Expert){
    return(
        <div className='experience'>
            <img src={image} alt={title}
             />
             <h2>{title}</h2>
        </div>
    )

}
export default OurExperience;