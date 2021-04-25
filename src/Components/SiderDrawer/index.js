import React from 'react'
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/Action/GlobalAction';

function sideDrawer() {
    return (
        <div>
            <h1> hellooooo</h1>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      drawerData: state.globalData.drawerStore,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      selectDrawerActions: (payload) => dispatch(actionCreator.selectDrawerActions(payload)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(sideDrawer);