import React, {Component} from 'react'
import Header from './Header'
import avatar from '../img/def_avatar.png'
import axios from 'axios'
import {Link} from "react-router-dom";

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {users:[]}
    }

    componentDidMount() {
        var self = this;
        axios.get('http://localhost:8000/users')
            .then(res => {
                self.setState({users:res.data.data})
            });
    }

    render() {
        let cards = this.state.users.map((val,key)=>{
            return (<Link to={'/users/'+val._id} key={key} className="card user">
                <header>
                    <div className="avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="title">
                        {val.l_name} {val.f_name} {val.m_name}
                    </div>
                </header>
                <div className="content">
                    <h3>LobsterLab</h3>
                    <p>Full-stack программист</p>
                </div>
            </Link>);
        });
        return (
            <main>
                <div className={'users-page'}>
                    <Header active={0}/>
                    <div className="wrapper_1080">
                        {cards}
                    </div>
                </div>
            </main>
        );
    }

}