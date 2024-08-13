import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const Header = ({title, image}) => {
  return(
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      <Image
        style={styles.image}
        source={image}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  header:{
    alignItems: 'center',
  },
  text:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image:{
    width: 500,
    height: 200,
  },
});

export default Header;