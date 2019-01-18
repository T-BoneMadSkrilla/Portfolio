import React, {Component} from 'react';
import {  RadialChart  } from 'react-vis';
import './Competencies.css'

//use react vis instead of canvas, Tyler
class Competencies extends Component{
    render(){ 
        const data = [
                        {angle: 9, color: '#00d8ff', label: 'React'}, {angle: 3, color: 'rgb(212, 69, 200)', label: 'Redux'}, {angle: 5, color: '#FA6900', label: 'Node.js'}
                      ];
                    return( 
                        <div className="whiteTextCompetencies">

                            Competencies
                            <RadialChart data={data}
                            className="competenciesLabels"
                            width={250}
                            height={250}
                            colorType='literal'
                            // showLabels ='true'
                            />        
                                                          
                            </div>
                    )
                }
            }
        

export default Competencies;
