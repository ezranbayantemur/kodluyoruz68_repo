import React, {useEffect, useState} from 'react';
import {Feed} from '../../container';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {dataParser} from '../../utils';

export function FeedScreen(props) {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    database()
      .ref()
      .on('value', (snapshot) => {
        const data = snapshot.val();
        const parsedData = dataParser(data);
        setFeeds(parsedData);
      });
  }, []);

  function onSubmit(values) {
    const data = {
      user: auth().currentUser.email.split('@')[0],
      time: new Date().valueOf(),
      ...values,
    };
    database().ref().push(data);
  }
  return <Feed feeds={feeds} onSubmit={onSubmit} />;
}
