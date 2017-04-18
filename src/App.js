import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as userActionCreators from './actionCreators/users'

class App extends Component {
  render() {
    const {userActions, users = users.users}=this.props;
    let usersJson = JSON.stringify(users, null, 4);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Redux Saga Examples</h2>
        </div>
        <p className="App-intro">
          <button onClick={userActions.getUsers}>Get Users</button>
        </p>
        <p>
          <input type="text" onChange={userActions.getUsers}/>
        </p>
        <pre>
          {usersJson}
        </pre>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
