import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import UserContainer from './components/UserContainer'
// import CakeContainer from './components/CakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import NewCakeContainer from './components/NewCakeContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
