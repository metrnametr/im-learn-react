import React, { Component } from 'react'

export default class Header extends Component {

  state = {
    active: null
  }
  render() {
    const activeBtn = ''
    const { handleFilter } = this.props
    return (
      <div>
        <h1>My todo App</h1>
        <div className='btn-group'>
          <button
          onClick={() => handleFilter('all', false)}
          className='btn btn-info'> all </button>
          <button
          onClick={() => handleFilter('todo', true)}
          className='btn btn-outline-secondary'> todo </button>
          <button
          onClick={() => handleFilter('complete', true)}
          className='btn btn-outline-secondary'> completed </button>
        </div>
      </div>
    )
  }
}
