import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import ClipsPreview from './src/components/ClipsPreview';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <ClipsPreview videoSrc={'https://www.w3schools.com/html/mov_bbb.mp4'} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    height: '100%',
  },
});
