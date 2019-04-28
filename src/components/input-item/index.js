import React, { Component } from 'react'

export default class InputItem extends Component {
  render() {
    const { handleInput, handleAdd, value } = this.props;
    return (
      <div>
          <input
          onChange={handleInput}
          value={value}
          />
          <button
          className='btn btn-info'
          onClick={handleAdd}
          > <i className="fa fa-plus-circle" aria-hidden="true"></i></button>
      </div>
    )
  }
}
