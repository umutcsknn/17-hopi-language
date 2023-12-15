import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  const { brand } = route.params;

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker
          coordinate={{
            latitude: parseFloat(brand.latitude), // Use brand's latitude
            longitude: parseFloat(brand.longitude), // Use brand's longitude
          }}
          title={brand.brandName} // Marker title
          description={brand.placeName} // Marker description
        />
      </MapView>

      <View style={styles.brandInfo}>
        <Text>Marka: {brand.brandName}</Text>
        <Text>Adres: {brand.address}</Text>
        <Text>Telefon: {brand.phone}</Text>
        <Text>Çalışma Saatleri: {brand.wHours}</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  brandInfo: {
    padding: 16,
    backgroundColor: '#22BCF3',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    color: 'white',
  },
});

export default MapScreen;
