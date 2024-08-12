import {StyleSheet, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import ReelSideBtns from './ReelSideBtns';
import ReelsDetails from './ReelsDetails';

interface propType {
  videoSrc: string;
  caption: string;
}

const Reels = ({videoSrc, caption}: propType) => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: videoSrc,
        }}
        style={styles.backgroundVideo}
        resizeMode="cover"
        repeat
        muted
        onError={e => console.log('Video Error:', e)}
        onBuffer={e => console.log('Buffering:', e)}
        onLoadStart={() => console.log('Load Start')}
        onLoad={() => console.log('Loaded')}
      />
      <View style={styles.sideBtnsContainer}>
        <ReelSideBtns
          likeFun={() => console.log('Function implemented.')}
          commentFun={() => console.log('Function implemented.')}
          shareFun={() => console.log('Function implemented.')}
          threedotFun={() => console.log('Function implemented.')}
          musicCoverImg="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
          musicCoverFun={() => console.log('Function implemented.')}
        />
      </View>
      <View style={styles.reelsDetailsContainer}>
        <ReelsDetails caption={caption} />
      </View>
    </View>
  );
};

export default Reels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundVideo: {
    height: '100%',
    width: '100%',
  },
  sideBtnsContainer: {
    position: 'absolute',
    right: 16,
    bottom: 32,
  },
  reelsDetailsContainer: {
    position: 'absolute',
    left: 16,
    bottom: 40,
  },
});
