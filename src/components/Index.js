import React, {Component} from 'react'
import Header from './Header'
import Auth from './Auth'
import graph from '../assets/graph.svg'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpenAuth:false};
        this.handlerOpen = this.handlerOpen.bind(this);
        this.handlerClose = this.handlerClose.bind(this);
    }
    handlerOpen(){
        this.setState({isOpenAuth:true});
    }
    handlerClose(){
        this.setState({isOpenAuth:false});
    }
    render() {
        return (
            <div className={'index-page'}>
                <Header handlerOpen={this.handlerOpen} isReg={true}/>
                <main>
                    <div className='wrapper_1080'>
                        <div className="card circle">
                            <div className="col">
                                <div className="circle primary">
                                    <div className="content">12345</div>
                                </div>
                                <h3>УЧАСТНИКИ</h3>
                            </div>
                            <div className="col">
                                <div className="circle primary">
                                    <div className="content">12345</div>
                                </div>
                                <h3>УНИВЕРСИТЕТЫ</h3>
                            </div>
                            <div className="col">
                                <div className="circle primary">
                                    <div className="content">12345</div>
                                </div>
                                <h3>КОМПАНИИ</h3>
                            </div>
                        </div>
                        <div className="card competition">
                            <h2>Востребованные компетенции</h2>
                            <img src={graph} alt=""/>
                        </div>
                        <div className="card prof">
                            <h2>Популярные профессиональные области</h2>
                            <div className="prof-graph">
                                <div className="col">
                                    <span className='number'>123</span>
                                    <div className="line"></div>
                                    <span className='legend'>Информационные технологии</span>
                                </div>
                                <div className="col">
                                    <span className='number'>123</span>
                                    <div className="line"></div>
                                    <span className='legend'>Высший менеджмент</span>
                                </div>
                                <div className="col">
                                    <span className='number'>123</span>
                                    <div className="line"></div>
                                    <span className='legend'>Маркетинг, реклама, PR</span>
                                </div>
                                <div className="col">
                                    <span className='number'>123</span>
                                    <div className="line"></div>
                                    <span className='legend'>Безопасность</span>
                                </div>
                                <div className="col">
                                    <span className='number'>123</span>
                                    <div className="line"></div>
                                    <span className='legend'>Рабочий персонал</span>
                                </div>
                                <div className="col">
                                    <span className='number'>123</span>
                                    <div className="line"></div>
                                    <span className='legend'>Банки, инвестиции, лизинг</span>
                                </div>
                                <div className="col">
                                    <span className='number'>123</span>
                                    <div className="line"></div>
                                    <span className='legend'>Административный персонал</span>
                                </div>
                                <div className="col">
                                    <span className='number'>123</span>
                                    <div className="line"></div>
                                    <span className='legend'>Туризм, гостиницы, рестораны</span>
                                </div>
                                <div className="col">
                                    <span className='number'>123</span>
                                    <div className="line"></div>
                                    <span className='legend'>Транспорт, логистика</span>
                                </div>
                                <div className="col">
                                    <span className='number'>123</span>
                                    <div className="line"></div>
                                    <span className='legend'>Юристы</span>
                                </div>
                            </div>
                        </div>
                        <div className="card circle">
                            <div className="col">
                                <div className="circle second">
                                    <div className="content">12345</div>
                                </div>
                                <h3>ВАКАНСИИ</h3>
                            </div>
                            <div className="col">
                                <div className="circle second">
                                    <div className="content">12345</div>
                                </div>
                                <h3>КУРСЫ</h3>
                            </div>
                            <div className="col">
                                <div className="circle second">
                                    <div className="content">12345</div>
                                </div>
                                <h3>МЕРОПРИЯТИЯ</h3>
                            </div>
                        </div>
                    </div>
                </main>
                {this.state.isOpenAuth ? <Auth handlerClose={this.handlerClose} /> : ''}
            </div>
        );
    }

}