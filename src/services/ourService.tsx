import OurService from "./service"
import logo from '../assets/Union.png'
function OurServices(){
    return(
        <section className="ourService-section">
            <h1>Our Service</h1>
            <div className="ourservice-container">
                <OurService
                image={logo}
                title="ghdhoireigf"
                description="gdkdbsdjdjkjekiweuehjjdhgdbcsnmcdhhd"
                />
                <OurService
                image={logo}
                title="ghdhoireigf"
                description="gdkdbsdjdjkjekiweuehjjdhgdbcsnmcdhhd"
                />
                <OurService
                image={logo}
                title="ghdhoireigf"
                description="gdkdbsdjdjkjekiweuehjjdhgdbcsnmcdhhd"
                />
                <OurService
                image={logo}
                title="ghdhoireigf"
                description="gdkdbsdjdjkjekiweuehjjdhgdbcsnmcdhhd"
                />

            </div>

        </section>

    )
}
export default OurServices;