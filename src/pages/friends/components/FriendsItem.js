import React from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {friends_item} from './styles';

export function FriendsItem({item}) {
  return (
    <TouchableWithoutFeedback>
      <View style={friends_item.container}>
        <Text style={friends_item.name}>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address": {
//   "street": "Kulas Light",
//   "suite": "Apt. 556",
//   "city": "Gwenborough",
//   "zipcode": "92998-3874",
//   "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"
//   }
// },
// "phone": "1-770-736-8031 x56442",
// "website": "hildegard.org",
// "company": {
//   "name": "Romaguera-Crona",
//   "catchPhrase": "Multi-layered client-server neural-net",
//   "bs": "harness real-time e-markets"
// }
