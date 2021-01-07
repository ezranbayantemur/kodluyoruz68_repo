/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView, View, Text, ImageBackground, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  async function saveJob() {
    // TODO: Zaten kayıtlı ise, kaydetmesin
    // TODO: Kaydedince icon dolu olsun, kaldırınca boş olsun
    let jobs = await AsyncStorage.getItem('@JOBS');

    if (!jobs) {
      jobs = [];
    } else {
      jobs = JSON.parse(jobs);
    }

    jobs.push(jobDetail);
    jobs = JSON.stringify(jobs);

    await AsyncStorage.setItem('@JOBS', jobs);
    Alert.alert('Job Finder', 'Job Saved Successfuly');
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
            <Icon
              name="bookmark-outline"
              size={35}
              onPress={saveJob}
              style={job_detail.icon}
            />
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
