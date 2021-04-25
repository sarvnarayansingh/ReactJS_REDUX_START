 
import React from 'react';
import { Provider } from 'react-redux';
import SiderDrawer from './Components/SiderDrawer';
import store from './Redux/Store';

const App = () => {
  

  return (
    <Provider store={store}>
      
        <SiderDrawer />

    </Provider>
  );
};

export default App; 