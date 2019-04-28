import React, { Component } from 'react'
import Item  from '../item'
export default class ListItem extends Component {
  render() {
    const { todo, handleDelete } = this.props;
    return (
      <ul className='list-group'>
          {todo.map( item => 
          <Item 
            handleDelete={handleDelete} 
            id={item.id} 
            key={item.id}
            item={item.title} />)}
      </ul>
    )
  }

}
