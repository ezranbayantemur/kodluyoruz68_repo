import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import initialState from './store';
import reducer from './reducer';

function UserProvider(props) {
  console.log('PROVIDER');
  return (
    <Provider store={createStore(reducer, initialState)}>
      {props.children}
    </Provider>
  );
}

export default UserProvider;
