import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    const inputToDispay = this.props.inputs.map(
      x =>
      <React.Fragment>
        <input
          key={x.name}
          className='form--input'
          type={x.type}
          name={x.name}
          placeholder={x.placeholder}
          onChange={this.props.onInputChange}
        />
      </React.Fragment>
    );

    return (
      <form onSubmit={this.props.handleSubmit} className='form--main'>
        {inputToDispay}
        <button className='form--button'>{this.props.buttonLabel}</button>
      </form>
    )
  };
}

export default Form;
