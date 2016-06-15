// Setup Requests
export const SETUP_REQUESTS = 'SETUP_REQUESTS';
export function setupRequests(numberOfPackages, payload) {
  return {
    type: SETUP_REQUESTS,
    numberOfPackages,
    projectName: payload.name,
    version: payload.version
  };
}

export const FETCH_PACKAGE_REQUEST = 'FETCH_PACKAGE_REQUEST';
export const FETCH_PACKAGE_SUCCESS = 'FETCH_PACKAGE_SUCCESS';
export const FETCH_PACKAGE_FAILURE = 'FETCH_PACKAGE_FAILURE';

export function fetchPackageRequest() {
  return {
    type: FETCH_PACKAGE_REQUEST
  };
}

export function fetchPackageSuccess(isDependency, payload) {
  return {
    type: FETCH_PACKAGE_SUCCESS,
    isDependency,
    payload
  };
};

export function fetchTokenFailure(isDependency, name) {
  return {
    type: FETCH_PACKAGE_FAILURE,
    isDependency,
    name
  };
};

export function fetchPackageDetails(packageDetails) {
  return (dispatch, getState) => {
    dispatch(fetchPackageRequest());

    return fetch(`https://salty-bayou-6454.herokuapp.com/${packageDetails.name}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(json => {
      dispatch(fetchPackageSuccess(packageDetails.isDependency, json));
    })
    .catch(error => {
      dispatch(fetchTokenFailure(packageDetails.isDependency, packageDetails.name));
    });
  };
};