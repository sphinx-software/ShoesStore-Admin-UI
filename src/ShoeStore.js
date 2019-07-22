import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import UserEditor from "./components/UserEditor";
import Home from "./components/Home";

class ShoeStore extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/create-user" component={UserEditor}/>
          //todo add router component
        </Switch>
      </Router>
    )
  }
}

export default ShoeStore;
