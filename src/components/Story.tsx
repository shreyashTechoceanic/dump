/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
  TextInput,
  Text,
} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';

const {width} = Dimensions.get('window');

interface StoryPropType {
  imgSrc: string[];
  savebtnfunction: () => void;
  proFilePic: string;
  profilePicfunction: () => void;
}

const Story = ({
  imgSrc,
  savebtnfunction,
  proFilePic,
  profilePicfunction,
}: StoryPropType) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const totalImages = imgSrc.length;

  const [like, setLike] = useState(false);
  const handleLikePress = () => {
    setLike(!like);
  };

  const handleNextStory = useCallback(() => {
    if (currentIndex < totalImages - 1) {
      setCurrentIndex(currentIndex + 1);
      progressAnim.setValue(0); // Reset animation for the next image
    } else {
      progressAnim.setValue(1); // Complete the progress if it's the last image
    }
  }, [currentIndex, totalImages, progressAnim]);

  const handlePreviousStory = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      progressAnim.setValue(0); // Reset animation for the previous image
    }
  }, [currentIndex, progressAnim]);

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(progressAnim, {
        toValue: 1,
        duration: 10000 / totalImages, // Adjust duration based on the number of images
        useNativeDriver: false,
      }).start(() => {
        handleNextStory(); // Automatically move to the next image when the animation completes
      });
    };

    startAnimation();

    return () => {
      progressAnim.stopAnimation(); // Stop animation when the component unmounts
    };
  }, [currentIndex, totalImages, handleNextStory, progressAnim]);

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
          <TouchableOpacity onPress={savebtnfunction}>
            <View style={styles.savebtn}>
              <Image
                source={require('../assets/cross.png')}
                style={styles.crossImage}
              />
            </View>
          </TouchableOpacity>
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
      <View style={styles.msgBox}>
        <TextInput
          placeholder="Send message..."
          placeholderTextColor="#888"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleLikePress}>
          <Image
            source={
              like
                ? require('../assets/likedbtn.png')
                : require('../assets/unlikedbtn.png')
            }
            style={styles.likeButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Story;

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
    zIndex: 10, // Ensures the header is above other elements
  },
  savebtn: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
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
  msgBox: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 23,
    width: width - 20,
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#fff',
  },
  likeButton: {
    width: 32,
    height: 32,
    marginLeft: 10,
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
});
