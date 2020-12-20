import {StyleSheet, Dimensions} from 'react-native';
import {NewsDetail} from '../pages/NewsDetail';

const deviceSize = Dimensions.get('window');

const card_item_style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  image: {
    height: deviceSize.height / 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 5,
  },
  author: {
    textAlign: 'right',
    fontStyle: 'italic',
    fontSize: 12,
  },
});

export {card_item_style};
