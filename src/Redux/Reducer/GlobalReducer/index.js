
 
import * as actionConstant from '../../Actions/ActionConstant';

const initialState = {
  drawerStore:0,
  data:[]
};

export const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.SELECT_DRAWER_INCREMENT:
      return {
        ...state,
        drawerStore:state.drawerStore + action.payload,
      };
      case actionConstant.SELECT_DATA:
      return {
        ...state,
        drawerStore:state.drawerStore + action.payload,
      };
    default:
      return state;
  }
  
};