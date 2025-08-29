import './socialList.scss';

//images
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';
import twitter from './images/twitter.svg';
import linkedin from './images/linkedin.svg';

const SocialList = () => {
    return ( 
        <ul className="social-list">
            <li className="social-list__item"><a href="" className="social-list__item-link"><img src={facebook} alt="" className="social-list__item-img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__item-link"><img src={instagram} alt="" className="social-list__item-img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__item-link"><img src={twitter} alt="" className="social-list__item-img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__item-link"><img src={linkedin} alt="" className="social-list__item-img" /></a></li>
        </ul>
     );
}
 
export default SocialList;