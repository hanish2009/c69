import React from "react";
import{Text,View,TouchableOpacity,StyleSheet, PermissionsAndroid,} from 'react-native'
import * as Permissions from 'expo-Permissions' 
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends React.Component{
    constructor(){
        super()
        this.state = {
        hasCameraPermissions:null,
        scanned:false,
        scannedData:'',
        buttonState:'normal',
        }
    }

  getCameraPermissions = async()=>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA)
      this.setState({
          hasCameraPermissions:status==="granted"
      })
  }
handleBarCodeScanned = async({type,date})=>{


this.setState = ({
    scanned:true,
    scannedData:data,
    buttonState:normal,
})



}
    render(){


        const hasCameraPermissions = this.state.hasCameraPermissions
        const scanned = this.state.scanned
        const buttonState = this.state.buttonState

        if(buttonState === "clicked" &&  hasCameraPermissions){
            return(
                <BarCodeScanner 
                onBarCodeScanned = {scanned? undefined:this.handleBarCodeScanned
                
                }

            style = {StyleSheet.absoluteFillobject}

                />
            )
        }
        else if(buttonState==="normal"){


        

        return(
            <View style = {styles.container}>


            <Text style = {styles.displayText}> {
                hasCameraPermissions===true?this.state.scannedData:"requestCameraPermissions"
            } </Text>

            <TouchableOpacity onPress = {this.getCameraPermissions} >

            <Text style = {styles.scanButton} >Scan Qr Code</Text>
            </TouchableOpacity>
            </View>
        )
        
    }
}

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize:40,
      marginTop:100,
      marginLeft:150,
      marginRight:150,
      
      
    },
    displayText:{
        borderRadius:50,
        fontSize:30,
    textDecorationLine:'underline',
    width:200,
    height:200


    },

    scanButton:{
    backgroundColor:"grey",
    padding:10,
    margin:10,



}

  });
 


  