import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png';

export default class Header extends Component {
    render() {
        let links = [];
        links.push(['/users','Участники']);
        links.push(['/university','Университеты']);
        links.push(['/company','Компании']);
        let li = links.map((key, val) => {
            return (<li key={val} className={this.props.active === val ? "active": ""}>
                <Link to={key[0]}>{key[1]}</Link>
            </li>);
        });
        return (
            <div className={'main-header'}>
                <div className="wrapper_1080">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <ul className="nav">
                        {li}
                    </ul>
                    <div className="profile"></div>
                </div>
            </div>
        );
    }

}