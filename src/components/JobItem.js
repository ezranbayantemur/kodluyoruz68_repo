import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {job_item} from '../styles/components_styles';

export const JobItem = ({job, onSelect}) => {
  return (
    <View style={job_item.container}>
      <Image
        resizeMode="contain"
        source={{uri: job.company_logo}}
        style={job_item.logo}
      />
      <View style={job_item.footer}>
        <View style={job_item.details}>
          <Text style={job_item.company}>{job.company}</Text>
          <Text style={job_item.title}>{job.title}</Text>
        </View>
        <TouchableOpacity style={job_item.buttonContainer} onPress={onSelect}>
          <Text style={job_item.buttonTitle}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
