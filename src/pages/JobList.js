import axios from 'axios';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {SearchBar, JobItem} from '../components';

const api_url = 'https://jobs.github.com/positions.json';

function JobList(props) {
  const [jobList, setJobList] = useState([]);

  function searchJob(searchedField) {
    axios
      .get(api_url, {
        params: {
          description: searchedField,
        },
      })
      .then((response) => setJobList(response.data));
  }

  const renderJob = ({item}) => <JobItem job={item} />;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
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
