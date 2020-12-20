import React from 'react';
import {View, Text, Image} from 'react-native';

import {banner_item_style} from '../styles/components_style';

const BannerItem = ({banner_item}) => {
  return (
    <View style={banner_item_style.container}>
      <Image
        style={banner_item_style.image}
        source={{uri: banner_item.imageUrl}}
      />
    </View>
  );
};

export {BannerItem};
