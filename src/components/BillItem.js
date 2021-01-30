import React from 'react';
import {View, Text, Image} from 'react-native';
import {billItem_style} from '../styles/component_styles';

export function BillItem({bill}) {
  const time = new Date(bill.time);

  return (
    <View>
      <View style={billItem_style.container}>
        <Text style={billItem_style.time}>TIME: {time.toDateString()} </Text>
        {bill.products.map((item, index) => {
          return (
            <View key={index} style={billItem_style.productContainer}>
              <Text style={billItem_style.productTitle}>{item.title}</Text>
              <Text style={billItem_style.productPrice}>{item.price} TL</Text>
            </View>
          );
        })}
        <Text style={billItem_style.total}>{bill.total} TL</Text>
      </View>
    </View>
  );
}
