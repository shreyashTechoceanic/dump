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
                  uri: 'https://s3-alpha-sig.figma.com/img/7eea/776d/d438ce5e1ac19863f2f036a40eaaa561?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vixa6DIbaUsZEeTpD2RFBWZ5KODF9ugB~zd9pZgiOLRxuAeWGrqW7q7RpBo6K5RN1fO5h3iI2GZWQnSr0GIsF3ZCaotGQv-DqKEvQkxwG~fAj6HA5l8d6RfnMoSS9Lq4SNb2pnc4-VAdrZuGVb-DH4WYOdURx1MOi0o9uPb9ToVqyAdbz0PXKql-ltL85dMXtxzRERQJE1LbkRZzr5qSXVN6C5zZwfCCpjHpbmz6ejSuHNZIg5WZPXpSYNx3gWLTve5cXAm5aEvq4DRY-8XYdw0kVSZq8E5G~dwGM6B1JjERtBe1Rf3wEQZNudC1A6YP15lB86-R7lRcUhy6vJRPgg__',
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
            source={require('../assets/standingdots.png')}
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
              uri: 'https://s3-alpha-sig.figma.com/img/c468/b055/69b2287d940975307d5b0f9259bb3c64?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gGRuiBbKaGTQwKiRVU0dlNfTQEMDxFizo1isvRq6Dmmr1DcWkrYY1GOlYch9djkuDFY25J8y8sVbrG-iiJTy8GTvrvbeeiWDpDHbin~spWBsZjwvuqZUiQ1mrNYtxGOAIGMQ15lrOR~5dPCATm-hOwhWShOKO1AwFVMKDYQ2bb5DDwHXyZx9B6Lt6CwNUUNr5mItQ~fVhIXdup8mNDdwXcfBIv-0dDXTiFGWXE7Vmt0xGsZEB3VC1N5iOOREycLR4X9-Ky11eUt7JrcnrgL1VZ-vCQd40mwsTYPVqROCExTAjNKuBaPjBW5vyn6uZRKm-uPSaPVAcYkzJYWIUM4rHw__',
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
    color: 'blue',
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
