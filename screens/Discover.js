import { View, Text, SafeAreaView, Image,ScrollView, StyleSheet } from 'react-native'
import React,{ useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DiscoverHeader from '../components/DiscoverHeader';
import SearchBar from '../components/SearchBar';
import MenuSection from '../components/MenuSection';
import TopPackageSection from '../components/TopPackageSection';
import TopToursSection from '../components/TopToursSection';



const Discover = () => {
    const navigation = useNavigation();

    const [type, setType] = useState("restaurants")

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[])

  return (
    <SafeAreaView styles={styles.safeArea}>
      <ScrollView>
      <DiscoverHeader/>
      <SearchBar/>
      {/* Menu Container */}
     <MenuSection/>
     <TopPackageSection/>
     <TopToursSection/>
     </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  container1: {
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
})

export default Discover