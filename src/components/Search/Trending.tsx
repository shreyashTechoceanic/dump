import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

interface trendingProp {
  imgSrcs: string[];
}

const Trending = ({imgSrcs}: trendingProp) => {
  const [limitedImgSrcs, setLimitedImgSrcs] = useState(imgSrcs.slice(0, 4));

  const loadimg = () => {
    setLimitedImgSrcs(imgSrcs);
  };
  const reduceimg = () => {
    setLimitedImgSrcs(imgSrcs.slice(0, 4));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <View style={styles.gridContainer}>
            {limitedImgSrcs.map((imgSrc, index) => (
              <View key={index}>
                <Image style={styles.img} source={{uri: imgSrc}} />
              </View>
            ))}
          </View>
          <View>
            {imgSrcs.length > 4 && limitedImgSrcs.length <= 4 && (
              <TouchableOpacity onPress={loadimg}>
                <Text>More...</Text>
              </TouchableOpacity>
            )}
            {imgSrcs.length > 4 && limitedImgSrcs.length > 4 && (
              <TouchableOpacity onPress={reduceimg}>
                <Text>Less...</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 25,
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: '#303030',
    lineHeight: 21.82,
    marginBottom: 16,
    textAlign: 'left',
  },
  scrollView: {
    flexGrow: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },

  img: {
    width: 161,
    height: 169,
    borderRadius: 18,
  },
});
