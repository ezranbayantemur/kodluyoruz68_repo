import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Hello Class!</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Main;
