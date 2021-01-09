import React from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {user_list} from './styles';

export function UserList() {
  const globalUserList = useSelector((state) => state.userList);

  const renderUsers = ({item}) => {
    return (
      <View style={user_list.itemContainer}>
        <Text style={user_list.mail}>{item.mail}</Text>
        <View style={user_list.nameContainer}>
          <Text>{item.name}</Text>
          <Text>
            {item.surName} ({item.age})
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Text style={user_list.title}>User List</Text>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={globalUserList}
        renderItem={renderUsers}
      />
    </SafeAreaView>
  );
}
