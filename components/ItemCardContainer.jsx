import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

const ItemCardContainer = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: imageSrc }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: '#D1D5DB',
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    width: 182,
    marginVertical: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default ItemCardContainer;
