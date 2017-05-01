import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as sagaHelpersExampleActionCreators from './actionCreators/sagaHelpers'
import * as forkSpawnExampleActionCreators from './actionCreators/forkSpwanExample'
import * as nonBlockingCallsExampleActionCreators from './actionCreators/nonBlockingCalls'
import * as blockingCallsExampleActionCreators from './actionCreators/blockingCalls'
import * as parallelCallsExampleActionCreators from './actionCreators/parallel'


class App extends Component {
  render() {

    const {
      forkSpawnExampleActions,
      nonBlockingCallsExampleActions,
      blockingCallsExampleActions,
      sagaHelpersExampleActions,
      parallelCallsExampleActions
    }=this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Redux Saga Examples</h2>
        </div>
        <fieldset>
          <legend>Saga Helpers</legend>
          <button onClick={sagaHelpersExampleActions.getUsersE}>takeEvery</button>
          <button onClick={sagaHelpersExampleActions.getUsersL}>takeLatest</button>
          <button onClick={sagaHelpersExampleActions.getUsersT}>throttle</button>
        </fieldset>
        <fieldset>
          <legend>Saga Effects - Fork & Spawn</legend>
          <button onClick={forkSpawnExampleActions.runForkExample}>Fork Example</button>
          <button onClick={forkSpawnExampleActions.runSpawnExample}>Spawn Example</button>
        </fieldset>
        <fieldset>
          <legend>Saga Effects - Blocking calls</legend>
          <button onClick={nonBlockingCallsExampleActions.getUsers}>Get Users
          </button>
          <button onClick={nonBlockingCallsExampleActions.getCities}>Get Cities
          </button>
        </fieldset>
        <fieldset>
          <legend>Saga Effects - Non Blocking calls</legend>
          <button onClick={blockingCallsExampleActions.getUsers}>Get Users
          </button>
          <button onClick={blockingCallsExampleActions.getCities}>Get Cities
          </button>
        </fieldset>
        <fieldset>
          <legend>Saga Effects - Parallel calls</legend>
          <button onClick={parallelCallsExampleActions.getData}>Get Data
          </button>
        </fieldset>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sagaHelpersExampleActions: bindActionCreators(sagaHelpersExampleActionCreators, dispatch),
    forkSpawnExampleActions: bindActionCreators(forkSpawnExampleActionCreators, dispatch),
    nonBlockingCallsExampleActions: bindActionCreators(nonBlockingCallsExampleActionCreators, dispatch),
    blockingCallsExampleActions: bindActionCreators(blockingCallsExampleActionCreators, dispatch),
    parallelCallsExampleActions: bindActionCreators(parallelCallsExampleActionCreators, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
