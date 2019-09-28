import React, {Component} from 'react'
import Header from './Header'
import education from '../assets/education.svg'
import axios from 'axios'
import {Link} from "react-router-dom";

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {users:[]}
    }

    componentDidMount() {
        var self = this;
        axios.get('http://localhost:8000/university')
            .then(res => {
                self.setState({users:res.data.data})
            });
    }

    render() {
        let cards = this.state.users.map((val,key)=>{
            return (<Link to={'/university/'+val.id} key={key} className="card university">
                <header>
                    <div className="avatar">
                        <img src={education} alt=""/>
                    </div>
                    <div className="title">
                        {val.name}
                    </div>
                </header>
            </Link>);
        });
        return (
            <main>
                <div className={'univers-page'}>
                    <Header active={1}/>
                    <div className="wrapper_1080">
                        {cards}
                    </div>
                </div>
            </main>
        );
    }

}