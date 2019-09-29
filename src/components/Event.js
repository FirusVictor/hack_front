import React, {Component} from 'react'
import Header from './Header'
import education from '../assets/education.svg'
import avatar from '../img/def_avatar.png'
import icoEdit from '../assets/edit.svg'
import {Link} from "react-router-dom";
import dateFormat from 'dateformat';
import axios from "axios";

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event_id: this.props.match.params.id,
            activeNav: 0,
            event:{organizations:[]}
        };
    }

    componentDidMount() {
        let self =this;
        axios.get('http://localhost:8000/events/'+self.state.event_id)
            .then(res=>{
                self.setState({event:res.data.data})
            })
    }
    render() {
        let organizators = this.state.event.organizations.map((val,key)=>{
            return (<h4 className={'sponsor'}><Link to={'/'+val.type+'/'+val._id}>{val.name}</Link></h4>);
        });
        return (
            <main>
                <div className={'user-page event-page'}>
                    <Header/>
                    <div className='wrapper_1080'>
                        <div className="main">
                            <div className="main-info card">
                                <div className="avatar">
                                    <img src={process.env.PUBLIC_URL + '/'+ this.state.event.logo} alt=""/>
                                </div>
                                <div className='content'>
                                    <span className={'id'}>id: {this.state.event_id}</span>
                                    <h3>{this.state.event.name}</h3>
                                    <h5>Сроки проведения:</h5>
                                    <p>{this.state.event.date_start} - {this.state.event.date_end}</p>
                                    <h5>Тип мероприятия: </h5>
                                    <p>{this.state.event.type}</p>
                                </div>
                                <div className="b-edit-profile">
                                    <img src={icoEdit} alt=""/>
                                </div>
                            </div>

                            <div className="card event">
                                <h3>Спонсоры</h3>
                                {organizators}
                            </div>
                            <div className="card event">
                                <h3>Информация о проведении</h3>
                                <p>Россия, будучи в составе движения WorldSkills International с мая 2012 года, активно продвигает его ценности и уделяет особое внимание популяризации рабочих профессий среди молодого поколения, а также способствует повышению стандартов профессионального образования. Движение WorldSkills Russia охватывает все 85 регионов страны и является одним из приоритетных проектов в сфере подготовки кадров.</p>
                                <p>Столица Республики Татарстан впервые приняла мировой чемпионат по профессиональному мастерству по стандартам «Ворлдскиллс». Тысячелетний город, центр прогрессивного региона, место пересечения культурных традиций Востока и Запада, организатор крупных международных мероприятий, Казань стала центром притяжения молодых профессионалов всего мира.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        );
    }

}