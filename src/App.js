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
      },
      formValidationInfo: {
        email: {result: true, errorMessage: ''},
        password: {result: true, errorMessage: ''},
        confirmPassword: {result: true, errorMessage: ''}
      }
    };
    this._validator = new Validator();
    this.handleFormInputChanges = this.handleFormInputChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormInputChanges(event) {
    const {name,value,type,checked} = event.target;
    const objectToValidate = {
      name: name,
      value: value,
      type: type,
      matched: name === 'confirmPassword'? this.state.formInfo.password : ''
    }

    const valResult = this._validator.onScreenValidations(objectToValidate);
    
    this.setState({
      formInfo: {
        ...this.state.formInfo,
        [name]: type === 'checkbox' ? checked : value},
      formValidationInfo: {
        ...this.state.formValidationInfo,
        [name]: {
          result: valResult.result,
          errorMessage: valResult.errorMessage 
        }
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.formInfo);
    console.log(this.state.formValidationInfo);
  }

  render (){
    const formInputs = 
    [
        {
          key:'01',
          type:'text',
          placeholder:'Username',
          name:'userName'
        },
        {
          key:'02',
          type:'text',
          placeholder:'Email',
          name:'email'
        },
        {
          key:'03',
          type:'password',
          placeholder:'Password',
          name:'password'
        },
        {
          key:'04',
          type:'password',
          placeholder:'Confirm Password',
          name:'confirmPassword'
        },
        {
          key:'05',
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
