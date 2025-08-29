import './header.scss';
import SocialList from './SocialList/SocialList';

//images
import logo from './logo.svg';
import SearchForm from './SearchForm/SearchForm';

const Header = () => {
    return ( 
        <header className="header">
            <div className="header-contacts">
                <div className="container"> 
                    <div className="header-contacts__inner">
                        <div className="header-contacts__links">
                            <p className="header-contacts__text">Phone Number:</p>
                            <a href="" className="header-contacts__link">956 742 455 678</a>
                            <p className="header-contacts__text">Email:</p>
                            <a href="" className="header-contacts__link">info@ddsgnr.com</a>
                        </div>
                        

                        <SocialList/>
                    </div>
                </div>
            </div>
            <div className="header-nav">
                <div className="container">
                    <div className="header-nav__inner">
                        <a href="" className="logo"><img src={logo} alt="" className="logo__img" /></a>

                        <nav className="menu">
                            <ul className="menu-list">
                                <item className="menu-list"> <li className="menu-list__item"><a href="" className="menu-list__link">Home</a></li> </item>
                                <item className="menu-list"> <li className="menu-list__item"><a href="" className="menu-list__link">Treatment</a></li></item>
                                <item className="menu-list"> <li className="menu-list__item"><a href="" className="menu-list__link">About Us</a></li></item>
                                <item className="menu-list"> <li className="menu-list__item"><a href="" className="menu-list__link">Contact Us</a></li></item>
                            </ul>
                        </nav>

                        <SearchForm/>

                        <button className="header-nav__btn">Book an Appointment</button>
                    </div>                    
                </div>
            </div>
        </header>
     );
}
 
export default Header;