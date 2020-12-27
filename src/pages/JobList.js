import axios from 'axios';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {SearchBar} from '../components/SearchBar';

const api_url = 'https://jobs.github.com/positions.json';

function JobList(props) {
  const [jobList, setJobList] = useState([]);

  function searchJob(searchedField) {
    axios
      .get('https://jobs.github.com/positions.json?description=python')
      .then((response) => setJobList(response.data));
  }

  const renderJob = ({item}) => <Text>{item.title}</Text>;

  return (
    <SafeAreaView>
      <View>
        <SearchBar onSearch={searchJob} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={jobList}
          renderItem={renderJob}
        />
      </View>
    </SafeAreaView>
  );
}

export {JobList};
