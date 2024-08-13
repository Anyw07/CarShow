import Reacy from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {Linking} from 'react-native';

const SearchButtons = () => {
  return (
    <View>
      <View style = {styles.buttonContainer}>
        <Button
          title='Busca no Google'
          onPress={()=>Linking.openURL("http://www.google.com")}
          />
        <View style = {styles.separator}/>
        <Button
          title="Busca no Bing"
          onPress={()=>Linking.openURL("https://www.bing.com")}
          />
        <View style = {styles.separator}/>
        <Button
          title="Busca no Yahoo"
          onPress={()=>Linking.openURL("https://www.yahoo.com")}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer:{
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  separator:{
    marginVertical: 10,
  },
});

export default SearchButtons;