import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface IconProps {
  iconsrc: any;
  iconname: string;
  iconwidth: number;
  onClickFun: () => void;
}

const Icons: React.FC<IconProps> = ({
  iconsrc,
  iconname,
  iconwidth,
  onClickFun,
}) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onClickFun}>
      <Image
        source={iconsrc}
        style={[styles.image, {width: iconwidth, height: iconwidth}]}
      />
      <Text style={[styles.text, {fontSize: iconwidth / 1.8}]}>{iconname}</Text>
    </TouchableOpacity>
  );
};

export default Icons;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // Common image styles can go here if any
  },
  text: {
    color: '#fff',
    marginTop: 2,
  },
});
