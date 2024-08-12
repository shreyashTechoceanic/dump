import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

interface imgPropType {
  imgSrc: string[];
}

const StoryViews = ({imgSrc}: imgPropType) => {
  const [selectedImg, setSelectedImg] = useState<number>(0);

  return (
    <View>
      <View style={styles.main}>
        {imgSrc.length === 1 ? (
          <Image style={styles.selectedImg} source={{uri: imgSrc[0]}} />
        ) : (
          imgSrc.map((i, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => setSelectedImg(index)}>
                <Image
                  style={
                    selectedImg === index
                      ? styles.selectedImg
                      : styles.unselectedImg
                  }
                  source={{uri: i}}
                />
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default StoryViews;

const styles = StyleSheet.create({
  selectedImg: {
    width: 112,
    height: 152,
  },
  unselectedImg: {
    width: 64,
    height: 95,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
  },
});
