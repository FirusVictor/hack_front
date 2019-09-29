import React, {Component} from 'react'
import Header from './Header'
import education from '../assets/education.svg'
import axios from 'axios'
import {Link} from "react-router-dom";

export default class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {companies:[]}
    }

    componentDidMount() {
        var self = this;
        axios.get('http://localhost:8000/company')
            .then(res => {
                self.setState({companies:res.data.data})
            });
    }

    render() {
        let cards = this.state.companies.map((val,key)=>{
            let vacant = val.vacant.map((v,k)=>{
                return <p>{v}</p>;
            });
            return (<Link to={'/company/'+val._id} key={key} className="card company">
                <header>
                    <div className="avatar">
                        <img src={education} alt=""/>
                    </div>
                    <div className="title">
                        {val.name}
                    </div>
                </header>
                <div className="content">
                    <h5>Вакансии</h5>
                    {vacant}
                </div>
            </Link>);
        });
        return (
            <main>
                <div className={'univers-page companies'}>
                    <Header active={1}/>
                    <div className="wrapper_1080">
                        {cards}
                    </div>
                </div>
            </main>
        );
    }

}