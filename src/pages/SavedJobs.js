import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, RefreshControl} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EmptyList, JobItem} from '../components';
import {savedJobs} from '../styles/pages_styles';

function SavedJobs() {
  const [loading, setLoading] = useState(false);
  const [jobList, setJobList] = useState([]);

  async function getSavedJobs() {
    setLoading(true);
    const jobs = await AsyncStorage.getItem('@JOBS');
    const parsedJobs = JSON.parse(jobs);

    setLoading(false);
    setJobList(parsedJobs);
  }

  const renderJobs = ({item}) => <JobItem job={item} />;

  const renderEmpty = () => <EmptyList />;

  return (
    <SafeAreaView style={savedJobs.container}>
      <View style={savedJobs.container}>
        <FlatList
          data={jobList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderJobs}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getSavedJobs} />
          }
          ListEmptyComponent={renderEmpty}
        />
      </View>
    </SafeAreaView>
  );
}

export {SavedJobs};
