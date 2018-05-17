import fetch from 'isomorphic-fetch';

import { API_URL_COLLEAGUES } from './endpoints';

export const GET_COLLEAGUES = 'GET_COLLEAGUES';
export function getColleagues() {
  return function (dispatch) {
    return fetch(API_URL_COLLEAGUES, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => dispatch({ type: GET_COLLEAGUES, colleagues: data.colleagues }));
  };
}
