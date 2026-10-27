import { Link } from 'react-router-dom';

function getMenu(){
    return <WebMenu/>
}

export default function Menu(){
    return (
        <div>
           <header className="tm-header" id="tm-header">
                <div className="tm-header-wrapper">
                    <button className="navbar-toggler" type="button" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="tm-site-header">
                        <div className="mb-3 mx-auto tm-site-logo"><i className="fas fa-times fa-2x"></i></div>            
                        <h1 className="text-center">MediSync</h1>
                    </div>
                    
                    {getMenu()}
                    <div className="tm-mb-65">
                        <a rel="nofollow" href="https://fb.com/templatemo" className="tm-social-link">
                            <i className="fab fa-facebook tm-social-icon"></i>
                        </a>
                        <a href="https://twitter.com" className="tm-social-link">
                            <i className="fab fa-twitter tm-social-icon"></i>
                        </a>
                        <a href="https://instagram.com" className="tm-social-link">
                            <i className="fab fa-instagram tm-social-icon"></i>
                        </a>
                        <a href="https://linkedin.com" className="tm-social-link">
                            <i className="fab fa-linkedin tm-social-icon"></i>
                        </a>
                    </div>
                    <p className="tm-mb-80 pr-5 text-white">
                        Xtra Blog is a multi-purpose HTML template from TemplateMo website. Left side is a sticky menu bar. Right side content will scroll up and down.
                    </p>
                </div>
            </header>
        </div>
    )
}

function WebMenu(){
    return (
        <nav className="tm-nav" id="tm-nav">            
            <ul>
                <li className="tm-nav-item active">
                    <Link to="/" className="tm-nav-link">
                        <i className="fas fa-home"></i> Home
                    </Link>
                </li>
                <li className="tm-nav-item">
                    <Link to="/about" className="tm-nav-link">
                        <i className="fas fa-pen"></i> About Us
                    </Link>
                </li>
                <li className="tm-nav-item">
                    <Link to="/booking" className="tm-nav-link">
                        <i className="fas fa-users"></i> Booking
                    </Link>
                </li>
                <li className="tm-nav-item">
                    <Link to="/login" className="tm-nav-link">
                        <i className="far fa-comments"></i> login
                    </Link>
                </li>
                <li className="tm-nav-item">
                    <Link to="/contact" className="tm-nav-link">
                        <i className="far fa-comments"></i> Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
