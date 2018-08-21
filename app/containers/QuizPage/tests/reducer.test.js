import { fromJS } from 'immutable';
import quizPageReducer from '../reducer';

describe('quizPageReducer', () => {
  it('returns the initial state', () => {
    expect(quizPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
