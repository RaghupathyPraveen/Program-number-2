import React from 'react'
import {View,Text,TouchableHighlight,TextInput} from 'react-native'

export default function Button ({navigation}) {
  return(
    <View style={{flex:1,marginTop:30,marginHorizontal:20,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:20,fontFamily:'cursive'}}>Login</Text>
      <TextInput style={{marginTop:20,padding:10,borderWidth:1,}} placeholder="Enter your emailid" />
          <TextInput style={{marginTop:20,padding:10,borderWidth:1,}} placeholder="Enter your password" />
      <TouchableHighlight underlayColor="#DDDDDD" onPress={() => navigation.navigate('product')}  style={{alignItems:'center',borderRadius:20,padding:10,marginTop:30,borderWidth:1,width:100,backgroundColor:'yellow'}}>
        <Text style={{fontFamily:'cursive'}}>Submit</Text>
      </TouchableHighlight>
    </View>
  )
}