import React, {Component} from 'react'
import Header from './Header'
import education from '../assets/education.svg'
import avatar from '../img/def_avatar.png'
import icoEdit from '../assets/edit.svg'
import {Link} from "react-router-dom";
import dateFormat from 'dateformat';
import axios from "axios";

export default class Univer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company:{
                name:'',
                city:'',
                street:'',
                address:'',
                site:'',
                vacant:[],
            },
            company_id: this.props.match.params.id,
            activeNav: 0
        };
    }

    componentDidMount() {
        let self =this;
        axios.get('http://localhost:8000/company/'+self.state.company_id)
            .then(res=>{
                self.setState({company:res.data.data})
            })

    }
    render() {
        let vacant = this.state.company.vacant.map((val,key)=>{
            return (<div className={'vacant'}>
                <h4>{val}</h4>
                <p>Описание Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, dignissimos dolorem doloribus ea ipsam mollitia omnis quibusdam quis quod reprehenderit? Consectetur corporis expedita facilis id mollitia obcaecati similique, tempore voluptas?</p>
                <a className={'compet'} href="#">Компетенции вакансии</a>
            </div>);
        });
        return (
            <main>
                <div className={'user-page univer-page'}>
                    <Header/>
                    <div className='wrapper_1080'>
                        <div className="main">
                            <div className="main-info card">
                                <div className="avatar">
                                    <img src={process.env.PUBLIC_URL + '/' +this.state.company.logo} alt=""/>
                                </div>
                                <div className='content'>
                                    <span className={'id'}>id: {this.state.company_id}</span>
                                    <h3>{this.state.company.name}</h3>
                                    <h5>Адрес:</h5>
                                    <p>{this.state.company.city}, {this.state.company.street}, {this.state.company.address}</p>
                                    <h5>Официальный сайт: </h5>
                                    <a target={'_blank'} href={this.state.company.site}>{this.state.company.site}</a>
                                </div>
                                <div className="b-edit-profile">
                                    <img src={icoEdit} alt=""/>
                                </div>
                            </div>

                            <div className="card event">
                                <h3>Открытые вакансии</h3>
                                {vacant}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}