import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {MEAL_API} from '@env';
import {MealItem} from './components';

export function Meals({route, navigation}) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderMeal = ({item}) => (
    <MealItem
      item={item}
      onSelect={() => navigation.navigate('Detail', {mealId: item.idMeal})}
    />
  );

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
