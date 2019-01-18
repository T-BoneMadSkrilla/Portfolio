import React, {Component} from 'react';
import './Work_projects.css';

class Work_projects extends Component {
    render(){
        return(
            <div>
                <div className='workFlexRowSpaceAround'>
                <div className="work_projectsTitle">Projects</div>

                <div className='workContainer'>
                <a className='workAtags'href="http://www.learnreact.co" target="_blank" > Learn React </a>
                
                <div className='workDescriptionContainer'>

                <img className="workSetWidthNoPadding" src={require("../../pictures/learnreact.PNG")}></img>

                <div className="workSetWidth">
                    Tech stack <br></br>
                    Front-end: React Redux <br></br>
                    Back-end: Node.js <br></br>
                    Database: PostgreSQL <br></br><br></br>
                    Additional technologies: <br></br>Stlyied Components<br></br> S3 Image Uploader <br></br> React Vis Express Auth0 Flex Box 
                </div>
                <div className="workSetWidth">learnreact.co was a site I helped build with 3 other developers. The idea behind the site was for users to log in and create a profile to track their progress. Learn react had lessons, quizes and drills for the user to complete. The site was built in two weeks.</div>


                </div>
                </div>

                <div className="workContainer">
                <a className='workAtags'href="http://madskrilla.com/" target="_blank"> Mad Skrilla </a>

                <div className='workDescriptionContainer'>

                <img src={require("../../pictures/madskrilla.PNG")} className="workSetWidthNoPadding"></img>

                <div className="workSetWidth">
                    Tech stack <br></br>
                    Front-end: React Redux<br></br>
                    Back-end: Node.js<br></br>
                    Database: PostgreSQL<br></br><br></br>
                    Additional technologies: <br></br>
                    Draft js<br></br> Stripe
                    </div>

                <div className="workSetWidth"> Madskrilla was designed to be a site where users could log in and create their own eCommerce site to make "mad skrilla". A user could add their own images and blog posts as well as products. I ended up commenting out the shopping functionality before I hosted the site because of a non compete I have with Kibo Commerce. </div>

                </div>

                </div>
                </div>


            </div>
        )
    }
}

export default Work_projects;

// src={require("../../pictures/IMG_5237.jpg")}