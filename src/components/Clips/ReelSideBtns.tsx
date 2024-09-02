import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MusicCoverImg from './MusicCoverImg';

interface reelsSideBtnPropsType {
  likeFun: () => void;
  commentFun: () => void;
  shareFun: () => void;
  threedotFun: () => void;
  musicCoverImg: string;
  musicCoverFun: () => void;
}

const ReelSideBtns = ({
  likeFun,
  commentFun,
  shareFun,
  threedotFun,
  musicCoverImg,
  musicCoverFun,
}: reelsSideBtnPropsType) => {
  const [like, setLike] = useState(false);
  const handleLikePress = () => {
    likeFun();
    setLike(!like);
  };
  return (
    <View style={styles.container}>
      <View style={styles.itembox}>
        <TouchableOpacity onPress={handleLikePress}>
          <Image
            style={styles.img}
            source={
              like
                ? require('../../assets/likedbtn.png')
                : require('../../assets/unlikedbtn.png')
            }
          />
        </TouchableOpacity>
        <Text style={styles.itemtext}>50K</Text>
      </View>
      <View style={styles.itembox}>
        <TouchableOpacity onPress={commentFun}>
          <Image
            style={styles.img}
            source={require('../../assets/commentbtn.png')}
          />
        </TouchableOpacity>
        <Text style={styles.itemtext}>50K</Text>
      </View>
      <View style={styles.itembox}>
        <TouchableOpacity onPress={shareFun}>
          <Image
            style={styles.img}
            source={require('../../assets/sharebtn.png')}
          />
        </TouchableOpacity>
        <Text style={styles.itemtext}>50K</Text>
      </View>
      <View>
        <TouchableOpacity onPress={threedotFun}>
          <Image
            style={[styles.img, styles.dot]}
            source={require('../../assets/verticalthreedot.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.itembox, styles.musicbox]}>
        <TouchableOpacity onPress={musicCoverFun}>
          <MusicCoverImg musicCoverImgSrc={musicCoverImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReelSideBtns;

const styles = StyleSheet.create({
  itembox: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9.66,
  },
  img: {},
  itemtext: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  container: {
    display: 'flex',
    gap: 8,
    justifyContent: 'center',
  },
  dot: {
    marginTop: 11.31,
  },
  musicbox: {
    marginBottom: 17,
    marginTop: 14.93,
  },
});
