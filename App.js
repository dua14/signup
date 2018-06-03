import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,InputText,Button,TextInput,ActivityIndicator,Image} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
<View
style={{
width :300,
height : 500,
    backgroundColor: 'white',
        alignItems: 'center',
    justifyContent: 'center',
}}
>
<Button

   title="Sign up"
  color="orange"/>
   <Image
          style={{
             flexGrow:1,
    height:100,
    width:100,
          }}
              source={{uri: 'http://www.yumpabar.co.uk/images/srv/page-myaccount-associated-pages/My%20Account/icon-user.png'}}  />


<TextInput
    style =
    {styles.txtf}
placeholder ="user name"
>
</TextInput>


<TextInput
   style =
     {styles.txtf}
placeholder ="E-Mail"
>
</TextInput>
<TextInput
   style =
     {styles.txtf}
placeholder ="Password"
>
</TextInput><TextInput
   style =
 {styles.txtf}
placeholder ="Retype Password"
>
</TextInput>

<TouchableOpacity

 style={{
   backgroundColor:'orange',
width :200,
height : 50,
  alignItems: 'center',
    justifyContent: 'center',
 }}

>
<Text
style = {{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',}}
>
Register now
</Text>
</TouchableOpacity>
</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  txtf :{
     height : 30,
      width : 200,
      margin : 20,
      backgroundColor : 'gray'
    
  },

});
