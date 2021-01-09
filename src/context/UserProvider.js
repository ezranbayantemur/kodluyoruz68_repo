import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './store';
import reducer from './reducer';

function UserProvider(props) {
  return (
    <Provider store={createStore(reducer, store)}>{props.children}</Provider>
  );
}

export default UserProvider;
