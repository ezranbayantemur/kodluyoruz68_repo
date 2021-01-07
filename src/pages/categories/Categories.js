import axios from 'axios';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import {CATEGORY_API} from '@env';

import {CategoryItem} from './components';

export function Categories(props) {
  const [categoryList, setCategoryList] = useState([]);

  async function fetchData() {
    const {
      data: {categories},
    } = await axios.get(CATEGORY_API);
    setCategoryList(categories);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderCategories = ({item}) => (
    <CategoryItem
      item={item}
      onSelect={() =>
        props.navigation.navigate('Meals', {categoryName: item.strCategory})
      }
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={categoryList}
        renderItem={renderCategories}
      />
    </SafeAreaView>
  );
}
