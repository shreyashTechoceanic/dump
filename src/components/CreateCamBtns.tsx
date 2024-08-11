import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

interface createCamBtnProps {
  galeryimgfun: () => void;
  cambtnfun: () => void;
  camswitchfun: () => void;

  galeryimgsrc: any;
  cambtnsrc: any;
  camswitchsrc: any;
}

const CreateCamBtns = ({
  galeryimgsrc,
  cambtnsrc,
  camswitchsrc,
  galeryimgfun,
  cambtnfun,
  camswitchfun,
}: createCamBtnProps) => {
  return (
    <View>
      <View style={styles.btnbox}>
        <TouchableOpacity onPress={galeryimgfun}>
          <Image
            source={galeryimgsrc} // Adjust the file extension as per your asset
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={cambtnfun}>
          <Image
            source={cambtnsrc} // Adjust the file extension as per your asset
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={camswitchfun}>
          <Image
            source={camswitchsrc} // Adjust the file extension as per your asset
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateCamBtns;

const styles = StyleSheet.create({
  heading: {
    color: '#ffffff',
  },
  btnbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

    borderWidth: 2,
    borderColor: '#fff',
    height: 70, // Ensure this is explicitly set
    alignItems: 'center',
    // padding: 10,
  },
});
