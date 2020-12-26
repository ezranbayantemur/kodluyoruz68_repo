import React from 'react';
import {View, Text, Image} from 'react-native';
import {restaurant_view} from '../styles';

// address: "36038 Monahan Trail, Yelenahaven, ME 34268"
// description: "Delhaize Group will achieve leading positions in food retailing in key mature and emerging markets. We accomplish our goal by developing strong regional companies benefiting from and contributing to the Groups strength, expertise and successful practices. Delhaize Group goes to market with a variety of food store formats. The Group is committed to offer a locally differentiated shopping experience to its customers in each of its markets, to deliver superior value and to maintain high social, environmental and ethical standards."
// hours:
// friday: {opens_at: "6:37 AM", closes_at: "8:31 PM", is_closed: true}
// monday: {opens_at: "10:20 AM", closes_at: "5:22 PM", is_closed: false}
// saturday: {opens_at: "6:54 AM", closes_at: "7:12 PM", is_closed: false}
// sunday: {opens_at: "6:15 AM", closes_at: "8:19 PM", is_closed: true}
// thursday: {opens_at: "8:22 AM", closes_at: "6:55 PM", is_closed: true}
// tuesday: {opens_at: "7:53 AM", closes_at: "11:47 PM", is_closed: true}
// wednesday: {opens_at: "7:31 AM", closes_at: "12:14 PM", is_closed: true}
// __proto__: Object
// id: 2545
// logo: "https://loremflickr.com/500/500/restaurant"
// name: "20 BBQ"
// phone_number: "505-898-0883 x950"
// review: "My only critique would be that the rice could of used more vingaer and for them to use real wasabi. Also the variety of fish in stock wasnt a lot but hopefully that can change over time. The cost justify the quality youre getting. A solid 4 stars."
// type: "Healthy"
// uid: "02aae8b3-c6b4-4386-8f78-1b60f5317ed4"

function RestaurantView({data}) {
  return (
    <View style={restaurant_view.container}>
      <Text style={restaurant_view.title}>{data.name}</Text>
      <Image source={{uri: data.logo}} style={restaurant_view.image} />
    </View>
  );
}

export default RestaurantView;
