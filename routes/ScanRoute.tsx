import React, { Component } from "react";
import { View, StyleSheet, Image, Text, Button, Dimensions, Platform } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import AppBar from "../components/AppBar";
import CustomButton from "../components/CustomButton";

enum ScanButtonState { "clicked", "normal" }

export interface Props { }

export interface State {
   scanButtonState: ScanButtonState,
   cameraPermissionGranted: boolean,
   scanned: boolean,
   scannedText: string
}

export default class ScanRoute extends React.Component<Props, State> {

   constructor(props: Props, state: State) {
      super(props, state);

      this.state = {
         scanButtonState: ScanButtonState.normal,
         cameraPermissionGranted: false,
         scanned: false,
         scannedText: ""
      }
   }

   askPermissionsAndStartScanning = async () => {
      if(Platform.OS == "web") {
         alert("The scanner doesn't work on web")
      } else {
         let permission: any = await BarCodeScanner.requestPermissionsAsync();
         console.log(`Permission: ${JSON.stringify(permission)}`);
   
         this.setState({
            scanButtonState: ScanButtonState.clicked,
            cameraPermissionGranted: permission.granted,
            scanned: false
         });
      }
   }

   renderResultScreen = (): JSX.Element => {
      let scanButtonWidth: number = Dimensions.get("window").width / 5;

      return (
         <View>
            <AppBar title="Barcode Scanner" />
            <View style={styles.barcodeImageContainer}>
               {/* <Image
                  source={{
                     uri: "../assets/barcodeScanner.jpg"
                  }}
                  style={styles.barcodeImage}
               /> */}
            </View>
            <CustomButton
               title="Scan"
               onPress={() => this.askPermissionsAndStartScanning}
               color="red"
               width={scanButtonWidth}
               marginTop={20}
               marginLeft={(Dimensions.get("window").width / 2) - (scanButtonWidth / 2)}
            />
            <View style={styles.scanResult}>
               <Text style={styles.scanResultcText}>{this.state.scannedText.length == 0 ? ``:`Scan result: ${this.state.scannedText}`}</Text>
            </View>
         </View>
      );
   }

   renderBarcodeScanner = () => {
      console.log(`In render barcode scanner with state: ${this.state.scanned}`);
      if (this.state.cameraPermissionGranted) {
         console.log(`Camera permission granted: ${this.state.cameraPermissionGranted}`)
         return (
            <View>
               <BarCodeScanner 
                  style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
                  onBarCodeScanned={this.state.scanned ? () => console.log(`Case: barcode shouldn't be scanned`):this.handleBarCodeScanned}
               />
            </View>
         )
      } else {
         return (
            <View>
               <Text>No camera permission</Text>
            </View>
         )
      }
   }

   handleBarCodeScanned = ({ type, data }: { type: any, data: any }) => {
      console.log(`In handle barcode scan`);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      this.setState({
         scanned: true,
         scanButtonState: ScanButtonState.normal,
         scannedText: data
      })
   }

   render() {

      return (
         <View>
            {this.state.scanButtonState == ScanButtonState.normal ? this.renderResultScreen() : this.renderBarcodeScanner()}
         </View>
      );
   }
}

let barcodeImageWidth: number = Dimensions.get("window").width / 6;
let barcodeImageHeight: number = Dimensions.get("window").height / 4;

const styles = StyleSheet.create({
   barcodeImageContainer: {
      paddingTop: Dimensions.get("window").height/10,
      paddingLeft: Dimensions.get("window").width / 2 - (barcodeImageWidth / 1.35)
   },
   barcodeImage: {
      width: barcodeImageWidth,
      height: barcodeImageHeight,
      resizeMode: 'stretch'
   },
   scanResult: {
      paddingTop: 20,
      paddingLeft: 20,
   },
   scanResultcText: {
      fontSize: 20
   }
})