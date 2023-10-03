import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        })
    },[])
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First section */}
      <View className="flex-row px-6 mt-8 items-center space-x-4">
            <View className='w-20 h-20 bg-orange-400 rounded-full items-center justify-center'>
                <Text className='text-[#00BCC9] text-sm font-semibold'>GuideMe</Text>
            </View>
            <Text className='text-[#2A2B4B] text-2xl font-semibold'>Your Trusted Travel Companion</Text>
      </View>
      {/* Second Section */}
      <View className='px-6 mt-8 space-y-4'>
        <Text className='text-[#3C6072] text-[40px]'>Enjoy the trip with</Text>
        <Text className='text-[#00BCC9] text-[32px] font-bold'>GOOD MOMENTS</Text>

        <Text className='text-[#3C6072] text-base'>
            lorem ipsum dolor sit amet consectetur adipiscing elit. Deleniti odio
            quis nostrum
        </Text>
      </View>
      {/* Circle section */}
      <View className="w-[300px] h-[300px] bg-[#00BCC9] rounded-full absolute bottom-12 -right-12">

      </View>
      <View className="w-[300px] h-[300px] bg-[#E99265] rounded-full absolute -bottom-28 -left-24">

      </View>
      {/* Image section */}
      <View className="flex-1 relative items-center justify-center">
            <Animatable.Image 
                animation="fadeIn"
                easing="ease-in-out"
                source= {HeroImage}
                className='w-full h-full object-cover mt-20'
            />
            
            <TouchableOpacity 
            onPress={() =>navigation.navigate("Discover")}
            className='absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center '>
        
        <Animatable.View
         animation="pulse"
         easing="ease-in-out"
         iterationCount={"infinite"}
         className='w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]'>
            <Text className='text-gray-50 text-[36px] font-semibold'>GO</Text>
        </Animatable.View>
        
      </TouchableOpacity>
      
      </View>
      
    </SafeAreaView>
  )
}

export default HomeScreen