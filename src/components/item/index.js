import React, { Component } from 'react'
import './style.css'
export default class Item extends Component {

    
  render() {
      const {handleDelete, handleCheck, handleImportant, item} = this.props
      const styleList = (item.important) ? 'important' : 'non-important'
    return (
      <li 
      key={item.id} 
      className={'list-group-item d-flex justify-content-between ' + styleList}>
       {item.title} 
        <div className='btn-group'>
            <button 
            onClick={() => handleDelete(item.id)}
            className='btn btn-danger'>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <button 
            onClick={() => handleImportant(item.id)}
            className='btn btn-primary'>
                <i className="fa fa-exclamation" aria-hidden="true"></i>
            </button>
            <button
            onClick={() => handleCheck(item.id)}
            className={(item.complete) ? 'btn btn-success' : 'btn btn-outline-success'}>
                <i className="fa fa-check-circle" aria-hidden="true"></i>
            </button>
        </div>
      </li>
    )
  }
}
