import React, { Component } from 'react'
import './style.css'
export default class InputItem extends Component {
  render() {
    const { handleInput, handleAdd, value } = this.props;
    return (
      <div className='container my-form'>
        <div className='row'> 
              <input
                className='form-control'
                onChange={handleInput}
                value={value}
              />
              <button
                className='btn btn-info col-lg-12'
                onClick={handleAdd}
              > 
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
              </button>
          </div>
      </div>
    )
  }
}
