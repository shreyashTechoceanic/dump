import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const TimeLinePost: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.posttopbarbox}>
          <View style={styles.userbox}>
            <View style={styles.userimg}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/c468/b055/69b2287d940975307d5b0f9259bb3c64?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Asvz2MfOswW5A~QXDOwWIjhOO~vexZwHuhoA64OO-~xnhIrNXbit7eFkCajs7LyMOrq-DP3Wzi15y3zNruYPzbIInyNAXeRcWgSEfCWZ-pGNoLGSNUaFjqTjEgHRiUxD0AKy5Y4LrRtpJtOEXrSSgcKS8SMQQk~bxSplzRufcBUVKSE2rJ7Jno1Yrc9iP63XosYTPWdDCIA-XwVbeT5W38sZCuTd3Q5zEF0p5Otcz~WWBEKXUJXeL-8-xpOUGzqCTfrkAquyNvKqZdnIVJjPp1Q62RfISlQjdCS5xBmwreUuvclWhga-rFhuy0Pt5Yz8qxH1dMfU9v51i5z8JEChmg__',
                }}
                style={styles.userImage}
              />
            </View>
            <View style={styles.usernametime}>
              <Text style={styles.name}>Sofie Turner</Text>
              <Text style={styles.time}>10 hrs</Text>
            </View>
          </View>
          <Image
            source={require('../../assets/standingdots.png')}
            style={styles.dotsImage}
          />
        </View>
        <View style={styles.captionbox}>
          <Text style={styles.caption}>
            Gorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text style={styles.tags}>#Travel #enjoy</Text>
        </View>
        <View style={styles.mainImgBox}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/c468/b055/69b2287d940975307d5b0f9259bb3c64?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Asvz2MfOswW5A~QXDOwWIjhOO~vexZwHuhoA64OO-~xnhIrNXbit7eFkCajs7LyMOrq-DP3Wzi15y3zNruYPzbIInyNAXeRcWgSEfCWZ-pGNoLGSNUaFjqTjEgHRiUxD0AKy5Y4LrRtpJtOEXrSSgcKS8SMQQk~bxSplzRufcBUVKSE2rJ7Jno1Yrc9iP63XosYTPWdDCIA-XwVbeT5W38sZCuTd3Q5zEF0p5Otcz~WWBEKXUJXeL-8-xpOUGzqCTfrkAquyNvKqZdnIVJjPp1Q62RfISlQjdCS5xBmwreUuvclWhga-rFhuy0Pt5Yz8qxH1dMfU9v51i5z8JEChmg__',
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default TimeLinePost;

const styles = StyleSheet.create({
  //
  //
  //

  scrollViewContent: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
  },

  posttopbarbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userimg: {
    marginRight: 10,
  },

  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  usernametime: {
    justifyContent: 'center',
  },

  name: {
    fontWeight: 'bold',
  },

  time: {
    color: 'gray',
  },

  dotsImage: {
    width: 20,
    height: 20,
  },

  captionbox: {
    marginVertical: 10,
  },

  caption: {
    fontSize: 16,
  },

  tags: {
    color: '#4690B5',
  },

  mainImgBox: {
    marginTop: 10,
  },

  img: {
    width: '100%',
    height: '100%',
  },

  //
  //
  //
});
