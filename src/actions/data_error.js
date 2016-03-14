import {ERROR_FETCHING_DATA} from '../constants/ActionTypes';

export default function errorFetchingData () {
  const error = 'Error fetching data.';
  return {type: ERROR_FETCHING_DATA, error};
}
