import * as actionTypes from '../ActionTypes';
import axios from 'axios'

//sample action
// export const selectDrawerActions = (payload) => async (dispatch, getState) => {
//   return dispatch(actionTypes.selectDrawerIncrement(payload));
// };

export const selectDrawerIncrement = () => async (dispatch, getState) => {
  return dispatch(actionTypes.selectDrawerIncrement(4));
};
export const selectDrawerDecrement = () => async (dispatch, getState) => {
  return dispatch(actionTypes.selectDrawerDecrement(2));
};

export const selectDataActions = () => async (dispatch, getState) => {
 await axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return dispatch(actionTypes.selectData(response.data));
      })
};