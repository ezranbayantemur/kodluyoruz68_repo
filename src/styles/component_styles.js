import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export const category_style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'purple',
    margin: 10,
  },
  title: {
    color: 'white',
    fontSize: 15,
  },
});

export const products_style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowRadius: 2,
    shadowOpacity: 0.1,
  },
  image: {
    height: deviceSize.height / 3,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    textAlign: 'right',
  },
});

export const button_style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'purple',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginRight: 10,
  },
});

export const cartItem_style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'purple',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  price: {
    color: 'white',
    fontSize: 20,
  },
});

export const cartHistory_style = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
  },
  list: {
    flex: 1,
  },
});

export const billItem_style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
  time: {
    fontWeight: 'bold',
  },
  total: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productTitle: {
    flex: 1,
  },
  productPrice: {
    fontWeight: 'bold',
  },
});
