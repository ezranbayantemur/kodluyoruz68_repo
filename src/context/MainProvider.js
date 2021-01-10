import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import initialState from './store';

function MainProvider({children}) {
  return (
    <Provider store={createStore(reducer, initialState)}>{children}</Provider>
  );
}

export default MainProvider;
