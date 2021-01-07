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
    width: deviceSize.width * 0.8,
    fontWeight: 'bold',
    fontSize: 30,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  icon: {
    width: deviceSize.width * 0.2,
    textAlign: 'center',
  },
});

const savedJobs = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export {main, job_detail, savedJobs};
