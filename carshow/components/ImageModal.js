import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const ImageModal = ({visible, image, closeModal}) => {
  return (
    <Modal 
      animationType = "slide"
      transparent = {false}
      visible = {visible}
      onRequestClose = {closeModal}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress = {closeModal}>
          <Text style={styles.closeButtonText}> Fechar </Text>
        </TouchableOpacity>
        <Image
          style={styles.modalImage}
          source={image}
          resizeMode="contain"
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  modalImage:{
    width: '80%',
    height: '80%',
  },
  closeButton:{
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  closeButtonText:{
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ImageModal;