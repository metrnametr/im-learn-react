import React, { Component } from 'react'

export default class Item extends Component {
  render() {
      const {handleDelete, id, item} = this.props
    return (
      <li key={id} className='list-group-item d-flex justify-content-between'> {item} 
        <div>
            <button 
            onClick={() => handleDelete(id)}
            className='btn btn-danger'>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <button className='btn btn-primary'>
                <i className="fa fa-exclamation" aria-hidden="true"></i>
            </button>
        </div>
      </li>
    )
  }
}
