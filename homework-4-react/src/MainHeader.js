import HomeIcon from '@material-ui/icons/Home';
import ContactIcon from '@material-ui/icons/ImportContacts';
import LocationIcon from '@material-ui/icons/LocationOn';
import BasketIcon from '@material-ui/icons/ShoppingBasket';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import React, { Component } from 'react';

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false
    }
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="title" color="inherit" style={{flexGrow: 1}}>
              ABC Toyz
            </Typography>

            <Tooltip id="tooltip-icon" title="Home">
              <IconButton color='inherit' aria-label="Home" onClick={function(){window.location.href='#home';window.location.reload();}}>
                <HomeIcon/>
              </IconButton>
            </Tooltip>

            <Tooltip id="tooltip-icon" title="Products">
              <IconButton color='inherit' aria-label="Products" onClick={function(){window.location.href='#products';window.location.reload();}}>
                <BasketIcon/>
              </IconButton>
            </Tooltip>

            <Tooltip id="tooltip-icon" title="Location">
              <IconButton color='inherit' aria-label="Location" onClick={function(){window.location.href='#location';window.location.reload();}}>
                <LocationIcon/>
              </IconButton>
            </Tooltip>

            <Tooltip id="tooltip-icon" title="Contact Us">
              <IconButton color='inherit' aria-label="Contact Us" onClick={function(){window.location.href='#contact_us';window.location.reload();}}>
                <ContactIcon/>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        
      </React.Fragment>
    );
  }
  
}

export default MainHeader;