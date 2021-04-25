 
import * as actionConstant from '../ActionConstant';


export const selectDrawerIncrement = (payload) => ({
     type: actionConstant.SELECT_DRAWER_INCREMENT,
      payload
    });
    export const selectData = (payload) => {
      
      return {
        type: actionConstant.SELECT_DATA,
        payload
      }
      
     };