import React,{Component} from 'react';
import './About.css'

class About extends Component{
    render(){
        return(
            <div>
                <div className="indexZero">
                    My story starts like most people, I didn't know what I wanted to do when I was 18 going to college. I ended up studying GIS and graduated in 2015 from the Harvard of the South: Sam Houston State University... I throughly enjoyed taking large sets of data and making sense of it with maps. 
                    <br></br>
                    Their weren't many jobs in GIS when I graduated but I was lucky enough to land my first real job in business development at a small-ish software company. It wasn't before I realized my creative/technical bug was unfullied and that's when I started to look into coding.   
                </div>
                <br></br>
                <br></br>
                <div className="firstParagraph">
                     My development journey started in 2016 when I started learning HTML and CSS through online courses after work. I wasn't very good at first but I enjoyed spending time learning and turning thoughts into tangible things.  Knowing a little code also helped since, at the time, I was working in sales for Vista software companies.
                </div>
                <br></br>
                <br></br>
                <div className="secondParagraph">
                    In early 2018, I started an eCommerce company with Shopify. Unfortunately, sales dried up and the business went up in flames. I learned a lot though; I learned that I really enjoyed building sites and I was curious about the code behind all the cool things I could do with Shopify and WordPress. That's when I started learning what has turned into my love language, JavaScript.   
                </div>
                <br></br>
                <br></br>
                <div className="secondParagraph">
                   It took me a few months but I decided to go to a coding bootcamp to sharpen my skills. After a lot of early mornings and late nights, I graduated to DevMountain in December 2018. 
                </div>

            </div>
        )
    }
}

export default About;