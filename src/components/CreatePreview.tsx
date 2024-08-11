import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icons from './Icons';

interface createPreviewProp {
  templateFun: () => void;
  draftFun: () => void;
  layoutsFun: () => void;
  headphoneFun: () => void;
  downarrowFun: () => void;
}

const CreatePreview = ({
  templateFun,
  draftFun,
  layoutsFun,
  headphoneFun,
  downarrowFun,
}: createPreviewProp) => {
  console.log('CreatePreview component rendered');
  return (
    <View style={styles.container}>
      <Icons
        iconsrc={require('../assets/templates.png')}
        iconname={'Templates'}
        iconwidth={24}
        onClickFun={templateFun}
      />
      <Icons
        iconsrc={require('../assets/draft.png')}
        iconname={'Draft'}
        iconwidth={24}
        onClickFun={draftFun}
      />
      <Icons
        iconsrc={require('../assets/layouts.png')}
        iconname={'Layouts'}
        iconwidth={24}
        onClickFun={layoutsFun}
      />
      <Icons
        iconsrc={require('../assets/headphone.png')}
        iconname={'Headphone'}
        iconwidth={24}
        onClickFun={headphoneFun}
      />
      <Icons
        iconsrc={require('../assets/downarrow.png')}
        iconname={'Downarrow'}
        iconwidth={24}
        onClickFun={downarrowFun}
      />
    </View>
  );
};

export default CreatePreview;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: 100,
    // padding: 30,
    gap: 24,
  },
});
