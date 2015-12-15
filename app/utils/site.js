import {setTitle} from '../actions/site';

/*
 @description Get the title from the Router or IndexPath component
 @todo: is there a more elegant way to achieve this?
 */
function getTitle(props) {
  let path = props.location.pathname, title = 'Default title';
  if (path === '/') {
    return props.route.indexRoute.title;
  }

  if (path.indexOf('/') === 0) {
    path = path.slice(1);
  }
  props.routes.forEach(function(route) {
    let routePath = route.path;
    if (routePath && routePath.indexOf(':') > -1) {
      let pattern = '';
      routePath.split('/').forEach(piece => {
        if (piece && piece.indexOf(':') > -1) {
          pattern += '/*[0-9]';
        } else if (piece) {
          pattern += piece;
        }
      });
      let regex = new RegExp(pattern);
      if (regex.test(path)) {
        title = route.title;
      }
    } else if (route.path == path) {
      title = route.title;
    }
  });

  if (typeof title === 'function') {
    title = title(props);
  }

  return title;
}

export function setPageTitle(props) {
  let title = getTitle(props);
  if (title !== props.site.title) {
    props.dispatch(setTitle(title));
  }
}

export function hideLoadingAnimation(){
  document.getElementById('spinner').style.display = 'none';
}

export function showLoadingAnimation(){
  document.getElementById('spinner').style.display = 'block';
}