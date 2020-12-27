/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {job_detail} from '../styles/pages_styles';

function JobDetail({route}) {
  const {id} = route.params;
  const [jobDetail, setJobDetail] = useState({});

  async function fetchJobData() {
    const response = await axios.get(
      `https://jobs.github.com/positions/${id}.json`,
    );
    setJobDetail(response.data);
  }

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <SafeAreaView style={job_detail.container}>
      <View style={job_detail.container}>
        <ImageBackground
          resizeMode="contain"
          source={{uri: jobDetail.company_logo}}
          style={job_detail.image}>
          <View style={job_detail.detail}>
            <Text style={job_detail.title}>{jobDetail.title}</Text>
            <Icon name="bookmark-outline" size={35}/>
          </View>
        </ImageBackground>
        <WebView
          originWhitelist={['*']}
          source={{html: jobDetail.description}}
        />
      </View>
    </SafeAreaView>
  );
}

export {JobDetail};
