import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, Modal} from 'react-native';
import {cartHistory_style} from '../styles/component_styles';
import {BillItem} from './BillItem';
import {Button} from './Button';

export function CartHistory({open, onClose}) {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('@CART_HISTORY').then((result) =>
      setHistory(JSON.parse(result)),
    );
  }, [open]);

  return (
    <Modal visible={open}>
      <SafeAreaView style={cartHistory_style.container}>
        <View style={cartHistory_style.innerContainer}>
          <FlatList
            style={cartHistory_style.list}
            data={history}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <BillItem bill={item} />}
          />
          <Button text="CLOSE" onPress={onClose} icon="close" />
        </View>
      </SafeAreaView>
    </Modal>
  );
}
