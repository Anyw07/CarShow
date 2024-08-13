# Projeto simples de React - Descrição
- **Arquivos:**
  - App.js,
  - Navigation,
  - SearchButtons;
  - Headers,
  - HomeScreen,
  - ImageGallery,
  - ImageModal,
  - CarTable,
  - CarTableScreen;

**Meio usado:**
[Expo.dev - Snack](https://expo.dev/)




## Estrutura do Projeto

**Seguinte Estrutura - `App.js`**:

- **`App.js`**: Arquivo principal da aplicação React. Ele importa o React e o componente `Navigation` usando um diretório local.
  
  ```javascript
  import React from "react";
  import Navigation from './components/Navigation';
  
  export default function App() {
    return <Navigation/>
  }

- `components/Navigation.js`: Esse arquivo guarda o componente `Navigation`, que é importado e renderizado dentro do componente `App`. O arquivo não foi fornecido, mas sua função é agir como uma barra de navegação, que será mostrado na interface do usuário.


#


**Seguinte Estrutura - `Navigation.js`**:

- **`Navigation.js`**: Arquivo principal de navegação do aplicativo. Ele configura um navegador de pilha (`stack navigator`) que permite a navegação entre diferentes telas.

  ```javascript
  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';

  // Importar Tela
  import HomeScreen from './HomeScreen';
  import CarTableScreen from './CarTableScreen';

  const Stack = createStackNavigator();

  const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{title: 'CAR Show'}}/>
          <Stack.Screen name="CarTable" component={CarTableScreen} options={{title: 'Tabela de Carros'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default Navigation;
  

- `HomeScreen.js`: Este arquivo contém o componente da tela inicial `(HomeScreen)`. Ele é configurado como a tela inicial da aplicação.

- `CarTableScreen.js`: Este arquivo contém o componente da tela de tabela de carros `(CarTableScreen)`. Se acessa a partir da tela inicial.


#


**Seguinte Estrutura - `SearchButtons.js`**:

- **`SearchButtons.js`**: Arquivo principal que contém o componente `SearchButtons`. Ele usa os componentes `View`, `Button`, `StyleSheet`, e o módulo `Linking` do >React Native< para criar e estilizar os botões de busca.

  ```javascript
  import React from 'react';
  import {View, Button, StyleSheet} from 'react-native';
  import {Linking} from 'react-native';

  const SearchButtons = () => {
    return (
      <View>
        <View style={styles.buttonContainer}>
          <Button
            title='Busca no Google'
            onPress={() => Linking.openURL("http://www.google.com")}
          />
          <View style={styles.separator}/>
          <Button
            title="Busca no Bing"
            onPress={() => Linking.openURL("https://www.bing.com")}
          />
          <View style={styles.separator}/>
          <Button
            title="Busca no Yahoo"
            onPress={() => Linking.openURL("https://www.yahoo.com")}
          />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginVertical: 20,
    },
    separator: {
      marginVertical: 10,
    },
  });

  export default SearchButtons;


#


**Seguinte Estrutura - `Headers.js`**:

- **`Header.js`**: Este arquivo contém o componente `Header`. Ele utiliza os componentes `Text`, `View`, `Image` e `StyleSheet` do React Native para renderizar o título e a imagem já com estilização.

  ```javascript
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
    header: {
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    image: {
      width: 500,
      height: 200,
    },
  });

  export default Header;


#


**Seguinte Estrutura - `HomeScreen.js`**:

- **`HomeScreen.js`**: Arquivo principal que define a tela inicial do aplicativo. Ele utiliza diversos componentes internos e externos para criar uma interface interativa.

  ```javascript
  import React, {useState} from 'react';
  import {Text, View, StyleSheet, Image, Button, ScrollView, Modal, TouchableOpacity} from 'react-native';
  import Header from './Headers.js';
  import SearchButtons from './SearchButtons.js';
  import ImageGallery from './ImageGallery.js';

  // Importações de Imagens
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
      backgroundColor: 'rgba(0,0,0,0.5)',
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


#


**Seguinte Estrutura - `ImageGallery.js`**:

- **`ImageGallery.js`**: Este arquivo define o componente `ImageGallery`, responsável por exibir uma galeria de imagens. Ele utiliza os componentes `View`, `Text`, `TouchableOpacity`, `Image`, e `StyleSheet` do React Native.

  ```javascript
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

  
#


**Seguinte Estrutura - `ImageModal.js`**:

- **`ImageModal.js`**: Define o componente `ImageModal`, responsável por exibir um modal contendo uma imagem e um botão para fechá-lo.

  ```javascript
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


# 


**Seguinte Estrutura - `CarTable.js`**:

- **`CarTable.js`**: Define o componente `CarTable`, responsável por renderizar a tabela de carros esportivos.

  ```javascript
  import React from 'react';
  import {View, Text, StyleSheet} from 'react-native';

  const CarTable = () => {
    return(
      <View style={styles.container}>
        <Text style={[styles.galleryTitle, styles.centerText]}>
          Tabela de Carros Esportivos
        </Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Tipo</Text>
            <Text style={styles.tableHeader}>Cor</Text>
            <Text style={styles.tableHeader}>Ano</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Porsche 911</Text>
            <Text style={styles.tableCell}>Vermelho</Text>
            <Text style={styles.tableCell}>2022</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Ferrari</Text>
            <Text style={styles.tableCell}>Amarelo</Text>
            <Text style={styles.tableCell}>2021</Text>
            </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Lamborghini Huracan</Text>
            <Text style={styles.tableCell}>Verde</Text>
            <Text style={styles.tableCell}>2023</Text>
          </View>
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
      textAlign: 'center',
    },
    table:{
      width: '90%',
      borderWidth: 1,
      borderColor: '#000',
      marginBottom:20,
    },
    container:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 20,
    },
    tableRow:{
      flexDirection: 'row',
    },
    tableHeader:{
      flex: 1,
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderWidth: 1,
      borderColor: "#000",
      textAlign: 'center',
      fontWeight: 'bold',
    },
    tableCell:{
      flex: 1,
      padding: 10,
      borderWidth: 1,
      borderColor: '#000',
      textAlign: 'center',
    },
  });

  
# 


Seguinte Estrutura - **`CarTableScreen.js`**:

- **`CarTableScreen.js`**: Arquivo principal que define o componente `CarTableScreen`, que consiste em dois elementos principais:
1. **`CarTable`**: Componente que exibe a tabela de carros esportivos.
2. **`Button`**: Um botão que permite ao usuário retornar à tela anterior.

```javascript
import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import CarTable from './CarTable';

export default function CarTableScreen({navigation}){
  return(
    <View style={styles.container}>
      <CarTable/>
      <Button title="Voltar" onPress={() => navigation.goBack()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
```



## Funcionalidades
**Importação de Dependências:**
- `React`: Biblioteca principal para construir interfaces de usuário.
- `Navigation`: Componente personalizado que contém a navegação da aplicação.
- `@react-navigation/native` e `@react-navigation/stack`: Bibliotecas em função de configurar a navegação dentro da aplicação.
- `View, Button, StyleSheet`: Componentes e API's do React Native para criar layouts, botões e aplicar estilos.
- `Linking`: Módulo do React Native usado para abrir URLs no navegador padrão do dispositivo.

**Propriedades (props):**
- `visible`: Um `booleano` que controla a visibilidade do modal. Quando `true`, o modal é exibido; quando `false`, ele é ocultado.
- `closeModal`: Função chamada para fechar o modal. Geralmente, essa função altera o estado que controla a visibilidade do modal.


**Componentes:**
- **`App`**:
    - É uma função que retorna o componente `Navigation`. Significa que, quando a aplicação é renderizada, o que será mostrado na tela é o conteúdo do componente `Navigation`.
       
- **`Navigation`**:
    - O componente `Navigation` é responsável por configurar o navegador de pilha (`Stack Navigator`), que gerencia as inumeras telas do aplicativo.
    - A navegação é incluído dentro de um `NavigationContainer`, que gerencia o estado do navegador.
    
- **`CarTableScreen`**:
    - Este componente é uma função que retorna um `View` contendo o componente `CarTable` e um `Button`.

- **`Navigation`**:
    - O componente `Navigation` é responsável por configurar o navegador de pilha (`Stack Navigator`), que gerencia as inumeras telas do aplicativo.
    - A navegação é incluído dentro de um `NavigationContainer`, que gerencia o estado do navegador.

- **`Header`**:
  - Este componente recebe duas propriedades (`props`):
    - `title`: O texto que será exibido como título.
    - `image`: A fonte da imagem a ser exibida.
  - O componente organiza o título (`Text`) e a imagem (`Image`) dentro de uma View centralizada usando estilos definidos no `StyleSheet`.
 
- **`SearchButtons`**:
  - Este componente renderiza três botões, cada um responsável por abrir uma URL específica em um navegador:
    - Google: `http://www.google.com`
    - Bing: `https://www.bing.com`
    - Yahoo: `https://www.yahoo.com`
  - Os botões são posicionados verticalmente com espaçamento entre eles, utilizando as propriedades do StyleSheet.
 
- **`ImageGallery`**:
  - `images`: Propriedade (`prop`) que recebe uma lista de imagens para serem exibidas na galeria.
  - `openModal`: Função passada como propriedade que é chamada ao tocar em uma imagem, permitindo que ela seja aberta em um `modal`.
  - `Mapeamento das Imagens`: As imagens são mapeadas e renderizadas dentro de `TouchableOpacity`, que envolve cada `Image`. Isso permite que o usuário toque na imagem para abrir o `modal`.



**Configuração das Telas:**
- `HomeScreen`: Tela inicial (`initialRouteName="Home"`).
- `CarTableScreen`: Segunda tela, acessível a partir da `HomeScreen`.
- Cada tela possui um nome (`name`) e um componente associado (`component`), além de uma opção (`options`) para definir o título exibido na barra de navegação.

**Estado e Funções:**
- `useState`: Utilizado para gerenciar o estado do modal (`modalVisible`) e da imagem selecionada (`selectedImage`).
- `openModal(image)`: Abre o modal e define a imagem selecionada.
- `closeModal()`: Fecha o modal e redefine a imagem selecionada.

**Layout e Estilização:**
- `buttonContainer`: Define um layout em coluna e ajusta o espaçamento vertical dos botões.
- `separator`: Adiciona um espaçamento vertical entre os botões.
- `header`: Centraliza todos os elementos dentro da View.
- `text`: Define o tamanho da fonte e o espaçamento inferior do título.
- `image`: Define as dimensões da imagem exibida no cabeçalho.
- `ScrollView`: Envolve o conteúdo completo permitindo a rolagem.
- `Modal`: Exibe uma imagem em tela cheia com um botão de fechar (`TouchableOpacity`).
- `StyleSheet`: Define estilos personalizados para os componentes, como alinhamento, margens e dimensões de imagens.
- `gallery`: Define o layout da galeria com uma direção de linha, permitindo a quebra de linha (`flexWrap`) e centralizando o conteúdo.
- **Container**:
  - `flex: 1`: Faz o contêiner ocupar todo o espaço disponível na tela.
  - `justifyContent: 'center'`: Centraliza o conteúdo verticalmente.
  - `alignItems: 'center'`: Centraliza o conteúdo horizontalmente.
  - `padding: 20`: Adiciona um espaçamento interno de 20 unidades ao redor do conteúdo.
 
**Botão de Navegação:**
- O botão é rotulado como "Voltar" e, ao ser pressionado, chama a função `navigation.goBack()` para retornar à tela anterior.

**Estrutura da Tabela:**
- `<View style={styles.container}>`: Container principal que centraliza a tabela na tela.
- `<Text style={[styles.galleryTitle, styles.centerText]}>`: Exibe o título da tabela "Tabela de Carros Esportivos" e deixa centralizado.
- **Tabela**:
  - `<View style={styles.table}>`: Contêiner da tabela com bordas e margens definidas.
  - `<View style={styles.tableRow}>`: Define uma linha na tabela, que pode conter cabeçalhos ou células de dados.
  - `<Text style={styles.tableHeader}>`: Estilo para as células de cabeçalho.
  - `<Text style={styles.tableCell}>`: Estilo para as células de dados, com bordas e texto centralizado.
