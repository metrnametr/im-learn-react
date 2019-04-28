import React, { Component } from 'react'
import Item  from '../item'
export default class ListItem extends Component {
  render() {
    const { todo, handleDelete, handleCheck, handleImportant } = this.props;
    return (
      <ul className='list-group'>
          {todo.map( item => 
          <Item 
            handleDelete={handleDelete} 
            handleCheck={handleCheck}
            handleImportant={handleImportant}
            item={item}
            key={item.id}
             />)}
      </ul>
    )
  }

}
