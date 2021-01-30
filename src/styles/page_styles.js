import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export const common_styles = StyleSheet.create({
  loadingConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const detail_style = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  description: {
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  image: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: deviceSize.height / 2,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    backgroundColor: 'purple',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const main_style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export const cart_style = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
