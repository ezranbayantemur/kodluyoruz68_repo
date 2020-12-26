import React from 'react';
import axios from 'axios';
import {SafeAreaView, View, Text, Button} from 'react-native';

const url_path = 'https://jsonplaceholder.typicode.com/users';

function Main() {
  function getDataThenCatch() {
    console.log('START THEN-CATCH');

    axios.get(url_path).then((response_1) => {
      console.log(response_1);
    });

    console.log('END THEN-CATCH');
  }

  async function getDataAsync() {
    console.log('START ASYNC');

    const response = await axios.get(url_path);

    console.log(response);
    console.log('END ASYNC');
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Hello!</Text>
        <Button title="Get Data Then Catch" onPress={getDataThenCatch} />
        <Button title="Get Data Async" onPress={getDataAsync} />
      </View>
    </SafeAreaView>
  );
}

export default Main;
