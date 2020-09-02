import { ADDITION, SUBTRACTION } from './actionTypes';

const initialState = {
  counter: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITION:
      return { counter: state.counter + 1 };

    case SUBTRACTION:
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};