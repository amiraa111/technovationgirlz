import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function TestImage() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/instagram.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});
