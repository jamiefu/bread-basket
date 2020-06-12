import React, {Component, useState} from 'react';
import { withRouter } from "react-router-dom";
import './Login.css';

class RegistrationForm extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.school = React.createRef();
        this.major = React.createRef();
        this.degree = React.createRef();
        this.interests = React.createRef();
        this.gender = React.createRef();
        this.race = React.createRef();
        this.geographicRegion = React.createRef();
        this.organizations = React.createRef();

        this.stats = {}
    }

    handleSubmit(event) {
        alert('A user has registered: ' + this.firstName.current.value);
        event.preventDefault();
        /*
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        } */
    }

    redirectToHome = () => {
        this.props.updateTitle('Home')
        this.props.history.push('/');
    }
    
    redirectToLogin = () => {
        this.props.history.push('/login'); 
        this.props.updateTitle('Login');
    }

    updateTitle = () => {
        console.log('TBD')
    }

    //   handleOnChange() = (email) => {
            
    //     var emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //     if ( emailTest.test(email) ) {
    //         console.log('Valid email!')
    //         // this is a valid email address
    //         // call setState({email: email}) to update the email
    //         // or update the data in redux store.
    //     }
    //     else {
    //         console.log('Invalid email')
    //         // invalid email, maybe show an error to the user.
    //     }
    
    //   }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} class="col-12">
                    <div class='form-inline'>
                        <label class='col-form-label' for='firstName'> First name </label>
                        <input type='text' 
                            className='form-control' 
                            aria-describedby='nameHelp' 
                            placeholder='Enter first name'
                            ref={this.firstName} />
                    </div>
                    <div class='form-inline'> 
                        <label class='col-form-label' htmlFor='exampleLastName'>Last name</label>
                        <input type='text' 
                            className='form-control' 
                            aria-describedby='nameHelp' 
                            placeholder='Enter last name'
                            ref={this.lastName}
                        />
                    </div>
                    <div class='form-inline'>
                    <label class='col-form-label' htmlFor='exampleInputEmail1'>Email address</label>
                    <input type='email' 
                        className='form-control' 
                        id='email' 
                        aria-describedby='emailHelp' 
                        placeholder='Enter email'
                        ref={this.email}
                        // onChange={ handleOnChange }
                    />
                    </div>
                    <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                    <div class='form-inline'>
                        <label htmlFor='exampleInputPassword1'>Password</label>
                        <input type='password' 
                            className='form-control' 
                            id='password' 
                            placeholder='Password'
                        />
                    </div>
                    <div class='form-inline'>
                        <label htmlFor='exampleInputPassword1'>Confirm Password</label>
                        <input type='password' 
                            className='form-control' 
                            id='confirmPassword' 
                            placeholder='Confirm Password'
                            ref={this.password}
                        />
                    </div>
                     {/* make the following dropdown menus  */}
                    <div class='form-inline'>
                        <label htmlFor='school'>School</label>
                        <input type='text' 
                            className='form-control' 
                            aria-describedby='schoolHelp' 
                            placeholder='e.g. Massachusetts Institute of Technology (MIT)'
                            ref={this.school}
                        />
                    </div>
                    <div class='form-inline'>
                        <label htmlFor='major'>Major</label>
                        <input type='text' 
                            className='form-control' 
                            aria-describedby='nameHelp' 
                            placeholder='e.g. Computer Science'
                            ref={this.major}
                        />
                    </div>
                    <div class='form-inline'>
                        <label htmlFor='Degree'>Degree</label>
                        <input type='text' 
                            className='form-control' 
                            aria-describedby='nameHelp' 
                            placeholder='e.g. Computer Science'
                            ref={this.degree}
                        />
                    </div>
                    <div class='form-inline'>
                        <label htmlFor='region'>Geographic region</label>
                        <input type='text' 
                            className='form-control' 
                            aria-describedby='region' 
                            placeholder='e.g. New England, Europe, Southeastern Asia'
                            ref={this.geographicRegion}
                        />
                    </div>
                    {/* check boxes */}
                    <div class='form-inline'>
                        <label htmlFor='interests'>Fields of interest</label>
                        <input type='text' 
                            className='form-control' 
                            aria-describedby='fieldsHelp' 
                            placeholder='e.g. healthcare'
                            ref={this.interests}
                        />
                    </div>
                    <div class='form-inline'>
                        <label htmlFor='organizations'>Organizations</label>
                        <input type='text' 
                            className='form-control' 
                            aria-describedby='schoolOrganizations' 
                            placeholder='e.g. Society of Women Engineers, TreeHacks'
                            ref={this.organizations}
                        />
                    </div>
                    <div class='form-inline'>
                        <label htmlFor='gender'>Gender</label>
                        <input type='text' 
                            className='form-control' 
                            aria-describedby='gender' 
                            ref={this.gender}
                        />
                    </div>
                    <div class='form-inline'>
                        <label htmlFor='race'>Race/ethnicity</label>
                        <input type='text' 
                            className='form-control' 
                            aria-describedby='race-ethnicity' 
                            ref={this.race}
                        />
                    </div>
                    {/* add first-gen later? */}
                    <button 
                        type='submit' 
                        className='btn btn-primary'
                    >
                        Register
                    </button>
                </form>
                <div className='LoginMessage'>
                    <span>Already have an account? </span>
                    <span className="loginText"> <a onClick={ () => this.redirectToLogin() }>Login here!</a></span> 
                </div>
            </div>
        );
    }
};

export default withRouter(RegistrationForm);