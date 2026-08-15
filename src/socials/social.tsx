import '../App.css'
type Socialprops = {
    logo : string;
    title : string;
    socialicon : string;
    icontitle :string;
    link :string;
}
function Social({logo , title , socialicon,icontitle,link}:Socialprops){
    return(
        <div className="social-container2">
            <img src={logo} alt={title} />
            <h3>{title}</h3>
            <div className='icon-container'>
                <a href={link}><img src={socialicon} alt={icontitle} /></a>
                <a href={link}><img src={socialicon} alt={icontitle} /></a>
                <a href={link}><img src={socialicon} alt={icontitle} /></a>
                <a href={link}><img src={socialicon} alt={icontitle} /></a>
            </div>
        </div>
    )
}
export default Social