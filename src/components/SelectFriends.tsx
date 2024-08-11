import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

interface Account {
  id: string;
  imgSrc: string;
  userid: string;
  name: string;
}

interface SelectFriendsProps {
  accounts: Account[];
}

const SelectFriends: React.FC<SelectFriendsProps> = ({accounts}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleRadioPress = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const renderItem = ({item}: {item: Account}) => (
    <View style={styles.itemContainer}>
      <View style={styles.user}>
        <Image style={styles.img} source={{uri: item.imgSrc}} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.radio,
          selectedIds.includes(item.id) && styles.radioSelected,
        ]}
        onPress={() => handleRadioPress(item.id)}
      />
    </View>
  );

  return (
    <View>
      <Text style={styles.headingText}>Select Friends</Text>
      <FlatList
        data={accounts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SelectFriends;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#303030',
  },
  itemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 14,
  },
  user: {
    display: 'flex',

    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  img: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  name: {
    fontSize: 12,
    fontWeight: '700',
    color: '#303030',
  },
  radio: {
    backgroundColor: 'white',
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: '#303030',
    borderWidth: 1,
  },
  radioSelected: {
    backgroundColor: '#4690B5',
    borderWidth: 0,
  },
});
