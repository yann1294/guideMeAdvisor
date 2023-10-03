import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={[styles.imageContainer, type === title.toLowerCase() && styles.activeImageContainer]}>
        <Image style={styles.image} source={imageSrc} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  imageContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  activeImageContainer: {
    backgroundColor: '#D1D5DB',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: '#00BCC9',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },
});

export default MenuContainer;
