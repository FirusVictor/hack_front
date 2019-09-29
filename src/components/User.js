import React, {Component} from 'react'
import Header from './Header'
import avatar from '../img/def_avatar.png'
import icoEdit from '../assets/edit.svg'
import {Link} from "react-router-dom";
import dateFormat from 'dateformat';
import axios from "axios";

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.match.params.id,
            activeNav: 0,
            user:{}
        }
    }

    componentDidMount() {
        let self =this;
        axios.get('http://localhost:8000/users/'+self.state.user_id)
            .then(res=>{
                console.log(res.data.data);
                self.setState({user:res.data.data})
            })

    }
    render() {
        return (
            <main>
                <div className={'user-page'}>
                    <Header/>
                    <div className='wrapper_1080'>
                        <div className="main">
                            <div className="main-info card">
                                <div className="avatar">
                                    <img src={avatar} alt=""/>
                                </div>
                                <div className='content'>
                                    <span className={'id'}>id: {this.state.user_id}</span>
                                    <h3>{this.state.user.l_name} {this.state.user.f_name} {this.state.user.m_name}</h3>
                                    <h5>Должность:</h5>
                                    <p>full-stack разработчик ( <Link to={'/company/5d905902d797ae33ccdb1d13'}>LobsterLab</Link> )</p>
                                    <h5>Дата рождения: </h5>
                                    <p>{dateFormat(this.state.user.birthday, "dd.mm.yyyy") }</p>
                                </div>
                                <div className="b-edit-profile">
                                    <img src={icoEdit} alt=""/>
                                </div>
                            </div>
                            <div className="full-info card">
                                <div className="content">
                                    <h4>Карьера</h4>
                                    <ul>
                                        <li>
                                            <span className='date'>2019</span>
                                            <div className="data">
                                                full-stack программист - <Link to={'/company/5d905902d797ae33ccdb1d13'}>LobserLab</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <span className='date'>2017 - 2019</span>
                                            <div className="data">
                                                Преподаватель web-программирования - <Link to={'/university/5d90526ad797ae33ccdb1d12'}>ВИТИ НИЯУ
                                                МИФИ</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <span className='date'>2012 - 2017</span>
                                            <div className="data">
                                                Фрилансер
                                            </div>
                                        </li>
                                    </ul>
                                    <hr/>
                                    <h4>Образование</h4>
                                    <ul>
                                        <li>
                                            <span className='date'>2017 - 2019</span>
                                            <div className="data">
                                                Системный анализ и управление - <Link to={'/university/5d90526ad797ae33ccdb1d12'}>ВИТИ НИЯУ МИФИ</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <span className='date'>2012 - 2016</span>
                                            <div className="data">
                                                Информационные системы и технологии - <Link to={'/university/5d90526ad797ae33ccdb1d12'}>ВИТИ НИЯУ МИФИ</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <span className='date'>2000 - 2012</span>
                                            <div className="data">
                                                Красноврская МБОУ СОШ (2012)
                                            </div>

                                        </li>
                                    </ul>
                                    <h4>Компетенции</h4>
                                    <div className="competitions">
                                        <span>Управление персоналом <b>7</b></span>
                                        <span>Применение паттернов <b>12</b></span>
                                        <span>Обработка ошибок и иcключений <b>3</b></span>
                                        <span>Разработка UNIT-тестов <b>4</b></span>
                                        <span>Применение пространства имен <b>7</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}