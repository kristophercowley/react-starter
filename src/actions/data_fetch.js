//import {checkStatus, parseJSON} from '../utilities/fetch';
//import {BASE_URL} from '../constants/Api';

export default function fetchData() {
  return function(dispatch) {
    return new Promise(function(resolve){
      resolve('testing');
      dispatch({type: 'TESTING'});
    });
    //return fetch(`${BASE_URL}/data`, {
    //  "Accept": "application/prs.app-name.v1+json"
    //})
    //  .then(checkStatus)
    //  .then(parseJSON)
    //  .then(response => {
    //    const {data} = response;
    //    console.log(data);
    //    // Format and dispatch data here
    //    //const formatted = format(data);
    //    dispatch({type: 'ACTION_TYPE', data});
    //  });
  };
}
