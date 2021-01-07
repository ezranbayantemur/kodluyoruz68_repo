import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {MEAL_API} from '@env';
import {MealItem} from './components';

export function Meals({route}) {
  const {categoryName} = route.params;
  const [mealList, setMealList] = useState([]);

  async function fetchData() {
    const {
      data: {meals},
    } = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
      params: {
        c: categoryName,
      },
    });
    setMealList(meals);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderMeal = ({item}) => <MealItem item={item} />;

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(item) => item.idMeal}
        data={mealList}
        renderItem={renderMeal}
      />
    </SafeAreaView>
  );
}
