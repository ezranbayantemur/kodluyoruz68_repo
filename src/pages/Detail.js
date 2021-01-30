import React, {useEffect} from 'react';
import {SafeAreaView, Image, Text, ActivityIndicator, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../components/Button';
import {useFetch} from '../hooks';
import {detail_style, common_styles} from '../styles/page_styles';

export function Detail({route}) {
  const {
    data: product,
    loading: productLoading,
    error: productError,
    fetch: fetchProduct,
  } = useFetch();

  const dispatcher = useDispatch();

  useEffect(() => {
    fetchProduct('https://fakestoreapi.com/products/' + route.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product || productLoading) {
    return (
      <SafeAreaView style={common_styles.loadingConatiner}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  function handleAddCart() {
    dispatcher({type: 'ADD_TO_CART', payload: {product}});
  }

  return (
    <SafeAreaView style={detail_style.container}>
      <View style={detail_style.innerContainer}>
        <Image source={{uri: product.image}} style={detail_style.image} />
        <Text style={detail_style.title}>{product.title}</Text>
        <Text style={detail_style.description}>{product.description}</Text>
        <Text style={detail_style.price}>{product.price} TL</Text>

        <View style={detail_style.buttonsContainer}>
          <Button text="Add To Cart" icon="cart" onPress={handleAddCart} />
          <Button text="Add To Favorites" icon="heart" />
        </View>
      </View>
    </SafeAreaView>
  );
}
