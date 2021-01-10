/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import {Loading, Error} from '../../components';
import {useFetch} from '../../hooks/useFetch';
import {PostItem} from './components';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts(props) {
  const {id} = props.route.params;
  const {data, loading, error} = useFetch(API_URL, {params: {userId: id}});

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const renderPost = ({item}) => <PostItem item={item} onLike={() => null} />;

  const renderHeader = () => (
    <Text style={{fontSize: 35, fontWeight: 'bold', margin: 5}}>Posts</Text>
  );

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={renderHeader}
        keyExtractor={(_, i) => i.toString()}
        data={data}
        renderItem={renderPost}
      />
    </SafeAreaView>
  );
}

export {Posts};
