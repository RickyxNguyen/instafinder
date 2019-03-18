import React, { Component } from 'react';
import Home from './components/Home/Home';
import HashtagFinder from './components/HashtagFinder/HashtagFinder';
import ProfileFinder from './components/ProfileFinder/ProfileFinder';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={ProfileFinder} />
          <Route exact path="/hashtag" component={HashtagFinder} />
      </Switch>
      </BrowserRouter>
     </React.Fragment>    
    );
  }
}

export default App;
