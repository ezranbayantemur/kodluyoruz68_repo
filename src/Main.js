import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import wait from 'waait';
import RestaurantView from './components/RestaurantView';
import {main_view} from './styles';

const url_path = 'https://random-data-api.com/api/restaurant/random_restaurant';

function Main() {
  const [loading, setLoading] = useState(false);
  const [restaurantData, setRestaurantData] = useState(null);

  function fetchData() {
    setLoading(true);
    wait(3000).then(() => {
      axios.get(url_path).then((response) => {
        setRestaurantData(response.data);
        setLoading(false);
      });
    });
  }

  // async function fetchData() {
  //   setLoading(true);
  //   await wait(3000);
  //   const {data} = await axios.get(url_path);
  //   setRestaurantData(data);
  //   setLoading(false);
  // }

  useEffect(() => {
    fetchData();
  }, []);

  if (!restaurantData) {
    return (
      <SafeAreaView style={main_view.center}>
        <ActivityIndicator />
        <Text>Loading restaurant...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={main_view.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => fetchData()} />
        }>
        <RestaurantView data={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Main;
