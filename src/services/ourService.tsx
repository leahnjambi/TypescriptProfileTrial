import OurService from "./service"
import logo from '../assets/Union.png'


const Service = [
    {
        id : 1,
        image:logo,
        title :"ghdhoireigf",
        description :"gdkdbsdjdjkjekiweuehjjdhgdbcsnmcdhhd"
    },
    {
        id : 2,
        image : logo,
        title : "ghdhoireigf",
        description :"gdkdbsdjdjkjekiweuehjjdhgdbcsnmcdhhd"
    },
    {
        id : 3,
        image : logo,
        title :"ghdhoireigf",
        description : "gdkdbsdjdjkjekiweuehjjdhgdbcsnmcdhhd"
    },
    {
        id : 4,
        image : logo,
        title :"ghdhoireigf",
        description:"gdkdbsdjdjkjekiweuehjjdhgdbcsnmcdhhd"
    },
    {
        id : 4,
        image : logo,
        title :"ghdhoireigf",
        description:"gdkdbsdjdjkjekiweuehjjdhgdbcsnmcdhhd"
    },
    {
        id : 4,
        image : logo,
        title :"ghdhoireigf",
        description:"gdkdbsdjdjkjekiweuehjjdhgdbcsnmcdhhd"
    },
];


function OurServices(){
    return(
        <section className="ourService-section">
            <h1>Our Service</h1>
            <div className="sev">
            <div className="ourservice-container">
                {Service.map((service) => (
                    <OurService
                     key={service.id}
                     id = {service.id}
                     image={service.image}
                     title={service.title}
                     description={service.description}

                    />
            

                )
            )}

            </div>
            </div>

        </section>

    )
}
export default OurServices;