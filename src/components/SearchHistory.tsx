import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface searchprop {
  searchtext: string[];
}

const SearchHistory = ({searchtext}: searchprop) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.main}>
        {searchtext.map(text => (
          <View key={text} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity>
              <Image
                style={styles.img}
                source={require('../assets/searchcross.png')}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SearchHistory;

const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    flexDirection: 'row',
    gap: 9,
    backgroundColor: '#3030301A',
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 24, // Set a specific height
  },
  text: {
    color: '#303030',
    fontSize: 12,
    fontWeight: '400',
  },
  img: {
    width: 8,
    height: 8,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  heading: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '600',
  },
});
