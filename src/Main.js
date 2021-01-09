import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import First from './pages/First';
import Second from './pages/Second';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = {
  counter: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};

    default:
      return state;
  }
}

function Main() {
  return (
    <Provider store={createStore(reducer, initialState)}>
      <SafeAreaView style={{flex: 1}}>
        <First />
        <Second />
      </SafeAreaView>
    </Provider>
  );
}

export default Main;
