
const initialState = {
 currentValue: 0,
 futureValues: [],
 previousValues: [],
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT'
const UNDO = 'UNDO'
const REDO = 'REDO'


// the initialState is the fall back value incase no new state is found/given
export default function reducer(state = initialState, action) {
    switch(action.type){
     case INCREMENT:
       // change states value
       const newValue = state.currentValue + action.amount;
       const newState = Object.assign({}, state,{ currentValue: newValue})
       return newState;

    case DECREMENT:
      const newValue2 = state.currentValue - action.amount;
      const newState2 = Object.assign({}, state, { currentValue: newValue2})
      return newState2;

    case UNDO:
      const newValue3 = state.currentValue - action.amount;
      const newState2 = Object.assign({}, state, { currentValue: newValue2})
      return newState2;

    case REDO:
      const newValue2 = state.currentValue - action.amount;
      const newState2 = Object.assign({}, state, { currentValue: newValue2})
      return newState2;
 }

    return state;
}

export function increment(amount){
 return {
  type: INCREMENT,
  amount: amount
 }
}

export function decrement(amount){
 return {
  type: DECREMENT,
  amount: amount
 }
}

export function undo(){
 return {
  type: UNDO
 }
}

export function redo(){
 return {
  type: REDO
 }
}
