import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import store from './store';

export default function AppProvider({children}) {
  return <Provider store={createStore(reducer, store)}>{children}</Provider>;
}
