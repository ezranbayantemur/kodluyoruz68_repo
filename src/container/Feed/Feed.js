import React from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {FeedCard, FeedInput} from '../../components';
import styles from './styles';

export function Feed({feeds, onSubmit}) {
  const renderFeed = ({item}) => <FeedCard data={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={feeds}
        style={styles.container}
        renderItem={renderFeed}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
      <FeedInput onSubmit={onSubmit} />
    </SafeAreaView>
  );
}
