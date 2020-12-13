import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: product.imgURL}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.title}</Text>

      <View style={styles.footer}>
        <View>
          <Text style={styles.price}>{product.price}</Text>
          {!product.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
        </View>

        <TouchableOpacity>
          <Image
            style={styles.cartLogo}
            source={require('../assets/cart.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    elevation: 20,
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  title: {
    marginVertical: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  stock: {
    fontWeight: 'bold',
    color: 'red',
  },
  cartLogo: {
    width: 25,
    height: 25,
    tintColor: 'orange',
  },
});

export {ProductCard};
