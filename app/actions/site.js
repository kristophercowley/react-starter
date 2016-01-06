function getTitle(props) {
  let path = props.location.pathname;
  if (path === '/') {
    return props.route.indexRoute.title;
  }
  if (path.indexOf('/') === 0) {
    path = path.slice(1);
  }
  let title = props.routes.find(function(route){
    const routePath = route.path;
    // If has :
    if (routePath && routePath.indexOf(':') > -1) {
      let pattern = routePath.split('/').map(piece => {
        if(piece){
          return (piece.indexOf(':') > -1) ? '/*[0-9]' : piece;
        }
      }).join('');
      return new RegExp(pattern).test(path);
    }
    return route.path == path;
  });
  title = title ? title.title : '';

  return typeof title === 'function' ? title(props) : title;
}
export function setTitle(props) {
  const title = getTitle(props);
  document.title = `Bronco Day | ${title}`;
  return {type: 'SET_TITLE', title};
}

export function isLoading(loading){
  document.getElementById('loading').style.display = loading ? 'block' : 'none';
  return {type: 'IS_LOADING', loading};
}