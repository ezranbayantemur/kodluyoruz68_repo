import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const job_detail = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: deviceSize.height / 3,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    justifyContent: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export {main, job_detail};
