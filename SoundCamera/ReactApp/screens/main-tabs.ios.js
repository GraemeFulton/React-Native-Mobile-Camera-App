/**
 * Tabbar
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

  // App Globals
  var AppStyles = require('../styles.ios');
  var AppConfig = require('../config.ios');

  // Screens / Pages
  var ComingSoon = require('./soon.ios');
  var Camera = require('./camera.ios');

  var {
    StyleSheet,
    TabBarIOS,
    Component,
  } = React;

var TabBarItemIOS = TabBarIOS.Item;

/* ==============================
  View
  =============================== */
  class Tabbar extends Component {

    /**
      * Setup Default State Values
      */
    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'favourites'
      }
    }
    /**
      * RENDER
      */
    render() {
      return (
        <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarItemIOS
            selected={this.state.selectedTab === 'camera'}
            title="Camera"
            icon={require('../../images/icons/ios7-camera-outline.png')}
            onPress={() => {
              this.setState({
                selectedTab: 'camera',
              });
            }}>
            <Camera></Camera>
          </TabBarItemIOS>

          <TabBarItemIOS
            selected={this.state.selectedTab === 'stream'}
            title="Stream"
            icon={require('../../images/icons/ios7-albums-outline.png')}
            onPress={() => {
              this.setState({
                selectedTab: 'stream',
              });
            }}>
            <ComingSoon navigator={this.props.navigator} placeholder={"This could be a screen listing contacts..."} />
          </TabBarItemIOS>

          <TabBarItemIOS
            selected={this.state.selectedTab === 'more'}
            title="More"
            icon={require('../../images/icons/ios7-more-outline.png')}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}>
            <ComingSoon navigator={this.props.navigator} placeholder={"This could be a settings screen..."} />
          </TabBarItemIOS>

        </TabBarIOS>
      )
    }
  }

/* ==============================
  Styles
  =============================== */
  var styles = StyleSheet.create({
  });

/* ==============================
  Done!
  =============================== */
  module.exports = Tabbar;
