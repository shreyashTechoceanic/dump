import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Message_Suggestion_UserBox from './Message_Suggestion_UserBox';
import ActiveUserImg from './ActiveUserImg';

const OutterMessageBox_User_Message = () => {
  const [active, setActive] = useState(false);
  return (
    <TouchableOpacity>
      <View style={styles.box}>
        <View>
          {active ? (
            <ActiveUserImg
              imgSrc={
                'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
              }
              username={''}
            />
          ) : (
            <Message_Suggestion_UserBox
              imgSrc={
                'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
              }
              username={''}
            />
          )}
        </View>
        <View style={styles.main}>
          <View style={styles.nameBox}>
            <Text style={styles.username}>Anthalia Putri</Text>
            <Text style={styles.username}>3m ago</Text>
          </View>
          <View style={styles.msgBox}>
            <Text style={styles.msgTxt}>Good Morning, did you sleep well?</Text>
            <Text style={styles.msgNotificationNum}>12</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OutterMessageBox_User_Message;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 2,
    padding: 3,
  },
  nameBox: {
    display: 'flex',
    alignItems: 'center',
    width: 271,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  msgBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'space-between',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 10,
  },
  username: {
    color: '#303030',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 24,
  },
  msgNotificationNum: {
    backgroundColor: '#E94242',
    color: '#FFFFFF',
    borderRadius: 106.667,
    fontSize: 6,
    fontWeight: '700',
    lineHeight: 8.533,
    width: 16,
    height: 16,
    textAlign: 'center',
    padding: 4,
  },
  msgTxt: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: '#30303080',
  },
});
