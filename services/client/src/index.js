<<<<<<< HEAD
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
=======
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
>>>>>>> c4f9abfc3ac26c74330e1f98997398fd849cda12
        };
    }

    componentDidMount(){
        this.getUsers();
    }

<<<<<<< HEAD
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
=======
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
>>>>>>> c4f9abfc3ac26c74330e1f98997398fd849cda12


ReactDOM.render(<App />, document.getElementById('root'));

