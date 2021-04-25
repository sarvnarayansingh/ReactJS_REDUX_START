import React from 'react'
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/Action/GlobalAction';

function sideDrawer(props) {
  // const drawerData=[];
  // drawerData.push(props.drawerData)
    return (
        <div>
            <h1> counter:-{props.drawerCountData}</h1>
            <button onClick ={props.selectDrawerIncrement}>click</button>
            <button onClick ={props.selectData}>click</button>
            <div>
              {/* {drawerData} */}
            </div>
            {console.log("props.drawerData",props.drawerData)}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      drawerCountData: state.globalData.drawerStore,
      drawerData: state.globalData.data,

    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      selectDrawerIncrement: (payload) => dispatch(actionCreator.selectDrawerActions(payload)),
      selectData: (payload) => dispatch(actionCreator.selectDataActions(payload)),

    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(sideDrawer);