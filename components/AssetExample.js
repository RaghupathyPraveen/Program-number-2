import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableHighlight } from 'react-native';

export default function AssetExample({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
        <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigation.navigate('home')}  style={{alignItems:'center',borderRadius:20,padding:10,marginTop:30,borderWidth:1,width:200,backgroundColor:'yellow'}}>
        <Text style={{fontFamily:'cursive',alignItems:'center',}}>Lets go back</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
