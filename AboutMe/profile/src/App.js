import React from 'react';

import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import aboutMe from './aboutMe';
const styles = {
  aboutContainer: {
    margin: 20,
    width: 600,
    alignContent: 'center',
    position: 'absolute',
    marginLeft: 300
  },
  titleText: {
    
  },
  header: {
    display: 'flex',
    flexDirection: 'flex-start',
    height: 150,
    backgroundColor: 'white'
  },  
  profilePic: {
    position: 'relative',
    width: "120px",
    height: "120px",
    borderRadius: "100%",
    margin: 20,
  },
  paragraph: {
    textAlign: 'center',
    fontFamily: 'sans-serif',
    color: 'white',
    fontSize: 18,
  }
}

const ProfileHeader = props => {
  return (
    <div style={styles.header}>

    <img style={styles.profilePic}  src={props.profilePic} alt="" />
    <h1 style={styles.titleText}>About Me</h1>
    </div>
  );
}

const StoryContainer = props => {

  return (
    <div style={styles.aboutContainer}>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline"></h1>
          <h3 style={{color:'#fff', fontFamily:'sans-serif '}}> {props.title}</h3>
          <hr/>
        </div>
      </div>
      <p style={styles.paragraph}>
        {props.storyText}
      </p>
  </div>

  );
}

class App extends React.Component {
  state = {
    value: 0,
    titles: ["At UTSA", "Carpentry", "Oil Field Technition", "Computer Science"],
    storyTexts: [aboutMe.utsa, aboutMe.carpentry, aboutMe.oilField, aboutMe.fortyTwo]
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    return (
      <div className="App">
        <ProfileHeader
          profilePic={require('./images/profilepic.jpg')}
        />
        <AppBar position="static" color="default">
          <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          >
          <Tab label="At UTSA" />
          <Tab label="Carpentry" />
          <Tab label="Oil Field Technition" />
          <Tab label="Computer Scientist" />
          </Tabs>
        </AppBar>
        <StoryContainer
          title={this.state.titles[this.state.value]}
          storyText={this.state.storyTexts[this.state.value]}
        />
      </div>

    );
  }
}

export default App;
