import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, Button, ScrollView, Modal, TouchableOpacity} from 'react-native';
import Header from './Headers.js';
import SearchButtons from './SearchButtons.js';
import ImageGallery from './ImageGallery.js';

//Image Imports
import CarCapa from '../assets/images/capa-carro.jpg';
import Car1 from '../assets/images/car1.jpg';
import Car2 from '../assets/images/car2.jpg';
import Car3 from '../assets/images/car3.jpg';
import Car4 from '../assets/images/car4.jpg';

export default function HomeScreen({navigation}){
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Car Show" image={CarCapa}/>
      <SearchButtons title="Busca"/>
      <ImageGallery
        images={[Car1, Car2, Car3, Car4]}
        openModal={openModal}/>
      <Button title="Ver tabela de Carros" onPress={() => navigation.navigate('CarTable')}/>
      <Modal visible={modalVisible} transparent={true} animationType='slide'>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Image style={styles.modalImage} source={selectedImage}/>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0,5)',
  },
  closeButton:{
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
  closeButtonText:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalImage:{
    width: 300,
    height: 300,
  },
});















