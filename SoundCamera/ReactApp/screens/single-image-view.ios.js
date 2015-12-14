/**
 * Coming Soon
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise Component
  =============================== */
  // React
  var React = require('react-native');
  var Dimensions=require('Dimensions')

  // App Globals
  var AppStyles = require('../styles.ios');
  var AppConfig = require('../config.ios');
  var Dimensions=require('Dimensions')
  var { width, height } = Dimensions.get('window');

  /* Screens / Pages */
  // var AnotherPage = require('./tabbar.ios');

  var {
    StyleSheet,
    View,
    Text,
    Image,
    Component
  } = React;

/* ==============================
  View
  =============================== */
  var SingleImageView = React.createClass({


    /**
      * RENDER
      */
    render() {
      return (
        <View style={[AppStyles.container, AppStyles.containerCentered]}>
          <Image style={[AppStyles.container]} source={{uri: this.props.route.image}}/>
        </View>
      );
    }

  });

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
  });

  /* ==============================
    Done!
    =============================== */
    module.exports = SingleImageView;
    module.exports.details = {
      title: 'SingleImageView'
    };
