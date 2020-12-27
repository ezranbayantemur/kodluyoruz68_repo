import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {SearchBar} from '../components/SearchBar';

function JobList(props) {
  function searchJob(searchedField) {
    console.log(searchedField);
  }

  return (
    <SafeAreaView>
      <View>
        <SearchBar onSearch={searchJob} />
      </View>
    </SafeAreaView>
  );
}

export {JobList};
