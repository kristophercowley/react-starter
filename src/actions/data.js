import {ERROR_FETCHING_DATA} from '../constants/ActionTypes';

export function fetchData() {
  return function(dispatch) {
    return new Promise(function(resolve){
      resolve('testing');
      dispatch({type: 'TESTING'});
    });
  };
}

export function errorFetchingData() {
  const error = 'Error fetching data.';
  return {type: ERROR_FETCHING_DATA, error};
}

