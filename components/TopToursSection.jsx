import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import CardGrid from './CardGrid';

const TopToursSection = () => {
  return (
    <View>
    <View style={styles.topTripsContainer}>
      <Text style={styles.topTripsText}>Tours</Text>
      <TouchableOpacity style={styles.exploreButton}>
        <Text style={styles.exploreText}>Explore</Text>
        <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
      </TouchableOpacity>
    </View>
   <CardGrid/>
  </View>
  )
}
const styles = StyleSheet.create({
    topTripsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        marginTop: 32,
      },
      topTripsText: {
        color: '#2C7379',
        fontSize: 24,
        fontWeight: 'bold',
      },
      exploreButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
      },
      exploreText: {
        color: '#A0C4C7',
        fontSize: 20,
        fontWeight: 'bold',
      },
      itemCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        marginTop: 32,
        flexWrap: 'wrap',
      },
})
export default TopToursSection