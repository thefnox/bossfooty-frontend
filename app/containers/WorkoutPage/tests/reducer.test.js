import { fromJS } from 'immutable';
import workoutPageReducer from '../reducer';

describe('workoutPageReducer', () => {
  it('returns the initial state', () => {
    expect(workoutPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
