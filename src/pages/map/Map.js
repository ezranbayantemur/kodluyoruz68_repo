import React from 'react';
import {SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';

function Map(props) {
  const userList = useSelector((state) => state.users);
  return (
    <SafeAreaView style={{flex: 1}}>
      <MapView
        provider="google"
        style={{
          flex: 1,
        }}>
        {userList &&
          userList.map((user, i) => {
            return (
              <Marker
                key={i}
                coordinate={{
                  latitude: parseInt(user.address.geo.lat),
                  longitude: parseInt(user.address.geo.lng),
                }}
              />
            );
          })}
      </MapView>
    </SafeAreaView>
  );
}

export {Map};
