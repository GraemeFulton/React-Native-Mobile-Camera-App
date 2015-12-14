var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;
var AppConfig = require('../config.ios');
var Camera = require('react-native-camera');
var Dimensions=require('Dimensions')
var { width, height } = Dimensions.get('window');

var cameraApp = React.createClass({

  getInitialState() {

    return {
      cameraType: Camera.constants.Type.back,
      flash:1
    }
  },
  render() {
    var styles = StyleSheet.create({
      flash:{
      flex: 1,
       left: 0,
       top: 0,
       opacity: this.state.flash,
       backgroundColor: 'black',
       width: width
      },
      cameraView: {
        left:0,
        top:0,
        textAlign:'right',
        alignItems:'flex-end',
        position:'relative',
        backgroundColor: 'transparent',
        height:height-height/3.48
      },
      cameraContainer:{
        alignItems:'center',
        height:height-height/6,
        backgroundColor:AppConfig.subtleGreyBorder
      },
      recordButton: {
        margin: 10,
        tintColor:AppConfig.primaryColor,
        borderColor:AppConfig.primaryColor,
        borderWidth:2,
        borderRadius:30
      },
      switcheroo: {
        tintColor:'#fff'
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
      },
      cameraButton:{
      }
    });

    return (
      <View style={styles.cameraContainer}>
        <View style={styles.flash}>
        <Camera
          ref="cam"
          style={styles.cameraView}
          onBarCodeRead={this._onBarCodeRead}
          type={this.state.cameraType}
          >
          <TouchableHighlight onPress={this._switchCamera}>
            <Image
              style={styles.switcheroo}
              source={require('../../images/icons/ios7-loop-strong.png')}
            />
          </TouchableHighlight>
        </Camera>
    </View>

          <View style={styles.cameraButton}>
            <TouchableHighlight onPress={this._takePicture}>
              <View>
                <Image
                  style={styles.recordButton}
                  source={require('../../images/icons/record.png')}
                />
            </View>
            </TouchableHighlight>
          </View>
    </View>
    );
  },
  _onBarCodeRead(e) {
    console.log(e);
  },
  _switchCamera() {
    var state = this.state;
    state.cameraType = state.cameraType === Camera.constants.Type.back
      ? Camera.constants.Type.front : Camera.constants.Type.back;
    this.setState(state);
  },
  _takePicture() {
    this.refs.cam.capture(function(err, data) {
      console.log(err, data);
    });
    this.setState({flash: 0.5})

    setTimeout(function(){
      this.setState({flash: 1})
    }.bind(this), 400)
  }
});




module.exports =   cameraApp;
