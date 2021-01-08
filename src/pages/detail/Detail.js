import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {MealView} from './components';

export function Detail({route}) {
  const [meal, setMeal] = useState({});
  const {mealId} = route.params;

  async function fetchData() {
    const {
      data: {meals},
    } = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
      params: {
        i: mealId,
      },
    });
    setMeal(meals[0]);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <MealView item={meal} />
    </SafeAreaView>
  );
}
