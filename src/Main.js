import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';

const url_path = 'https://random-data-api.com/api/restaurant/random_restaurant';

function Main() {
  const [restaurantData, setRestaurantData] = useState({});

  async function fetchData() {
    const {data} = await axios.get(url_path);
    setRestaurantData(data);
  }

  useEffect(() => {
    fetchData();
  }, [restaurantData]);

  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  );
}

export default Main;
