
import { View, Text, ScrollView, StyleSheet } from 'react-native'; 
import React from 'react';  
import MenuContainer from './MenuContainer'; 
import { Attractions, Hotels, Restaurants } from '../assets';    

const MenuSection = ({ type, setType }) => {   
  return (     
    <View style={styles.menuContainer}>       
      <ScrollView horizontal={true} scrollEventThrottle={16}>         
        <MenuContainer             
          key={"packages"}             
          title="Package"             
          imageSrc={Attractions}             
          type={type}             
          setType={setType}           
          style={styles.menuItem} // Add this line
        />         
        {/* ...rest of your MenuContainer components */}         
        <MenuContainer             
          key={"tours"}             
          title="Tours"             
          imageSrc={Restaurants}             
          type={type}             
          setType={setType}           
          style={styles.menuItem} // Add this line
        />
        <MenuContainer             
          key={"policy"}             
          title="Policies"             
          imageSrc={Hotels}             
          type={type}             
          setType={setType}           
          style={styles.menuItem} // Add this line
        />       
      </ScrollView>     
    </View>   
  ); 
};  

const styles = StyleSheet.create({   
  menuContainer: {     
    flexDirection: 'row',     
    alignItems: 'center',     
    paddingHorizontal: 20,     
    marginTop: 32, 
      
  },
  menuItem: { // Add this style
    marginHorizontal: 10,
  },  
});  

export default MenuSection;