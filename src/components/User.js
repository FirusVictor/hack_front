import React,{Component} from 'react'
import Header from './Header'
export default class Users extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.match.params.id
        }
    }

    render() {
        console.log();
        return (
            <div className={'users-page'}>
                <Header />
                <div className="div">
                </div>
            </div>
        );
    }

}