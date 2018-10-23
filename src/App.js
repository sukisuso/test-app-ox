import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Test from './components/admin/Test';
import List from './components/admin/List';
import Client from './components/client/Client';
import './App.css';

const Admin = ({ match, location }) => {
  return (
    <div>
        <h2>Admin Page</h2>
        <div>
          <Button color="primary"> 
            <Link to={match.url + "/new"}>Create new Test</Link>
          </Button>
          <Button color="primary">
            <Link to={match.url + "/list"}>View user answers</Link>
          </Button>
        </div>
        <div>
        <Switch location={location}>
          <Route
            exact
            path={match.url + "/new"}
            render={props => <Test {...props} color="red" />}
          />
          <Route
            path={match.url + "/list"}
            render={props => <List {...props} color="blue" />}
          />
        </Switch>
      </div>
      </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
          <div>
            <AppBar position="static" color="default">
              <Toolbar>
                <Button color="primary">
                  <Link to="/admin">Admin Page</Link>
                </Button>
                <Button color="primary">
                  <Link to="/client">Client Page</Link>
                </Button>
              </Toolbar>
            </AppBar>

            <div>
              <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/client" component={Client} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
