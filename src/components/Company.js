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
                                    <p></p>
                                </div>
                                <div className="b-edit-profile">
                                    <img src={icoEdit} alt=""/>
                                </div>
                            </div>

                            <div className="card stat-univer">
                                <h3>Открытые вакансии</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}