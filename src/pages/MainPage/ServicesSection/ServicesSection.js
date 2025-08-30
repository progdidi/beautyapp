import './servicesSection.scss';

//images
import serv from './images/services.png';
import serv1 from './images/serv1.svg';
import serv2 from './images/serv2.svg';
import serv3 from './images/serv3.svg';
import serv4 from './images/serv4.svg';

const ServicesSection = () => {
    return ( 
        <section className="services">
            <div className="services__items">
                <div className="services-item">
                    <img src={serv1} alt="" className="services-item__img" />
                    <h6 className="services-item__title">Meditation</h6>
                    <p className="services-item__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <a href="" className="services-item__link">Learn More</a>
                </div>
                <div className="services-item">
                    <img src={serv2} alt="" className="services-item__img" />
                    <h6 className="services-item__title">Therapy</h6>
                    <p className="services-item__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <a href="" className="services-item__link"> Learn More </a>
                </div>
                <div className="services-item">
                    <img src={serv3} alt="" className="services-item__img" />
                    <h6 className="services-item__title">Natural Beauty</h6>
                    <p className="services-item__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <a href="" className="services-item__link">Learn More</a>
                </div>
                <div className="services-item">
                    <img src={serv4} alt="" className="services-item__img" />
                    <h6 className="services-item__title">Massages</h6>
                    <p className="services-item__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <a href="" className="services-item__link">Learn More</a>
                </div>
            </div>
            <img src={serv} alt="" className="services__img" />
        </section>
     );
}
 
export default ServicesSection;