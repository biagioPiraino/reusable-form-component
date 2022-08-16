import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    const inputToDispay = this.props.inputs.map(
      x => {
        if (x.type === 'checkbox') {
          return (
            <React.Fragment key={x.key}>
              <section className='form--checkbox'>
                <input
                  id={x.key}
                  type={x.type}
                  name={x.name}
                  onChange={this.props.onInputChange}
                  checked={x.checked}
                />
                <label htmlFor={x.id}>{x.label}</label>
            </section>
          </React.Fragment>
          )
        } 
        else {
          return (
          <React.Fragment key={x.key}>
            <input
              id={x.key}
              className='form--input'
              type={x.type}
              name={x.name}
              placeholder={x.placeholder}
              onChange={this.props.onInputChange}
              value={this.props.value}
            />
          </React.Fragment>
          )       
        }
      }
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
