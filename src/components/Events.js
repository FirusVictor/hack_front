import React, {Component} from 'react'
import Header from './Header'
import education from '../assets/education.svg'
import axios from 'axios'
import {Link} from "react-router-dom";

export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {events:[]}
    }

    componentDidMount() {
        var self = this;
        axios.get('http://localhost:8000/events')
            .then(res => {
                self.setState({events:res.data.data})
            });
    }
    render() {
        let cards = this.state.events.map((val,key)=>{
            let organizations = val.organizations.map((v,k)=>{
                return <p>{v.name}</p>;
            });
            return (<Link to={'/events/'+val._id} key={key} className="card company">
                <header>
                    <img src={process.env.PUBLIC_URL + '/' + val.logo} alt=""/>
                </header>
                <div className="content">
                    <h5 className={'type'}>{val.type}</h5>
                    <h5>Организаторы</h5>
                    {organizations}
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