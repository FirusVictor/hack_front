import React,{Component} from 'react'
import Header from './Header'
export default class Users extends Component{
    render() {
        return (
            <div className={'users-page'}>
                <Header active={0} />
            </div>
        );
    }

}