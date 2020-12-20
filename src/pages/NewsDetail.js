import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {detail_page} from '../styles/pages_style';

function NewsDetail({route}) {
  // const {selected_data: testData} = route.params;
  const {selected_data} = route.params;

  return (
    <SafeAreaView>
      <View>
        <Image
          resizeMode="contain"
          style={detail_page.image}
          source={{uri: selected_data.imageUrl}}
        />
        <View style={detail_page.container}>
          <Text style={detail_page.title}>{selected_data.title}</Text>
          <Text>{selected_data.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export {NewsDetail};
