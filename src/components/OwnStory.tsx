/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import OwnStoryBottomBar from './OwnStoryBottomBar';

const {width} = Dimensions.get('window');

interface StoryPropType {
  imgSrc: string[];
  savebtnfunction: () => void;
  proFilePic: string;
  profilePicfunction: () => void;
}

const OwnStory = ({
  imgSrc,
  savebtnfunction,
  proFilePic,
  profilePicfunction,
}: StoryPropType) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const totalImages = imgSrc.length;

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: false,
      }).start();
    };

    startAnimation();

    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex + 1 < totalImages) {
          Animated.timing(progressAnim, {
            toValue: (prevIndex + 1) / totalImages,
            duration: 0,
            useNativeDriver: false,
          }).start();
        } else {
          progressAnim.setValue(0);
        }
        return (prevIndex + 1) % totalImages;
      });
    }, 15000);

    return () => clearInterval(intervalId);
  }, [progressAnim, totalImages]);

  const handleNextStory = () => {
    if (currentIndex < totalImages - 1) {
      setCurrentIndex(currentIndex + 1);
      progressAnim.setValue((currentIndex + 1) / totalImages);
    } else {
      progressAnim.setValue(0);
    }
  };

  const handlePreviousStory = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      progressAnim.setValue((currentIndex - 1) / totalImages);
    } else {
      progressAnim.setValue(0);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: imgSrc[currentIndex]}}
        style={styles.backgroundVideo}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <View style={styles.header}>
          <TouchableOpacity onPress={profilePicfunction}>
            <View style={styles.profilePicBox}>
              <Image source={{uri: proFilePic}} style={styles.profilePic} />
              <View style={styles.usernamebox}>
                <Text style={styles.username}>shreyash</Text>
                <Text style={styles.storytime}>10 hr</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.savebtn}>
            <TouchableOpacity onPress={savebtnfunction}>
              <Image
                source={require('../assets/cross.png')}
                style={styles.crossImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.overlaytwo}>
        <View style={styles.timelineBar}>
          <View style={styles.timelineSegments}>
            {imgSrc.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.timelineSegment,
                  {
                    width: `${100 / totalImages}%`,
                    backgroundColor:
                      index < currentIndex
                        ? '#ffffff'
                        : 'rgba(255, 255, 255, 0.5)',
                  },
                ]}
              />
            ))}
            <Animated.View
              style={[
                styles.timelineProgress,
                {
                  width: `${100 / totalImages}%`,
                  left: `${(100 / totalImages) * currentIndex}%`,
                  transform: [
                    {
                      scaleX: progressAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                      }),
                    },
                  ],
                },
              ]}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.leftSideTouchable}
        onPress={handlePreviousStory}
      />
      <TouchableOpacity
        style={styles.rightSideTouchable}
        onPress={handleNextStory}
      />
      <View style={styles.bottombar}>
        <OwnStoryBottomBar viewscount={'24'} />
      </View>
    </View>
  );
};

export default OwnStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    paddingTop: 15,
    position: 'absolute',
    top: 47.5,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  savebtn: {
    width: 24,
    height: 24,
  },
  crossImage: {
    width: '100%',
    height: '100%',
    tintColor: '#ffffff',
  },
  overlaytwo: {
    position: 'absolute',
    top: 20,
    width: width,
  },
  timelineBar: {
    height: 2,
    backgroundColor: 'transparent',
    borderRadius: 2.5,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  timelineSegments: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  timelineSegment: {
    height: 2,
  },
  timelineProgress: {
    position: 'absolute',
    height: 3,
    backgroundColor: '#ffffff',
    top: 0,
  },
  leftSideTouchable: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '50%',
  },
  rightSideTouchable: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: '50%',
  },

  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profilePicBox: {
    width: 130,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  usernamebox: {
    display: 'flex',
    gap: 5,
    alignItems: 'flex-start',
  },
  username: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
  storytime: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '400',
  },
  bottombar: {
    position: 'absolute',
    bottom: 26,
    padding: 10,
    width: width,
  },
});
