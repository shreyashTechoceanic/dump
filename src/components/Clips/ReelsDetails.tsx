import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';

type Props = {
  caption: string;
};

const ReelsDetails = ({caption}: Props) => {
  const [follow, setFollow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const onFollow = () => {
    setFollow(!follow);
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const commentText = caption;
  const words = commentText.split(' ');
  const previewText = words.slice(0, 5).join(' ');
  const showMore = words.length > 5;

  return (
    <View style={styles.maincontainer}>
      <View style={styles.topbar}>
        <View style={styles.userbox}>
          <Image
            style={styles.profilepic}
            source={require('../../assets/p1.png')}
          />
          <Text style={styles.username}>shreyashchandra</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={onFollow}>
          <Text style={styles.btntext}>{follow ? 'Following' : 'Follow'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.comment}>
        <Text style={styles.commentText}>
          {expanded ? commentText : previewText + (showMore ? '...' : '')}
        </Text>
        {showMore && (
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.commentText}>
              {expanded ? ' Less' : ' More'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.likeBox}>
        <View>
          <Image
            style={styles.likedpic}
            source={require('../../assets/p2.png')}
          />
        </View>
        <View>
          <Text style={styles.likedtext}>shreyash & 10 others liked</Text>
        </View>
      </View>
      <View style={styles.musicnamebox}>
        <Image
          style={styles.musicimage}
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/046d/0b34/6e471f7ece360c1f5d5d34c546a57147?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~NYM6zl3yTxfeozgD79ZoeLbjRCPE1kSk7KhKPJO4ObZhLeurVYvPXsw4VRhzTtwsCrWOBshLoiGyDDKerQOGiKZ9vl~66EU90UypkJv~e6R2wrT-xcbdMdxGLoiTfLtspIFhxrAjIpdPrA-iyx40sVzVzhAvM3UGUOiFQaZbas7hTqf4VPpU90-iTQd5QaDjNiUFp7B91-63REcHUXujVUWSA-G-IKSe8Nv5715sMJkjCk3e8QmTPHXLzKP5bVB7EWkhpoWupz3Gk3ZB2nT3rQzJBO0LtwHc0F0GW5UvAyWcWmskrRnqqX5CfMTXg5zJXXM82zQYZJXDUsqCvcHw__',
          }}
          resizeMode="cover"
        />
        <Text style={styles.songtext}>song name</Text>
      </View>
    </View>
  );
};

export default ReelsDetails;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    padding: 10,
  },
  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 21,
    paddingVertical: 10,
  },
  profilepic: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  btn: {
    width: 85,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    opacity: 30,
  },
  btntext: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: -0.12,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    letterSpacing: 0.24,
  },
  userbox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  commentText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },
  likeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginTop: 8,
  },
  likedpic: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  likedtext: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFF',
    opacity: 0.8,
  },
  musicnamebox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 98,
    height: 22,
    gap: 8,
    marginTop: 16,
    borderRadius: 5.831,
    backgroundColor: '#ffffff1a',
    justifyContent: 'center',
  },
  musicimage: {
    width: 20, // Adjust as needed
    height: 20, // Adjust as needed
  },
  songtext: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: '400',
  },
});
