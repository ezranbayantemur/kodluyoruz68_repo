import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, ScrollView, RefreshControl} from 'react-native';
import RestaurantView from './components/RestaurantView';
import {main_view} from './styles';

const url_path = 'https://random-data-api.com/api/restaurant/random_restaurant';

function Main() {
  const [loading, setLoading] = useState(false);
  const [restaurantData, setRestaurantData] = useState({});

  async function fetchData() {
    const {data} = await axios.get(url_path);
    setRestaurantData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
