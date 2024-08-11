import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React, {useState} from 'react';

interface searchprop {
  searchFunction: (searchText: string) => void;
}

const SearchBox = ({searchFunction}: searchprop) => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.inputbox}
        placeholderTextColor="#30303080"
        value={searchText}
        onChangeText={setSearchText}
      />
      <TouchableOpacity
        onPress={() => {
          console.log('Button Pressed');
          searchFunction(searchText);
        }}
        style={styles.button}>
        <Image
          source={
            Platform.OS === 'web'
              ? {uri: require('../assets/search.png').default}
              : require('../assets/search.png')
          }
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 41,
    width: 328,
    borderRadius: 60,
    paddingHorizontal: 16,
    // backgroundColor: '#E9F0F8',
    backgroundColor: '#EEEDED',

    // backgroundColor: '#0000',
  },
  image: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  inputbox: {
    flex: 1,
    color: '#000000',
    fontWeight: '600',
    borderBottomWidth: 0,
  },
  button: {
    padding: 5,
  },
});
