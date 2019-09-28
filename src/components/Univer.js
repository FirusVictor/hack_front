import React, {Component} from 'react'
import Header from './Header'
import education from '../assets/education.svg'
import icoEdit from '../assets/edit.svg'
import {Link} from "react-router-dom";
import dateFormat from 'dateformat';
import axios from "axios";

export default class Univer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            university_id: this.props.match.params.id,
            activeNav: 0,
            university:{}
        };
    }

    componentDidMount() {
        let self =this;
        axios.get('http://localhost:8000/university/'+self.state.university_id)
            .then(res=>{
                self.setState({university:res.data.data})
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
                                    <img src={education} alt=""/>
                                </div>
                                <div className='content'>
                                    <span className={'id'}>id: {this.state.university_id}</span>
                                    <h3>{this.state.university.name}</h3>
                                    <h5>Адрес:</h5>
                                    <p>{this.state.university.city}, {this.state.university.street}, {this.state.university.address}</p>
                                    <h5>Официальный сайт: </h5>
                                    <a target={'_blank'} href={this.state.university.site}>{this.state.university.site}</a>
                                    <p></p>
                                </div>
                                <div className="b-edit-profile">
                                    <img src={icoEdit} alt=""/>
                                </div>
                            </div>
                            <div className="full-info card">
                                <div className="content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}