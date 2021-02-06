import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {formatDistanceToNow} from 'date-fns';

export function FeedCard({data}) {
  const {user, time, content} = data;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.user}>{user}</Text>
        <Text style={styles.time}>{formatDistanceToNow(time)}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>{content}</Text>
      </View>
    </View>
  );
}
