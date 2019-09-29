import React, {Component} from 'react'
import axios from 'axios';
import {Redirect} from "react-router-dom";
export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.handleChange_login = this.handleChange_login.bind(this);
        this.handleChange_pass = this.handleChange_pass.bind(this);
        this.handleChange_f_name = this.handleChange_f_name.bind(this);
        this.handleChange_l_name = this.handleChange_l_name.bind(this);
        this.handleChange_m_name = this.handleChange_m_name.bind(this);
        this.handleChange_snils = this.handleChange_snils.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.state={
            login: '',
            pass: '',
            f_name: '',
            l_name: '',
            m_name: '',
            snils: '',
        }
    }
    handleChange_login(e){
        this.setState({login: e.target.value})
    }
    handleChange_pass(e){
        this.setState({pass:  e.target.value})
    }
    handleChange_f_name(e){
        this.setState({f_name: e.target.value})
    }
    handleChange_l_name(e){
        this.setState({l_name: e.target.value})
    }
    handleChange_m_name(e){
        this.setState({m_name: e.target.value})
    }
    handleChange_snils(e){
        this.setState({snils: e.target.value})
    }
    handlerSubmit(){
        axios.post('http://localhost:8000/registration',this.state)
            .then( (response)=> {
                if(response.data.status){
                    window.localStorage.setItem('user_id',response.data.id);
                    window.localStorage.setItem('user_name',this.state.l_name[0].toUpperCase() + this.state.f_name[0].toUpperCase());
                    this.setState({redirect:<Redirect to={"/users/"+response.data.id} push={true}/>})
                }else{
                    alert('Снилс уже занят');
                }
            })
    }
    render() {
        return (
            <div className={'authform'}>
                <div className="overlay" onClick={this.props.handlerClose}></div>
                <form action="localhost:8000/registration" method={'post'} onSubmit={this.handlerSubmit}>
                    <h3>Регистрация</h3>
                    <input type="text" placeholder={'Логин'} onChange={this.handleChange_login} value={this.state.login} name={'login'}/>
                    <input type="password" placeholder={'Пароль'} onChange={this.handleChange_pass} value={this.state.pass} name={'pass'}/>
                    <input type="text" placeholder={'Имя'} onChange={this.handleChange_f_name} value={this.state.f_name} name={'f_name'}/>
                    <input type="text" placeholder={'Фамилия'} onChange={this.handleChange_l_name} value={this.state.l_name} name={'l_name'}/>
                    <input type="text" placeholder={'Отчество'} onChange={this.handleChange_m_name} value={this.state.m_name} name={'m_name'}/>
                    <input type="number" placeholder={'Номер СНИЛС'} onChange={this.handleChange_snils} value={this.state.snils} name={'snils'}/>
                    <input type="submit" value={'Зарегистрироваться'}/>

                </form>
                {this.state.redirect}
            </div>
        );
    }

}