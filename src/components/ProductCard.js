import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

// {
//   id: 1,
//   title: 'General Mobile GM 20',
//   imgURL:
//     'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg',
//   price: '₺1.810,21',
//   inStock: true,
// },

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgURL}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
});

export {ProductCard};
