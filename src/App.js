import React, { Component } from 'react'
import Validator from './component/Validator'
import Form from './component/Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInfo: {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        newsletterFlag: false
      }
    };
    this._validator = new Validator();
    this.handleFormInputChanges = this.handleFormInputChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormInputChanges(event) {
    const {name,value,type,checked} = event.target;
    
    // TODO: add password generic validation here for password
    // TODO: display alert in case validation failed 

    this.setState({
      formInfo: {
        ...this.state.formInfo,
        [name]: type === 'checkbox' ? checked : value}
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Validation
    const {password, confirmPassword} = this.state.formInfo; 
    const result = this._validator.validatePassword(password, confirmPassword);
    
    console.log(this.state.formInfo);
    console.log(result);
  }

  render (){
    const formInputs = 
    [
        {
          type:'text',
          placeholder:'Username',
          name:'userName'
        },
        {
          type:'text',
          placeholder:'Email',
          name:'email'
        },
        {
          type:'password',
          placeholder:'Password',
          name:'password'
        },
        {
          type:'password',
          placeholder:'Confirm Password',
          name:'confirmPassword'
        },
        {
          type:'checkbox',
          label:'Sign up to our newsletter!',
          name:'newsletterFlag',
          id:'newsletterFlag',
          checked:this.state.formInfo.newsletterFlag
        }
    ] // Specyfing Form Component's props

    return (
      <div>
        <Form
          inputs={formInputs}
          onInputChange={this.handleFormInputChanges}
          buttonLabel="Submit"
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
