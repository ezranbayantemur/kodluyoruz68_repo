import React from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {FavoriteItem} from './components';
import {useSelector} from 'react-redux';

function Favorites(props) {
  const favlist = useSelector((state) => state.favorites);

  const renderFavorites = ({item}) => <FavoriteItem item={item} />;

  const renderHeader = () => (
    // eslint-disable-next-line react-native/no-inline-styles
    <Text style={{fontSize: 35, fontWeight: 'bold', margin: 5}}>Favorites</Text>
  );

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={renderHeader}
        keyExtractor={(_, i) => i.toString()}
        data={favlist}
        renderItem={renderFavorites}
      />
    </SafeAreaView>
  );
}

export {Favorites};
