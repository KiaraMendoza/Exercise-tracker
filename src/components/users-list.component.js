import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
    <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
            <img className="position-relative" src="https://via.placeholder.com/350x320" height="225px" width="100%" alt="" />
            <div className="card-body">
                <p>User: {props.user.username}</p>
                <p className="card-text">Exercises:</p>
                <p className="card-text">{props.user.exerciseList}</p>
                <p className="card-text">{props.user.exercise}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>
)

export default class UsersList extends Component {
    constructor(props){
        super(props);

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/users/')
        .then(response => {
            this.setState({ users: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }
    usersList() {
        return this.state.users.map((currentUser, userExercises) => {
            return <User user={currentUser} key={currentUser._id} />;})
    }

    render() {
        return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    {this.usersList()}
                </div>
            </div>
        </div>
        )
    }
}
