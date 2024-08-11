import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface navproptype {
  title: string;
  crossFunction: () => void;
  donebtnFunction: () => void;
}

const TagPeopleNav = ({title, crossFunction, donebtnFunction}: navproptype) => {
  return (
    <View style={styles.mainBox}>
      <View style={styles.topbarcontainer}>
        <View style={styles.btnbox}>
          <TouchableOpacity onPress={crossFunction}>
            <Image source={require('../assets/cross.png')} />
          </TouchableOpacity>
          <Text style={styles.headertext}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={donebtnFunction}>
          <Text style={styles.btntext}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TagPeopleNav;

const styles = StyleSheet.create({
  topbarcontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnbox: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
  headertext: {
    fontSize: 16,
    fontWeight: '700',
    color: '#303030',
  },
  btn: {
    display: 'flex',
    height: 27,
    width: 81,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: '#4690B5',
    borderRadius: 37,
  },
  btntext: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFF',
  },
  mainBox: {
    width: 360,
  },
});
