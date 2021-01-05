// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View , StyleSheet, Image} from 'react-native';

 
const App = () => {
return <View style={style.container  }> 
  <Text style={ style.text } > holis</Text>
  <Image
  source={{uri:"https://picsum.photos/200/200"} } 
  style={style.image} />
</View>

};

export default App;

const style = StyleSheet.create({
container :{ flex: 1 , justifyContent: "center" ,alignItems:"center" ,backgroundColor : `#00ffff`},
text : {  fontSize:30 },
image:{height:200 ,width:200}

})