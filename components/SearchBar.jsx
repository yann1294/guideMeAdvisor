
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        GooglePlacesDetails={{fields: "geometry"}}
        placeholder='Search'
        fetchDetails={true}
        onPress={(data, details = null) => {
          console.log(details?.geometry?.viewport);
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 16,
  },
});

export default SearchBar;
