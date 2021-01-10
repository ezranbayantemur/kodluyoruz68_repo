import {StyleSheet} from 'react-native';

const posts_item = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'tomato',
    backgroundColor: 'white',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export {posts_item};
