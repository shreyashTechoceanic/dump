import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Message_SearchBox = () => {
  return (
    <View style={styles.innerBox}>
      <TextInput
        style={styles.textInput}
        placeholder="Search..."
        placeholderTextColor="#30303080"
      />
      <TouchableOpacity>
        <Image
          source={require('../../assets/search.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Message_SearchBox;

const styles = StyleSheet.create({
  innerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 7, // Reduced vertical padding for a tighter fit
    paddingHorizontal: 18, // Adjust horizontal padding
    backgroundColor: '#FAFAFA', // Light gray background
    borderRadius: 80, // Rounded corners for the search box
    // maxWidth: 358,
    width: '100%',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#303030',
  },
  image: {
    width: 20,
    height: 20,
    padding: 8,
  },
});
