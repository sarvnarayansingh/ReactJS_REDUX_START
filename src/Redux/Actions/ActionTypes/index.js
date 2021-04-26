 
import * as actionConstant from '../ActionConstant';


export const selectDrawerIncrement = (payload) => ({
     type: actionConstant.SELECT_DRAWER_INCREMENT,
      payload
    });

export const selectDrawerDecrement = (payload) => ({
  type: actionConstant.SELECT_DRAWER_DECREMENT,
    payload
  });

export const selectData = (payload) => ({  
    type: actionConstant.SELECT_DATA,
    payload
  })