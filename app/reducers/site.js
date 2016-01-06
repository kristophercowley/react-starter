export default function(state = {loading: true}, action) {
  //console.log(action.type);
  switch (action.type) {
    case 'SET_TITLE':
      return Object.assign({}, state, {title: action.title});
    case 'IS_LOADING':
      return Object.assign({}, state, {loading: action.loading});
    default:
      return state;
  }
}