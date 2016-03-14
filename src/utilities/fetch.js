export function parseJSON(response){
  return response.json();
}

export function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  let error = new Error(response.statusText);
  error.response = response;
  throw error;
}
