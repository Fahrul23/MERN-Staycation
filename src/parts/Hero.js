import React from 'react';

import ImageHero from 'assets/images/img-hero.jpg';
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg';
import IconCities from 'assets/images/icons/icon_cities.jpg';
import IconTraveler from 'assets/images/icons/icon_traveler.svg';
import IconTreasure from 'assets/images/icons/icon_treasure.jpg';
import Button from 'elements/Buttons';
import Fade from 'react-reveal/Fade';

import formatNumber from 'utils/formatNumber';

function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
          top: props.refMostPicked.current.offsetTop - 30,
          behavior: "smooth",
        });
      }

    return (
        <Fade bottom>
        <section className="container pt-4">
            <div className="row align-item-center">
                <div className="col-auto pr-5" style={{width:520}}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy Work,<br/>
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:"170%"}}>
                        We provide what you need to enjoy your holiday with family, Time to
                        make another memoriable moments.
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now
                    </Button>
                    <div className="row" style={{marginTop:80}}>
                        <div className="col-auto" style={{marginRight:35}}>
                            <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
                            </h6>
                        </div>

                        <div className="col-auto" style={{marginRight:35}}>
                            <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Travelers`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasure</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`}/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">Traveler</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-5">
                    <div style={{width:520,height:410}}>
                        <img src={ImageHero} 
                        className="img-fluid position-absolute" 
                        alt="Room with couches" 
                        style={{margin : '-30px 0 0 -30px', zIndex:1}}/>
                        <img src={ImageHeroFrame} 
                        className="img-fluid position-absolute frame" 
                        alt="Room with couches" 
                        style={{margin : '0 -15 -15px 0'}}/>
                    </div>
                </div>

            </div>
        </section>
        </Fade>
    );
}

export default Hero;