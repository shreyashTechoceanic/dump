import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface imgProp {
  imgSrc: string;
  username: string;
}
const Message_Suggestion_UserBox = ({imgSrc, username}: imgProp) => {
  return (
    <View style={styles.userBox}>
      <TouchableOpacity>
        <Image style={styles.addBtn} source={{uri: imgSrc}} />
      </TouchableOpacity>
      <Text style={styles.belowText}>{username}</Text>
    </View>
  );
};

export default Message_Suggestion_UserBox;

const styles = StyleSheet.create({
  belowText: {
    color: '#0F1828',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 16,
  },
  userBox: {
    alignItems: 'center',
    marginBottom: 10,
  },
  addBtn: {
    width: 56,
    height: 56,
    borderRadius: 30,
  },
});
