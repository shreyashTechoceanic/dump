import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface navproptype {
  onSearch: () => void;
  onMsg: () => void;
  onBell: () => void;
  onBurger: () => void;
}

const TopNavBar = ({onSearch, onMsg, onBell, onBurger}: navproptype) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/universe-logo.png')}
      />
      <View style={styles.topnavicon}>
        <TouchableOpacity onPress={onSearch}>
          <Image
            style={styles.search}
            source={require('../assets/nav-search.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onMsg}>
          <Image style={styles.msg} source={require('../assets/msg.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onBell}>
          <Image style={styles.bell} source={require('../assets/bell.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onBurger}>
          <Image
            style={styles.burger}
            source={require('../assets/burger-menu.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNavBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',

    display: 'flex',
    flexDirection: 'row',
  },

  img: {
    width: 38,
    height: 40,
  },

  burger: {},

  search: {},

  msg: {},

  bell: {},

  topnavicon: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
});
