import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const meal_view = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

const youtube_button = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: deviceSize.width / 2,
    alignSelf: 'center',
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export {meal_view, youtube_button};
