import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

interface User {
  imgSrc: string | undefined;
  userid: string;
  name: string;
}

interface AccountPropType {
  user: User[];
}

const Accounts: React.FC<AccountPropType> = ({user}) => {
  const [fouraccount, setFouraccount] = useState(user.slice(0, 4));

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Accounts</Text>
      {fouraccount.map((item, index) => (
        <View key={index} style={styles.usernameBox}>
          <Image
            style={styles.img}
            source={{
              uri: item.imgSrc,
            }}
          />
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.userId}>{item.userid}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 12,
  },

  usernameBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    marginBottom: 12,
  },

  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12, // Add margin to create space between the image and text
  },
  name: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  userId: {
    color: 'rgba(48, 48, 48, 0.50)',
    fontSize: 12,
    fontWeight: '500',
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    fontStyle: 'normal',
  },
});
