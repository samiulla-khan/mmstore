import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (

        <div className="footer-section">
            <div className="container">
                <div className="col-12 d-flex flex-column align-items-center justify-content-center pt-5">
                    <p className="poppins-semibold">E-Commerce Website</p>
                    <div className="socials-block d-flex flex-row align-items-center justify-content-center">
                        <div className="social-icon">
                            <a className="social-icons" href="/">
                                <img src={`${process.env.PUBLIC_URL}/naukri.png`} alt="brand Logo" />
                            </a>
                        </div>
                        <div className="social-icon">
                            <a className="social-icons" href="https://www.linkedin.com/in/samiulla-khan-17013522a" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="Linked Logo" />
                            </a>
                        </div>
                        <div className="social-icon">
                            <a className="social-icons" href="mailto:samiullakhan.mm@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/gmail.png`} alt="Gmail Logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p> </p>
            </div>
        </div>

    )
}

export default Footer;