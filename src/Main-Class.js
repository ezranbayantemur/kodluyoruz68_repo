import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  checkUser(name) {
    return <Text>USERNAME: {name}</Text>;
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Hello Class!</Text>
          {this.checkUser('EZRAN')}
        </View>
      </SafeAreaView>
    );
  }
}

export default Main;
