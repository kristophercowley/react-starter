import {SET_LOADING} from '../constants/ActionTypes';

export default function setLoading (loading = true) {
  return {type: SET_LOADING, loading};
}
