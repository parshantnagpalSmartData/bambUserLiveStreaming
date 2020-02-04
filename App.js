/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RNBambuserBroadcaster from 'react-native-bambuser-broadcaster';
import RNBambuserPlayer from 'react-native-bambuser-player';
// console.log("RNBambuserPlayerRNBambuserPlayer",RNBambuserPlayer)


// console.log("RNBambuserBroadcasterRNBambuserBroadcaster",RNBambuserBroadcaster)


class App extends React.Component {
  componentDidMount(){
   
  }
  render(){
    return (
      <View style={{height: 1000,backgroundColor : "red"}}>
     
      <RNBambuserBroadcaster ref={ref => {this.myBroadcasterRef = ref; }} style={{height: 600,backgroundColor : "red"}} applicationId={"L5OLXCmxu3FrNOzLGpyb7w"} />
      <Button onPress={()=>{ this.myBroadcasterRef.startBroadcast();} } title={"Start"}/>
      <Button onPress={()=>{ this.myBroadcasterRef.stopBroadcast();
      this.myBroadcasterRef.endTalkback();
      } } title={"Stop"}/>
         <Button onPress={()=>{ this.myBroadcasterRef.stopBroadcast();
 this.RNBambuserPlayer.play();

      } } title={"play"}/>
      <RNBambuserPlayer  
      ref={ref => {this.RNBambuserPlayer = ref; }} 
      videoScaleMode={RNBambuserPlayer.VIDEO_SCALE_MODE.ASPECT_FILL}
     resourceUri={"https://cdn.bambuser.net/broadcasts/ffb8d766-9dca-44a2-b744-e022d771aefe?da_signature_method=HMAC-SHA256&da_id=9e1b1e83-657d-7c83-b8e7-0b782ac9543a&da_timestamp=1580801783&da_static=1&da_ttl=0&da_signature=55f582eef740ca5aa704f8a82d01498b2e31cffe1501741d44bfdcbb2ed34d5c"} 
      style={{height: 200,width: 500,backgroundColor : "red"}} applicationId={"L5OLXCmxu3FrNOzLGpyb7w"} 

      onReady={()=>{
        // alert("ready")
      }}
      onLoading={()=>{alert("loading")}}
      onPlaying={()=>{alert("32123132")}}
      onStopped={()=>{alert("32123132")}}
      onPlaybackError={()=>{alert("errrorororo")}}
      />
        {/* <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <View style={{height : 100, backgroundColor : "red"}}>
  <RNBambuserBroadcaster applicationId={"L5OLXCmxu3FrNOzLGpyb7w"} />
  </View> */}
          {/* <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
  
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView> */}
        {/* </SafeAreaView> */}
        </View>
    );
  }
 
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;