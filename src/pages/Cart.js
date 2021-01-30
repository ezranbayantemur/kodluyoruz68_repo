import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, ActivityIndicator, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CartItem} from '../components';
import {Button} from '../components/Button';
import {CartHistory} from '../components/CartHistory';
import {cart_style, common_styles} from '../styles/page_styles';

export function Cart() {
  const [showHistory, setShowHistory] = useState(false);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(null);
  const cartList = useSelector((state) => state.cart);
  const dispatcher = useDispatch();

  useEffect(() => {
    const total = cartList.reduce((p, c) => {
      return p + c.price;
    }, 0);

    setTotalPrice(total);
  }, [cartList]);

  if (loading) {
    return (
      <SafeAreaView style={common_styles.loadingConatiner}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  function renderCartItem({item}) {
    return <CartItem item={item} />;
  }

  async function checkOut() {
    setLoading(true);

    const bill = {
      time: new Date(),
      products: cartList,
      total: totalPrice,
    };

    const oldList = await AsyncStorage.getItem('@CART_HISTORY');
    const parsedOldList = oldList ? JSON.parse(oldList) : [];

    const newList = [bill, ...parsedOldList];
    const parsedNewList = JSON.stringify(newList);

    await AsyncStorage.setItem('@CART_HISTORY', parsedNewList);
    dispatcher({type: 'DELETE_CART'});
    Alert.alert('moon', 'Checkout completed!');
    setLoading(false);
  }

  return (
    <SafeAreaView style={cart_style.container}>
      <FlatList
        style={cart_style.list}
        keyExtractor={(item, index) => index.toString()}
        data={cartList}
        renderItem={renderCartItem}
      />
      {!!totalPrice && (
        <Button text={`CHECKOUT ${totalPrice} TL`} onPress={checkOut} />
      )}
      <Button
        text="HISTORY"
        icon="clock"
        onPress={() => setShowHistory(true)}
      />
      <CartHistory open={showHistory} onClose={() => setShowHistory(false)} />
    </SafeAreaView>
  );
}
