import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

interface proptype {
  viewscount: string;
}

const OwnStoryBottomBar = ({viewscount}: proptype) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.viewBox}>
        <View style={styles.itembox}>
          <TouchableOpacity>
            <Image
              style={styles.img}
              source={require('../../assets/views.png')}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{viewscount}</Text>
        </View>
      </View>

      <View style={styles.controllerBox}>
        <View style={styles.itembox}>
          <TouchableOpacity>
            <Image
              style={styles.img}
              source={require('../../assets/send.png')}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Share</Text>
        </View>
        <View style={styles.itembox}>
          <TouchableOpacity>
            <Image
              style={styles.img}
              source={require('../../assets/glimpse.png')}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Glimps</Text>
        </View>
        <View style={styles.itembox}>
          <TouchableOpacity>
            <Image
              style={styles.img}
              source={require('../../assets/verticalthreedot.png')}
            />
          </TouchableOpacity>
          <Text style={styles.text}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default OwnStoryBottomBar;

const styles = StyleSheet.create({
  maincontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  itembox: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  img: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700',
  },
  viewBox: {},
  controllerBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
  },
});
