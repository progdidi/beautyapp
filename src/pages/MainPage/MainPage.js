import './mainPage.scss';

//images
import about from './images/about.png';
import ServicesSection from './ServicesSection/ServicesSection';

const MainPage = () => {
    return ( 
        <>
            <section className="promo">
                <div className="container">
                    <div className="promo-info">
                        <h1 className="promo-info__title">Give your body the best trearment!</h1>

                        <p className="promo-info__text">Our expert team of doctors and nurses provide personalized care to meet your individual needs.</p>

                        <div className="promo-info__buttons">
                            <button className="promo-info__btn active">Book an Appointment</button>
                            <button className="promo-info__btn">Explore Treatment</button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="about">
                <div className="container">
                    <div className="about__inner">
                        <div className="about-info">
                            <h2 className="about-info__title section-title">About Us</h2>

                            <p className="about-info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

                            <p className="about-info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>

                            <button className="about-info__btn">Book an Appointment</button>
                        </div>


                        <img src={about} alt="" className="about-img" />
                    </div>

                    <ServicesSection/>
                </div>
            </section>

            
        </>
     );
}
 
export default MainPage;