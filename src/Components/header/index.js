import React, { Component } from 'react'
import MyDrawer from './drawer'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import './style.css'
export default class Header extends Component{

    state = {
        isOpen: false
    }

    toggleDrawer = () => {
        this.setState({ isOpen: !this.state.isOpen})    
        console.log('true')
    }

    render(){
        return(
            <AppBar
            position='fixed'
            style={{
                backgroundColor:'#2f2f2f',
                boxShadow:'none',
                padding:'10px 0px'
            }}
            >
                <ToolBar>
                    <div className='header_logo'>
                        <div className='header_logo_venues'>Hlloy</div>
                        <div className='header_logo_title'>Hell</div>
                    </div>
              

                <IconButton
                    aria-label='Menu'
                    color='inherit'
                    onClick={this.toggleDrawer}
                >
                    <MenuIcon/>
                </IconButton>
                </ToolBar>
                <MyDrawer isOpen={this.state.isOpen} toggleDrawer={this.toggleDrawer}/>
            </AppBar>
        )
    }
}