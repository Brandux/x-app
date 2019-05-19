// import React, { Component } from 'react'; // new
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UserList from './component/UsersList';

class App extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
        //  nuevo
        this.state = {
            users: []
        };
    }

    componentDidMount(){
        this.getUsers();
    }

    getUsers() {
        console.log(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`);
        axios.get(`localhost:3000/users`)
        .then((res) => {this.setState({users: res.data.data.users});})
        .catch((err) => {console.log(err);});
    }

    render (){
        return (
            <section className="section">
            <div className="container">
            <div className="columns">
            <div className="column is-one-third">
                <br/>
                <h1 className="title is-1"> all </h1>
                <hr/><br/>
                <UserList users={this.state.users}/>
            </div>
            </div>
            </div>
            </section>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
