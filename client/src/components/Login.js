import React, { Component, useState } from 'react';
// import axios from 'axios';
import './Login.css';
// import {API_BASE_URL} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: null,
            password: null,
            successMessage: null
        }

        this.email = React.createRef();
        this.password = React.createRef();

        // const [state , this.setState] = useState({
        //     email : "",
        //     password : "",
        //     successMessage: null
        // })
    }

    handleChange = (e) => {
        const {id , value} = e.target   
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":this.state.email,
            "password":this.state.password,
        }
    }

    redirectToHome = () => {
        this.props.updateTitle('Home')
        this.props.history.push('/');
    }
    
    redirectToRegister = () => {
        this.props.history.push('/register'); 
        this.props.updateTitle('Register');
    }

    /*
        axios.post(API_BASE_URL+'login', payload)
            .then(function (response) {
                if(response.data.code === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    redirectToHome();
                    props.showError(null)
                }
                else if(response.data.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            }); 
    */

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitClick} class="col-12">
                    <div>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" 
                            className="form-control" 
                            id="email" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" 
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="form-check">
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={this.handleSubmitClick}
                    >Submit</button>
                </form>
                <div className="alert alert-success mt-2" style={{display: this.state.successMessage ? 'block' : 'none' }} role="alert">
                    {this.state.successMessage}
                </div>
                <div className="registerMessage">
                    <span>Don't have an account? </span>
                    <span className="loginText" onClick={() => this.redirectToRegister()}>Register here!</span> 
                </div>
            </div>
        );
    }
};

export default withRouter(LoginForm)