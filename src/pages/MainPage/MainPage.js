import './mainPage.scss';

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
        </>
     );
}
 
export default MainPage;