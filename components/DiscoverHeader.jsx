
import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Avatar } from '../assets';

const DiscoverHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.discoverText}>Discover</Text>
        <Text style={styles.subText}>the beauty today</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={Avatar}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  discoverText: {
    fontSize: 35,
    color: '#0B646B',
  },
  subText: {
    fontSize: 26,
    color: '#527283',
  },
  avatarContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#A0AEC0',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
});

export default DiscoverHeader;