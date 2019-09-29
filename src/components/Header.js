import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png';
import avatar from '../img/def_avatar.png'
import search from '../assets/search.svg'


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: window.localStorage.getItem('user_name')
        }
    }
    render() {
        let auth = window.localStorage.getItem('user_id');
        if(auth){
            auth = (<a href={window.localStorage.getItem('user_id') ? '/users/'+window.localStorage.getItem('user_id') : '/'} className="profile">
                <div className="avatar">
                    <img src={avatar} alt=""/>
                </div>
                {this.state.name}
            </a>);
        }else{
            auth = (<div className="profile" onClick={this.props.handlerOpen}>
                Авторизация / Регистрация
            </div>);
        }
        let links = [];
        links.push(['/users','Участники']);
        links.push(['/university','Университеты']);
        links.push(['/company','Компании']);
        links.push(['/events','Мероприятия']);
        links.push(['/courses','Курсы']);
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
                    <a href={'/'} className="logo">
                        <img src={logo} alt=""/>
                    </a>
                    <ul className="nav">
                        {li}
                    </ul>
                    <div className="search">
                        <img src={search} alt=""/>
                    </div>
                    {auth}
                </div>
            </div>
        );
    }

}