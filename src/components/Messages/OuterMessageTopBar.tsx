import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const OuterMessageTopBar = () => {
  return (
    <View style={styles.main}>
      <View style={styles.rightIcon}>
        <View>
          <TouchableOpacity>
            <Image source={require('../../assets/backarrow.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Messages</Text>
        </View>
      </View>
      <View style={styles.leftIcon}>
        <TouchableOpacity>
          <Image source={require('../../assets/video-call-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/createMsgIcon.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OuterMessageTopBar;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4690B5',
    height: 59,
    width: '100%',
    padding: 16,
  },
  rightIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  leftIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
