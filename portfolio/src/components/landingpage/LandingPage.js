import React, {Component} from 'react';
import './LandingPage.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import About from '../about/About';
import Work_projects from '../work_projects/Work_projects';
import Resume from '../resume/Resume';

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
                            
                            <div> I'm an ethusastic web developer with an equal balence between being technical and creative</div>
                        </div>
                     </ReactCSSTransitionGroup>
                     </div>

                    <div className="about">
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


                     <div className="workProjects">
                     <ReactCSSTransitionGroup
                        transitionName="fadeIn"
                        transitionAppear={true}
                        transitionAppearTimeout={19000}
                        transitionEnter={false}
                        transitionLeave={true}>                       
                      <div className="secondDivider"></div>
                     </ReactCSSTransitionGroup>

                     <div className="resume">
                        <Work_projects/>
                     <ReactCSSTransitionGroup
                        transitionName="fadeIn"
                        transitionAppear={true}
                        transitionAppearTimeout={19000}
                        transitionEnter={false}
                        transitionLeave={true}>                       
                      <div className="firstDivider"></div>
                     </ReactCSSTransitionGroup>

                     </div>
                     <div>
                        <Resume/>
                     Résumé
                     </div>
                        </div>
            </div>
        )
    }
}

export default LandingPage;
