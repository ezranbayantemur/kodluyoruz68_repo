/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

function JobDetail({route}) {
  const {id} = route.params;
  const [jobDetail, setJobDetail] = useState({});

  async function fetchJobData() {
    const response = await axios.get(
      `https://jobs.github.com/positions/${id}.json`,
    );
    setJobDetail(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Job Detail</Text>
      </View>
    </SafeAreaView>
  );
}

export {JobDetail};
