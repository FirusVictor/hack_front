import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png';
import avatar from '../img/def_avatar.png'
import search from '../assets/search.svg'


export default class Header extends Component {
    render() {
        let links = [];
        links.push(['/users','Участники']);
        links.push(['/university','Университеты']);
        links.push(['/company','Компании']);
        links.push(['/events','Мероприятия']);
        links.push(['/education','Курсы']);
        let li = links.map((key, val) => {
            return (
                <Link className={this.props.active === val ? "active": ""} key={val} to={key[0]}>
                    <li>
                    {key[1]}
                    </li>
                </Link>);
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
                    <div className="search">
                        <img src={search} alt=""/>

                    </div>
                    <div className="profile">
                        <div className="avatar">
                            <img src={avatar} alt=""/>
                        </div>
                        ФВ
                    </div>
                </div>
            </div>
        );
    }

}