import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import Nav from './nav';
import Home from './pages/home';
import AddItem from './pages/add-item';
import Items from './pages/items';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/add-item" component={AddItem} />
          <Route path="/items" component={Items} />
        
        </Switch>
        
      </div>
    );
  }
}
