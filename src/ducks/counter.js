
const INCREMENT = 'INCREMENT';

export function increment(amount){
 return {
  type: INCREMENT,
  amount: amount
 }
}


const initialState = {
 currentValue: 0
}

// the initialState is teh fall back value incase no new state is found/given
export default function reducer(state = initialState, action){
    switch(action.type){
     case INCREMENT:
     // change states value
     const newValue = state.currentValue + action.amount;
     const newState = Object.assign({}, state,{ currentValue: newValue})
     return newState;
    }

    return state;
}

module.exports = reducer;
