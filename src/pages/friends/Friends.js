import React from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import {useFetch} from '../../hooks/useFetch';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function Friends(props) {
  const {data, loading, error} = useFetch(API_URL);

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>Hata..</Text>
      </SafeAreaView>
    );
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
