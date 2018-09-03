import React, { Component } from 'react';

// 1: 
// Import connect from react-redux;
import { connect } from 'react-redux';
// Import any action creators we will use in this component;
// increment from dux/const = 
import { increment, decrement } from './ducks/counter';

class Counter extends Component {
  render() {
          // 6
      // Use data from redux store
      // Use action creators to tell redux to change stuff
      // Both accessed through this.props.x;
    const { currentValue, message, state, increment, decrement } = this.props;
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{message}</h1>
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => decrement(1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => decrement(5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={true}
              onClick={() => null}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={true}
              onClick={() => null}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        </section>
      </div>
    );
  }
}


// 2
// Get infor from app state (redux) and put it on the this.props.
function getDataFromAppState(appState) {

  // whatever we return is put on this.props.
  return {
    message: 'hello from the other side!',
    currentValue: appState.currentValue,
    state: appState
  }
}
// 3
// Set-up all action creators to put on props;
const actionOutputs = {
  increment: increment,
  decrement: decrement
};

// 4
// Connect steps 2 & 3 together
const connected = connect(getDataFromAppState, actionOutputs );

// 5
// Connect step 4 to our component

export default connected(Counter);
