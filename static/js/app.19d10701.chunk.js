(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return J}));var r=n(7),a=n.n(r),c=n(11),o=n.n(c),i=n(8),s=n.n(i),u=n(9),l=n.n(u),d=n(3),f=n.n(d),h=n(1),p=n.n(h),m=n(17),g=n.n(m),y=n(4),w=n(2),v=n(104),S=n(16),b=n(19),R=n(30),k=n(68);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var a=f()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l()(this,n)}}var E=function(e){s()(n,e);var t=x(n);function n(e){return a()(this,n),t.call(this,e)}return o()(n,[{key:"render",value:function(){return h.createElement(y.a,{style:C.container},h.createElement(S.a,{style:C.textStyle},this.props.title))}}]),n}(h.Component),C=w.a.create({textStyle:{fontSize:20,fontWeight:"bold",color:"white"},container:{shadowColor:"black",shadowOffset:{width:0,height:2},shadowOpacity:.5,shadowRadius:2,elevation:2,alignItems:"center",justifyContent:"center",height:60,backgroundColor:"black"}}),P=E,T=n(103);function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var a=f()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l()(this,n)}}var D,I=function(e){s()(n,e);var t=B(n);function n(e){return a()(this,n),t.call(this,e)}return o()(n,[{key:"render",value:function(){return p.a.createElement(y.a,{style:L(this.props).buttonSurrounding},p.a.createElement(T.a,{style:L(this.props).button,onPress:this.props.onPress()},p.a.createElement(S.a,{style:L(this.props).textStyle},this.props.title)))}}]),n}(h.Component),L=function(e){return w.a.create({button:{backgroundColor:e.color,justifyContent:"center",alignItems:"center",width:e.width,height:55,borderRadius:28},buttonSurrounding:{marginTop:e.marginTop,marginLeft:e.marginLeft},textStyle:{fontSize:20,color:"white",fontWeight:"bold"}})};function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var a=f()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l()(this,n)}}!function(e){e[e.clicked=0]="clicked",e[e.normal=1]="normal"}(D||(D={}));var z=function(e){s()(r,e);var t=j(r);function r(e,c){var o;return a()(this,r),(o=t.call(this,e,c)).askPermissionsAndStartScanning=function(){var e;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("web"!=R.a.OS){t.next=4;break}alert("The scanner doesn't work on web"),t.next=9;break;case 4:return t.next=6,g.a.awrap(k.a.requestPermissionsAsync());case 6:e=t.sent,console.log("Permission: "+JSON.stringify(e)),o.setState({scanButtonState:D.clicked,cameraPermissionGranted:e.granted,scanned:!1});case 9:case"end":return t.stop()}}),null,null,null,Promise)},o.renderResultScreen=function(){var e=b.a.get("window").width/5;return p.a.createElement(y.a,null,p.a.createElement(P,{title:"Barcode Scanner"}),p.a.createElement(y.a,{style:W.barcodeImageContainer},p.a.createElement(v.a,{source:n(214),style:W.barcodeImage})),p.a.createElement(I,{title:"Scan",onPress:function(){return o.askPermissionsAndStartScanning},color:"red",width:e,marginTop:20,marginLeft:b.a.get("window").width/2-e/2}),p.a.createElement(y.a,{style:W.scanResult},p.a.createElement(S.a,{style:W.scanResultcText},0==o.state.scannedText.length?"":"Scan result: "+o.state.scannedText)))},o.renderBarcodeScanner=function(){return console.log("In render barcode scanner with state: "+o.state.scanned),o.state.cameraPermissionGranted?(console.log("Camera permission granted: "+o.state.cameraPermissionGranted),p.a.createElement(y.a,null,p.a.createElement(k.a,{style:{width:b.a.get("window").width,height:b.a.get("window").height},onBarCodeScanned:o.state.scanned?function(){return console.log("Case: barcode shouldn't be scanned")}:o.handleBarCodeScanned}))):p.a.createElement(y.a,null,p.a.createElement(S.a,null,"No camera permission"))},o.handleBarCodeScanned=function(e){var t=e.type,n=e.data;console.log("In handle barcode scan"),alert("Bar code with type "+t+" and data "+n+" has been scanned!"),o.setState({scanned:!0,scanButtonState:D.normal,scannedText:n})},o.state={scanButtonState:D.normal,cameraPermissionGranted:!1,scanned:!1,scannedText:""},o}return o()(r,[{key:"render",value:function(){return p.a.createElement(y.a,null,this.state.scanButtonState==D.normal?this.renderResultScreen():this.renderBarcodeScanner())}}]),r}(p.a.Component),G=b.a.get("window").width/6,O=b.a.get("window").height/4,W=w.a.create({barcodeImageContainer:{paddingTop:b.a.get("window").height/10,paddingLeft:b.a.get("window").width/2-G/1.35},barcodeImage:{width:G,height:O,resizeMode:"stretch"},scanResult:{paddingTop:20,paddingLeft:20},scanResultcText:{fontSize:20}});function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var a=f()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return l()(this,n)}}var J=function(e){s()(n,e);var t=A(n);function n(){return a()(this,n),t.apply(this,arguments)}return o()(n,[{key:"render",value:function(){return p.a.createElement(z,null)}}]),n}(p.a.Component)},106:function(e,t,n){n(107),e.exports=n(215)},107:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/barcode-scanner/expo-service-worker.js",{scope:"/barcode-scanner/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},214:function(e,t,n){e.exports=n.p+"static/media/barcodeScanner.871c3c0d.jpg"}},[[106,1,2]]]);
//# sourceMappingURL=app.19d10701.chunk.js.map