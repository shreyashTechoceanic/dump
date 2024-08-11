import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

interface FlatCardsProps {
  imagesSrc: string[]; // Array of image URLs
}

const FlatCards: React.FC<FlatCardsProps> = ({imagesSrc}) => {
  return (
    <ScrollView>
      <View style={styles.outercontainer}>
        <View style={styles.container}>
          {imagesSrc.map((src, index) => (
            <View key={index} style={styles.imgBox}>
              <Image style={styles.img} source={{uri: src}} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    rowGap: 3,
    columnGap: 17.1,
  },
  imgBox: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 1,
    borderRadius: 18,
  },
  img: {
    width: 118,
    height: 127,
    borderRadius: 18,
  },
  outercontainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 9,
  },
});
