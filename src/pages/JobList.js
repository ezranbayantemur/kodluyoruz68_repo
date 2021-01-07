/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, {useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import wait from 'waait';
import {EmptyList, Loading, SearchBar, JobItem} from '../components';
import {main} from '../styles/pages_styles';

const api_url = 'https://jobs.github.com/positions.json';

function JobList(props) {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchJob(searchedField) {
    setLoading(true);
    axios
      .get(api_url, {
        params: {
          description: searchedField,
        },
      })
      .then((response) => {
        setLoading(false);
        setJobList(response.data);
      });
  }

  const renderJob = ({item}) => (
    <JobItem
      job={item}
      onSelect={() => props.navigation.navigate('Detail', {id: item.id})}
    />
  );

  const renderEmpty = () => <EmptyList />;

  return (
    <SafeAreaView style={main.container}>
      <View style={main.container}>
        <SearchBar onSearch={searchJob} />
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            keyExtractor={(item) => item.id}
            data={jobList}
            renderItem={renderJob}
            ListEmptyComponent={renderEmpty}
            contentContainerStyle={{flexGrow: 1}}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export {JobList};
