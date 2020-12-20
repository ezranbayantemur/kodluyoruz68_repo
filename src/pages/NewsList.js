import React from 'react';
import {SafeAreaView, View, ScrollView, FlatList} from 'react-native';
import {Card, BannerItem} from '../components';

import news_data from '../news_data.json';
import banner_data from '../banner_data.json';

function NewsList(props) {
  const renderNewsData = ({item}) => (
    <Card
      news={item}
      onClick={() => props.navigation.navigate('Detail', {selected_data: item})}
    />
  );

  const renderBanner = () => {
    return (
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}>
        {banner_data.map((data) => (
          <BannerItem key={data.id} banner_item={data} />
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={news_data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderNewsData}
          ListHeaderComponent={renderBanner}
        />
      </View>
    </SafeAreaView>
  );
}

export {NewsList};
