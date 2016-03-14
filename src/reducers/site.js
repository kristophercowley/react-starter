import {ERROR_FETCHING_DATA, SET_TITLE, SET_LOADING} from '../constants/ActionTypes';

const defaultState = {
  dataError: false,
  dataErrorMessage: '',
  loading: true,
  title: ''
};

export default function (state = defaultState, action = {}) {
  switch (action.type) {
    case SET_TITLE:
      return Object.assign({}, state, {title: action.title});
    case SET_LOADING:
      return Object.assign({}, state, {loading: action.loading});
    case ERROR_FETCHING_DATA:
      return Object.assign({}, state, {
        dataError: true,
        dataErrorMessage: action.error
      });
    default:
      return state;
  }
}
