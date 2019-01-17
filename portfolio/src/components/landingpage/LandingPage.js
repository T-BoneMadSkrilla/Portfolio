import React, {Component} from 'react';
import './LandingPage.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import About from '../about/About';

class LandingPage extends Component {
    render(){
        return(
            <div className="flexCenter">

            <div className="centerLandingPage">              
        <ReactCSSTransitionGroup
                        transitionName="fadeIn"
                        transitionAppear={true}
                        transitionAppearTimeout={2600}
                        transitionEnter={false}
                        transitionLeave={true}>
                        <img className="landingPageImgContain" src={require("../../pictures/IMG_5237.jpg")} />
                     </ReactCSSTransitionGroup>
                

                     <ReactCSSTransitionGroup
                        transitionName="fadeIn"
                        transitionAppear={true}
                        transitionAppearTimeout={2600}
                        transitionEnter={false}
                        transitionLeave={true}>    
                        <div className="landingPageText">
                            <div className="intro"> Hi, I'm Tyler </div>
                            
                            <div> I'm an ethusastic web developer </div>
                        </div>
                     </ReactCSSTransitionGroup>
                     </div>


                     <ReactCSSTransitionGroup
                        transitionName="fadeIn"
                        transitionAppear={true}
                        transitionAppearTimeout={19000}
                        transitionEnter={false}
                        transitionLeave={true}>                       
                      <div className="firstDivider"></div>
                     </ReactCSSTransitionGroup>

                     <div>
                    <About/>
                     </div>
            </div>
        )
    }
}

export default LandingPage;
