import React, { Component } from 'react'
import InputItem from '../input-item'
import ListItem from '../list-item'
export default class App extends Component {

    state = {
        todo: [{title:'qweqwe', id:4}],
        value: ''
    }

    handleInput = (e) => {
        this.setState({ value: e.target.value })
    }

    handleAdd = () => {
        if(this.state.value)
        this.setState({ 
            todo: [ 
                ...this.state.todo, 
                {title: this.state.value, id: Math.random()}
            ]})

        this.setState({ value: ''})
    }

    handleDelete = (id) => {
        const array = this.state.todo;
        const index = array.findIndex( item => item.id === id)
        this.setState({
            todo: [
                ...array.slice(0, index),
                ...array.slice(index + 1)
            ]
        })
    } 
  render() {
    return (
      <div className='container'>
          <InputItem 
          handleAdd={this.handleAdd} 
          handleInput={this.handleInput} 
          value={this.state.value}/>
          <ListItem 
          handleDelete={this.handleDelete}
          todo={this.state.todo}
          />
      </div>
    )
  }
}
