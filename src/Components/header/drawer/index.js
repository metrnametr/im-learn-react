import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
class MyDrawer extends React.Component{
    
    render(){
        const { toggleDrawer, isOpen } = this.props 
        return(
            <Drawer
            anchor='right'
            open={ isOpen } 
            onClose={ () => toggleDrawer()}
            >
                    <List component='nav'>
                        <ListItem button onClick={ () => console.log('go')}>Just Started</ListItem>
                    </List>
            </Drawer>
        )
    }
}

export default MyDrawer;