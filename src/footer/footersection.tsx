import '../App.css'
function Footer(){
    return(
        <section className="footer-section">
            <h1>Contact Us</h1>
            <div className='footer-container'>
                <div className='footercontent'>
                    <h2>hjrfioren</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quasi harum rem, beatae voluptatem dolorem eligendi reprehenderit et inventore impedit? Voluptate accusamus illum debitis unde dolorem labore nemo quos optio.</p>
                </div>
                <div className='form-container'>
                    <form action="submit" className='form'>
                        <div className='form1'>
                            <input type="text" placeholder='name' />
                            <br/>
                            <input type="email" placeholder='email' />
                            <br/>
                            <textarea placeholder='message'></textarea>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Footer;