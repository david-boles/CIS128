import EmailIcon from '@material-ui/icons/Email';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/InfoOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import StoreIcon from '@material-ui/icons/Store';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import { Button, FormControl, FormHelperText, TextField } from 'material-ui';
import Avatar from 'material-ui/Avatar';
import ExpansionPanel, { ExpansionPanelDetails, ExpansionPanelSummary } from 'material-ui/ExpansionPanel';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import React, { Component } from 'react';
import MainHeader from './MainHeader';
import './styles.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainHeader/>

        <main style={{padding: '32px', paddingTop: '80px'}}>
          {this.renderPageContent()}
        </main>
      </React.Fragment>
    );
  }

  renderPageContent() {
    var hash = window.location.hash.substr(1).toLowerCase();
    if(hash === 'home') return this.renderHome();
    else if(hash === 'products') return this.renderProducts();
    else if (hash === 'location') return this.renderLocation();
    else if (hash === 'contact_us') return this.renderContactUs();
    else return this.renderHome();
  }

  renderHome() {
    return (
      <Typography>Welcome to the home page! You can go to our other pages by opening the navigation drawer.</Typography>
    );
  }

  renderProducts() {
    return (
        <ExpansionPanel style={{backgroundColor: '#3f51b5'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color: '#fff'}} />}>
            <Typography style={{color: '#fff'}}>All our Toyz!</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{display: 'block'}}>
            
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<InfoIcon />}>
                <Typography>Bike</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{display: 'block', textAlign: 'center'}}>
                <img src='/images/toy1.jpg' alt='mini bike' style={{width: '100%', maxWidth: '400px'}}/>
                <br/>
                <Typography>
                  Get ready to put the pedal to the injection molded plastic!
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<InfoIcon />}>
                <Typography>Rubber Duck</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{display: 'block', textAlign: 'center'}}>
                <img src='/images/toy2.jpg' alt='rubber ducky' style={{width: '100%', maxWidth: '400px'}}/>
                <br/>
                <Typography>
                  Rubber ducky, you're the one! You make bath time so much fun!
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<InfoIcon />}>
                <Typography>LEGO Millenium Falcon</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{display: 'block', textAlign: 'center'}}>
                <img src='/images/toy3.png' alt='millenium falcon' style={{width: '100%', maxWidth: '400px'}}/>
                <br/>
                <Typography>
                  Vroom vrrrooooooom!!!!
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<InfoIcon />}>
                <Typography>Snap Circuits</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{display: 'block', textAlign: 'center'}}>
                <img src='/images/toy4.jpg' alt='snap circuits' style={{width: '100%', maxWidth: '400px'}}/>
                <br/>
                <Typography>
                  Is that even really a toy at this point?
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<InfoIcon />}>
                <Typography>Blocks</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{display: 'block', textAlign: 'center'}}>
                <img src='/images/toy5.jpg' alt='blocks' style={{width: '100%', maxWidth: '400px'}}/>
                <br/>
                <Typography>
                  Good ol' blocks. Can't go wrong with these!
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

          </ExpansionPanelDetails>
        </ExpansionPanel>
    );
  }

  renderLocation() {
    return (
      <Typography>When we open our store, we will let you know our location here even with directions from your place to it!!!</Typography>
    );
  }

  renderContactUs() {
    return (
      <React.Fragment>
        <List>
          <ListItem style={{paddingLeft: 0}}>
            <Avatar>
              <EmailIcon />
            </Avatar>
            <ListItemText primary="helpdesk@ABCToyz.com" style={{overflowWrap: 'break-word'}} />
          </ListItem>
          <ListItem style={{paddingLeft: 0}}>
            <Avatar>
              <PhoneIcon />
            </Avatar>
            <ListItemText primary="(123) 456 7890" />
          </ListItem>
          <ListItem style={{paddingLeft: 0}}>
            <Avatar>
              <StoreIcon />
            </Avatar>
            <ListItemText primary="123 Example Lane, A City, CA" />
          </ListItem>
          <ListItem style={{paddingLeft: 0}}>
            <Avatar>
              <WebAssetIcon />
            </Avatar>
            <ListItemText>
              <a style={{color: 'inherit'}} href='https://www.facebook.com'>See us on Facebook!</a>
            </ListItemText>
          </ListItem>
        </List>
        <br/>
        <FormControl style={{marginTop: 32, width: '100%'}}>
          <FormHelperText>Let us know what you think!</FormHelperText>
          <TextField label="Name" style={{marginTop: 8, maxWidth: '200px', minWidth: 0}}/>
          <TextField label="Email" style={{marginTop: 16, maxWidth: '200px', minWidth: 0}}/>
          <TextField multiline label="Comment" style={{marginTop: 16, width: '100%', maxWidth: '600px', minWidth: 0}}/>
          <Button variant='raised' color="primary" style={{marginTop: 16, maxWidth: '100px', minWidth: 0}}>Submit</Button>
        </FormControl>
      </React.Fragment>
    );
  }
}

export default App;
