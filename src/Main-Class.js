/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    console.log('CONSTRUCTOR');
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
  }

  render() {
    console.log('RENDER');
    return (
      <SafeAreaView>
        <View>
          <Text style={{fontSize: 50}}>Counter: {this.state.counter}</Text>
          <Button title="up!" onPress={() => this.setState({counter: 5})} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Main;
