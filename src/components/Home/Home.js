import React from 'react';
import "./Home.css";
import Button from '@material-ui/core/Button';
import { Route } from 'react-router-dom'


const Home = () => [
  
<div>

  <div className = "home">
  <strong>instaFinder</strong> 
  </div>

  <div className = "buttons" style={{display: 'flex', justifyContent: 'center'}} xs={12}>
  
  <Route render={({ history}) => (
    <Button variant="outlined" className = "profile" onClick={() => { history.push('/profile') }}>
      Profile Finder
    </Button>
  )} />

  <Route render={({history}) => (
  <Button variant="outlined" className = "hashtag" onClick={() => { history.push('/hashtag') }}>
  Hashtag Finder
  </Button>
  )} />

  </div>

</div>
]

export default Home;
