import {StyleSheet, Dimensions} from 'react-native';

const user_input = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 5,
    margin: 10,
    backgroundColor: 'white',
  },

  buttonContainer: {
    borderRadius: 5,
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const user_list = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  mail: {
    fontWeight: 'bold',
  },
});

export {user_input, user_list};
