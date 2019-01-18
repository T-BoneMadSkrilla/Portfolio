import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Nav.css';

class Nav extends Component {
    constructor(){
        super()
        this.state = {
            open: false
        }
    }


    render(){
        const {open} = this.state
        return(
            <div className="centerNav">
                <div className="firstName">Tyler</div>
                <div onClick={()=>this.setState({open: !open})}>
                <div className="eftink">
                <div className="burger">
                <div className="topBun"></div>
                <div className="middleBun"></div>
                <div className="bottomBun"></div>
                </div>
                <div className="restOfLastName">ftink</div>
                </div>
                </div>
                {open && 
                <ReactCSSTransitionGroup
                transitionName="fadeIn"
                transitionAppear={true}
                transitionAppearTimeout={300}
                transitionEnter={false}
                transitionLeaveTimeout={300}
                transitionLeave={true}>
                <div className="boxAroundLinks"> 
                    <div onClick={()=>this.setState({open: !open})}>
                    <div className="crossBar"> X </div>
                    </div>
                <Link className="navLinks" to="/"> Home </Link>
                <Link className="navLinks" to='/about'> About </Link>
                <Link className="navLinks" to='/work'> Projects </Link>
                <Link className="navLinks" to='/resume'>Résumé</Link>
                </div>
             </ReactCSSTransitionGroup>}
            </div>
        )
    }
}

export default Nav;


