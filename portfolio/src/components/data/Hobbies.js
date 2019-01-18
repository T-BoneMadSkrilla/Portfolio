import React,{Component} from 'react';
import DonutChart from 'react-donut-chart';
import './Hobbies.css';

class Hobbies extends Component{
    render(){
        const data = [
            {value: 6, color: '#00d8ff', label: 'React'}, {value: 5, color: 'rgb(212, 69, 200)', label: 'Redux'}, {value: 5, color: '#FA6900', label: 'Node.js'}
          ];
        return(
            <div className="hobbiesCenter">
                Competencies
                <DonutChart
                data={data}
                width={325}
                height={325}

                />
            </div>
        )
    }
}
export default Hobbies;

// const data=[{
//     label: 'Give you up',
//     value: 25
// },
// {
//     label: 'anything',
//     value: 75,
//     isEmpty: true
// }]