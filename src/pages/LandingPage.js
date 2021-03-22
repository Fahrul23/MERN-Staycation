import React,{Component} from 'react';

import Header from 'parts/Header';
import LandingPages from 'json/landingPage';

import Hero from 'parts/Hero';
import MostPicked from  'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';


export default class LandingPage extends Component{

    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }
    componentDidMount(){
        window.title = "Staycation | Home";
        window.scrollTo(0,0);
    }

    render(){
        return(
            <>
             <Header {...this.props}></Header>
             <Hero
             refMostPicked={this.refMostPicked}  
             data={LandingPages.hero}></Hero>
             <MostPicked
             refMostPicked={this.refMostPicked} 
             data={LandingPages.mostPicked}/>
             <Categories data={LandingPages.categories}/>
             <Testimony data={LandingPages.testimonial}/>
             <Footer />
            </>
        )
    }
}