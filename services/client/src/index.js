import React, { Component } from 'react'; // new
import ReactDOM from 'react-dom';
import axios from 'axios';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';



class App extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();

        this.state = {
            users: [],
        };
    }

    componentDidMount(){
        this.getUsers();
    }

    getUsers(){
        // console.log(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`);
        axios.get(`http://localhost/users`)
        .then((res) => { this.setState({ users: res.data.data.users});})
        .catch((err) => { console.log(err);});
    }

    render() {
        return (
            <section className= "section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-one-third">
                            <br/>
                            <h1 className="title is-1"> Tdodos  </h1>
                            <hr/><br/>
                            <AddUser></AddUser>
                            <hr/><br/>
                            { /* new */ }
                            <UsersList users ={this.state.users}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};


ReactDOM.render(<App />, document.getElementById('root'));

