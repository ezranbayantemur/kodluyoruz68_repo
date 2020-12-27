import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {SearchBar} from '../components/SearchBar';

function JobList(props) {
  return (
    <SafeAreaView>
      <View>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}

export {JobList};
