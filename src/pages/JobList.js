import axios from 'axios';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {SearchBar, JobItem} from '../components';
import {main} from '../styles/pages_styles';

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

  const renderJob = ({item}) => (
    <JobItem
      job={item}
      onSelect={() => props.navigation.navigate('Detail', {id: item.id})}
    />
  );

  return (
    <SafeAreaView style={main.container}>
      <View style={main.container}>
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
