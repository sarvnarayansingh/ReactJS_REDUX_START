import * as actionTypes from '../ActionTypes';
import axios from 'axios'

export const selectDrawerActions = () => async (dispatch, getState) => {
  return dispatch(actionTypes.selectDrawerIncrement(4));
};

export const selectDataActions = () => async (dispatch, getState) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response);
  return dispatch(actionTypes.selectData(response));
      })
};