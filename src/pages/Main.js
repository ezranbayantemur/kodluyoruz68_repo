import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Category} from '../components';
import {Product} from '../components/Product';
import {useFetch} from '../hooks';
import {main_style, common_styles} from '../styles/page_styles';

export function Main({navigation}) {
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
    fetch: fetchProducts,
  } = useFetch();
  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
    fetch: fetchCategories,
  } = useFetch();

  useEffect(() => {
    fetchProducts('https://fakestoreapi.com/products');
    fetchCategories('https://fakestoreapi.com/products/categories');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!products || !categories || productsLoading || categoriesLoading) {
    return (
      <SafeAreaView style={common_styles.loadingConatiner}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
  const renderProducts = ({item}) => (
    <Product
      item={item}
      onSelect={() => navigation.navigate('Detail', {id: item.id})}
    />
  );

  function renderCategories() {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <Category
            key={index}
            item={category}
            onSelect={() =>
              fetchProducts(
                'https://fakestoreapi.com/products/category/' + category,
              )
            }
          />
        ))}
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={main_style.container}>
      <FlatList
        ListHeaderComponent={renderCategories}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
}

export default Main;
