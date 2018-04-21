import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import React, { Component } from 'react';

const drawerWidth = 240;

class MainHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position='fixed' style={{width: 'calc(100% - ' + {drawerWidth} + 'px)'}}>
          <Toolbar>
            <Typography variant="title" style={{flex: 1}} color='inherit'>
              Homework 3
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" PaperProps={{position: 'relative', width: drawerWidth}}>
          <List>
            <Typography variant="title" color='inherit'>
              Homework 3
            </Typography>
          </List>
        </Drawer>
      </React.Fragment>
    );
  }
  
}

export default MainHeader;