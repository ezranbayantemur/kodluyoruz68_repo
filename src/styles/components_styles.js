import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const search_bar = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: '#039be5',
    padding: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  inputContainer: {
    padding: 5,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },
});

const job_item = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    margin: 5,
    marginVertical: 10,
    borderRadius: 10,
  },
  logo: {
    height: deviceSize.height / 4,
  },
  company: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {},
  footer: {
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {},
  buttonContainer: {
    backgroundColor: '#039be5',
    padding: 10,
    borderRadius: 10,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export {search_bar, job_item};
