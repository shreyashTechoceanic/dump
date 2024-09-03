import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Message_Suggestion_UserBox from './Message_Suggestion_UserBox';
import ActiveUserImg from './ActiveUserImg';
// import ActiveUserImg from './ActiveUserImg';

const data = [
  {
    userId: 1,
    profilePic:
      'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
    username: 'shreyash',
    isActive: false,
  },
  {
    userId: 2,
    profilePic:
      'https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg',
    username: 'adiuyadav',
    isActive: true,
  },
  {
    userId: 3,
    profilePic:
      'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
    username: 'puneet',
    isActive: true,
  },
  {
    userId: 4,
    profilePic:
      'https://img.freepik.com/free-photo/african-ethnicity-man-portrait-shoot-studio_53876-41032.jpg',
    username: 'jerry',
    isActive: true,
  },
];

const MessageUserSuggestion = () => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mainBox}>
        <View style={styles.userBox}>
          <TouchableOpacity>
            <Image
              style={styles.addBtn}
              source={require('../../assets/carbon_add.png')}
            />
          </TouchableOpacity>
          <Text style={styles.belowText}>Pin favorite</Text>
        </View>

        {data.map(e => (
          <View key={e.userId} style={styles.fixBox}>
            {e.isActive ? (
              <View>
                <ActiveUserImg imgSrc={e.profilePic} username={e.username} />
              </View>
            ) : (
              <>
                <Message_Suggestion_UserBox
                  imgSrc={e.profilePic}
                  username={e.username}
                />
              </>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MessageUserSuggestion;

const styles = StyleSheet.create({
  addBtn: {
    width: 56,
    height: 56,
    borderRadius: 23,
  },
  belowText: {
    color: '#0F1828',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 16,
  },
  userBox: {
    alignItems: 'center',
    marginBottom: 10,
  },
  mainBox: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight: 30,
    gap: 10,
  },
  fixBox: {
    marginTop: 10,
    marginBottom: 10,
  },
});
