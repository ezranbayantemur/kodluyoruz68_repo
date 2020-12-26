import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import RestaurantView from './components/RestaurantView';

const url_path = 'https://random-data-api.com/api/restaurant/random_restaurant';

function Main() {
  const [restaurantData, setRestaurantData] = useState({});

  async function fetchData() {
    const {data} = await axios.get(url_path);
    setRestaurantData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <RestaurantView data={restaurantData} />
      </View>
    </SafeAreaView>
  );
}

export default Main;
