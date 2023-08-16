import {StyleSheet} from 'react-native';
import React from 'react';
import CervNavigation from './src/navigation/CervNavigation';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/store/reducer/rootreducer';

const store = createStore(rootReducer);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <CervNavigation />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
