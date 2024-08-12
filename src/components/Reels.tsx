import {StyleSheet, View} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import ReelSideBtns from './ReelSideBtns';
import ReelsDetails from './ReelsDetails';

const Reels = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'https://rr3---sn-qxaelnes.googlevideo.com/videoplayback?expire=1723467460&ei=ZLK5ZrXnB8Dd-LAPz9CrwAc&ip=91.123.10.55&id=o-AL6bFUuz-6m1J2GJipOmcckOeGs9uCHSKgRecPI2n4HU&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&vprv=1&svpuc=1&mime=video%2Fmp4&rqh=1&cnr=14&ratebypass=yes&dur=13.769&lmt=1699164418473153&c=ANDROID_TESTSUITE&txp=6300224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Csvpuc%2Cmime%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgMH387z8rnT-qgdoD0JVXskRFQl3T72Ih9ZNdAWT8FdwCIQDcYaIpYjdykTUnrbvxgp1m_A5yv3FOsdB7hwalaUcJuQ%3D%3D&rm=sn-pmcg-bg0z7d,sn-bg0eez7e&rrc=79,104&req_id=4fafb991240da3ee&cmsv=e&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=Sw&mip=103.165.30.236&mm=30&mn=sn-qxaelnes&ms=nxu&mt=1723445069&mv=u&mvi=5&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AGtxev0wRgIhALt5kZ0xqZdUDHF272wWh2rzWBpAjDDYFdZcagZ3CKMJAiEAuUHDtps9tuMsU86t60k1jeTv4mS2HKWNouaqABay1g8%3D&ir=1&rr=12',
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
        <ReelsDetails />
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
