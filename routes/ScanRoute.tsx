import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import AppBar from "../components/AppBar";
import CustomButton from "../components/CustomButton";

enum ScanButtonState { "clicked", "normal" }

export interface Props { }

export interface State {
   scanButtonState: ScanButtonState,
   cameraPermissionGranted: boolean
}

export default class ScanRoute extends React.Component<Props, State> {

   constructor(props: Props, state: State) {
      super(props, state);

      this.state = {
         scanButtonState: ScanButtonState.normal,
         cameraPermissionGranted: false
      }
   }

   askPermissionsAndStartScanning = () => {
      this.setState({
         scanButtonState: ScanButtonState.clicked
      })
   }

   renderResultScreen = () => {
      let scanButtonWidth: number = window.outerWidth / 5;

      return (
         <View>
            <AppBar title="Barcode Scanner" />
            <View style={styles.barcodeImageContainer}>
               <Image
                  source={{
                     uri: require('../assets/barcodeScanner.jpg')
                  }}
                  style={styles.barcodeImage}
               />
            </View>
            <CustomButton
               title="Scan"
               onPress={() => this.askPermissionsAndStartScanning}
               color="red"
               width={scanButtonWidth}
               marginTop={20}
               marginLeft={(window.outerWidth / 2) - (scanButtonWidth / 2)}
            />
         </View>
      );
   }

   renderBarcodeScanner = () => {
      return (
         <View>
         </View>
      )
   }

   render() {

      return (
         <View>
            {this.state.scanButtonState == ScanButtonState.normal ? this.renderResultScreen() : this.renderBarcodeScanner()}
         </View>
      );
   }
}

let barcodeImageWidth: number = window.outerWidth / 6;
let barcodeImageHeight: number = window.outerHeight / 4;

const styles: any = StyleSheet.create({
   barcodeImageContainer: {
      paddingTop: window.outerHeight / 10,
      paddingLeft: (window.outerWidth / 2) - (barcodeImageWidth / 1.35)
   },
   barcodeImage: {
      width: barcodeImageWidth,
      height: barcodeImageHeight,
      resizeMode: 'stretch'
   }
})