/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {useFetch} from '../../hooks/useFetch';
import {Loading, Error} from '../../components';
import {FriendsItem} from './components/FriendsItem';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Friends() {
  const {data, loading, error} = useFetch(API_URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderFriend = ({item}) => <FriendsItem item={item} />;

  const renderHeader = () => (
    <Text style={{fontSize: 35, fontWeight: 'bold', margin: 5}}>Friends</Text>
  );

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={data}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderFriend}
      />
    </SafeAreaView>
  );
}

export {Friends};
