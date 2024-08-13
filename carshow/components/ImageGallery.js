import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const ImageGallery = ({images, openModal}) => {
  return(
    <View>
      <Text style={[styles.galleryTitle, styles.centerText]}>Galeria de Imagens</Text>
      <View style={styles.gallery}>
        {images.map((image,index) => (
          <TouchableOpacity key={index} onPress={() => openModal(image)}>
            <Image style={styles.galleryImage} source={image}/>
          </TouchableOpacity>
        ))}      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  galleryTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  centerText:{
    fontSize: 18,
    textAlign: 'center',
  },
  gallery:{
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  galleryImage:{
    width: 150,
    height: 150,
    margin: 5,
  },
});

export default ImageGallery;