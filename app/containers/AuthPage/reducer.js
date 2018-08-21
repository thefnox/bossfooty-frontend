import { fromJS } from 'immutable';


// The initial state of the App
export const initialState = fromJS({
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
