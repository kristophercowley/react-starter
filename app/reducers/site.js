import { SET_TITLE } from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case SET_TITLE:
      let title = action.payload.title;
      document.title = `App | ${title}`;
      return { title };

    default:
      return state;
  }
}