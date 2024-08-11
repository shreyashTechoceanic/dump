/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');

interface ClipPreviewPropType {
  videoSrc: string;
  backarrowfunction: () => void;
  savebtnfunction: () => void;
  donebtnfunction: () => void;
}

const ClipsPreview = ({
  videoSrc,
  backarrowfunction,
  savebtnfunction,
  donebtnfunction,
}: ClipPreviewPropType) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 15000,
        useNativeDriver: false,
      }),
    ).start();
  }, [progressAnim]);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['1%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Video
        source={{uri: videoSrc}}
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat
        muted
        onError={e => console.log('Video Error:', e)}
        onBuffer={e => console.log('Buffering:', e)}
        onLoadStart={() => console.log('Load Start')}
        onLoad={() => console.log('Loaded')}
      />
      <View style={styles.overlay}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width - 50,
          }}>
          <TouchableOpacity onPress={backarrowfunction}>
            <Image
              style={styles.arrowImg}
              source={require('../assets/backarrow.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={savebtnfunction}>
            <View style={styles.savebtn}>
              <Image source={require('../assets/download.png')} />
              <Text style={styles.savetext}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.overlaytwo}>
        <View style={styles.timelineBar}>
          <Animated.View
            style={[styles.timelineProgress, {width: progressWidth}]}
          />
        </View>
      </View>
      <View style={styles.overlaythree}>
        <TouchableOpacity style={styles.donebtn} onPress={donebtnfunction}>
          <Text style={styles.donetext}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClipsPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingLeft: 16,
  },
  arrowImg: {
    width: 24,
    height: 24,
  },
  savebtn: {
    display: 'flex',
    width: 72,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3.034,
    backgroundColor: '#4690B5',
    flexDirection: 'row',
  },
  savetext: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  overlaytwo: {
    position: 'absolute',
    bottom: 118,
    width: width,
  },
  timelineBar: {
    height: 5,
    backgroundColor: '#ffffff50',
    borderRadius: 2.5,
    overflow: 'hidden',
  },
  timelineProgress: {
    height: 5,
    backgroundColor: '#ffffff',
  },
  overlaythree: {
    position: 'absolute',
    bottom: 68,
    right: 30,
  },
  donebtn: {
    width: 86,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4690B5',
    borderRadius: 17,
  },
  donetext: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
});
