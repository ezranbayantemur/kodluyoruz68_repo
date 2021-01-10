import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {useFetch} from '../../hooks/useFetch';
import {Loading, Error} from '../../components';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Friends() {
  const {data, loading, error} = useFetch(API_URL);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <Text>Friends</Text>
      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
}

export {Friends};
