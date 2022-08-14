import React, { Component } from 'react'
import Form from './component/Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInfo: {
        userName: '',
        email: '',
        password: ''
      }
    };
    this.handleFormInputChanges = this.handleFormInputChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormInputChanges(event) {
    this.setState({
      formInfo: {
        ...this.state.formInfo,
        [event.target.name]: event.target.value}
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.formInfo);
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
