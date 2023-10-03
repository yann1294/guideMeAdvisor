

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', title: 'Card 1', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/af/40/e0/goa.jpg?w=1200&h=-1&s=1', price: '$10', description: 'This is card 1', location: 'location 1' },
  { id: '2', title: 'Card 2', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/af/40/e0/goa.jpg?w=1200&h=-1&s=1', price: '$20', description: 'This is card 2', location: 'location 2' },
  { id: '3', title: 'Card 3', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/af/40/e0/goa.jpg?w=1200&h=-1&s=1', price: '$10', description: 'This is card 3', location: 'location 3' },
  { id: '4', title: 'Card 4', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/af/40/e0/goa.jpg?w=1200&h=-1&s=1', price: '$20', description: 'This is card 4', location: 'location 4' },
  { id: '5', title: 'Card 5', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/af/40/e0/goa.jpg?w=1200&h=-1&s=1', price: '$10', description: 'This is card 5', location: 'location 5' },
  { id: '6', title: 'Card 6', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/af/40/e0/goa.jpg?w=1200&h=-1&s=1', price: '$20', description: 'This is card 6', location: 'location 6' },
  // Add more cards as needed
];

const Card = ({ title, image, price, description,location }) => (
  <TouchableOpacity>
    <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.locationContainer}>
      <FontAwesome name="map-marker" style={styles.icon} />
      <Text style={styles.location}>{location}</Text>
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.price}>{price}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
  </TouchableOpacity>
);

const CardGrid = () => (
  <FlatList
    data={data}
    renderItem={({ item }) => <Card title={item.title} image={item.image} price={item.price} description={item.description} location={item.location}/>}
    keyExtractor={item => item.id}
    horizontal={true}
  />
);

const styles = StyleSheet.create({
  card: {
    width: 150, // Adjusted the width
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    padding: 10, // Added padding
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold', // Made the title bold
  },
  price: {
    marginTop: 5, // Added margin
    color: 'green', // Made the price green
  },
  description: {
    marginTop: 5, // Added margin
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    color: 'red',
    margin: 5,
  },
  location: {
    fontSize: 14,
    color: 'grey',
  },
});

export default CardGrid;

