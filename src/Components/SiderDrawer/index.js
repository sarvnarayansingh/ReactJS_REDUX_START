import React from 'react'
import { connect } from 'react-redux';
import * as actionCreator from '../../Redux/Actions/Action/GlobalAction';

function sideDrawer(props) {
    return (
        <div>
            <h1> counter:{props.drawerCountData}</h1>
            <button onClick ={props.selectDrawerIncrement}>+</button>
            <button onClick ={props.selectDrawerDecrement}>-</button><br></br>
            <br></br>
            <button onClick ={props.selectData}>Dataclick</button>
            <div style={{marginTop:"30px"}}>
              {props.drawerData.map((user,i)=>{
                return(
                  <ul key={i}>
                    <li>{user.name}</li>
                  </ul>
                )
              })}
            </div>
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
      selectDrawerIncrement: (payload) => dispatch(actionCreator.selectDrawerIncrement(payload)),
      selectDrawerDecrement: (payload) => dispatch(actionCreator.selectDrawerDecrement(payload)),
      selectData: (payload) => dispatch(actionCreator.selectDataActions(payload)),

    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(sideDrawer);