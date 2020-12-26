import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const restaurant_view = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    marginVertical: 10,
    borderRadius: 10,
    height: deviceSize.height / 3,
  },
  description: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
  },
  address: {
    fontWeight: 'bold',
    marginVertical: 3,
  },
  phone_number: {
    fontWeight: 'bold',
    marginVertical: 3,
  },
  review: {
    marginVertical: 10,
    fontStyle: 'italic',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {restaurant_view};
