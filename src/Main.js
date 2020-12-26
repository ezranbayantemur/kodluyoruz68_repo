import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView, View, Text, FlatList, Button} from 'react-native';

const url_path = 'https://jsonplaceholder.typicode.com/users';

function Main() {
  const [userList, setUserList] = useState([]);

  function fetchData() {
    axios.get(url_path).then((response) => setUserList(response.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderUsers = ({item}) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={userList}
          renderItem={renderUsers}
        />
        <Button title="Get" onPress={fetchData} />
      </View>
    </SafeAreaView>
  );
}

export default Main;
