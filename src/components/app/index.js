import React, { Component } from 'react'
import Header from '../header'
import InputItem from '../input-item'
import ListItem from '../list-item'
export default class App extends Component {

    state = {
        todo: [{title:'qweqwe', id:4, important: false, complete: false}],
        filter: [], 
        stateFilter: false,
        value: ''
    }

    componentDidMount() {
        this.setState({ filter: this.state.todo})
    }

    handleInput = (e) => {
        this.setState({ value: e.target.value })
    }

    handleAdd = () => {
        if(this.state.value)
        this.setState({ 
            todo: [ 
                ...this.state.todo, 
                {
                    title: this.state.value, 
                    id: Math.random(),
                    important: false,
                    complete: false
                }
            ]})

        this.setState({ value: ''})
    }


    onCheck = (id, elem) => {
        const array = this.state.todo;
        const index = array.findIndex( item => item.id === id)
        let item = array[index];
        item = { ...item, [`${elem}`]: !item[`${elem}`]}
        this.setState({
            todo: [
                ...array.slice(0, index),
                item, 
                ...array.slice(index + 1)
            ]
        })
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

    handleCheck = (id) =>{
        this.onCheck(id, `complete`)
    }

    handleImportant = (id) =>{
        this.onCheck(id, `important`)
    }

    handleFilter = (type, stateFilter) => {
        this.setState({ stateFilter })
        if( type === 'all')
        this.setState({ filter: this.state.todo})
        else if( type === 'todo' ){
            const filterItem = this.state.todo.filter( item => item.complete === false)
            this.setState({ filter: [...filterItem]})
        } else {
            const filterItem = this.state.todo.filter( item => item.complete !== false)
            this.setState({ filter: [...filterItem]})
        }
    }
  render() {
   
    return (
      <div className='container'>
          <Header
          handleFilter={this.handleFilter}
          />
          <InputItem 
            handleAdd={this.handleAdd} 
            handleInput={this.handleInput} 
            value={this.state.value}/>
          <ListItem 
            handleDelete={this.handleDelete}
            handleCheck={this.handleCheck}
            handleImportant={this.handleImportant}
            todo={(this.state.stateFilter) ? this.state.filter : this.state.todo}
          />
      </div>
    )
  }
}
