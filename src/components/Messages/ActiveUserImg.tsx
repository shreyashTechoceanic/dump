import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Svg, {Rect, Path, Defs, Pattern, Use, Image} from 'react-native-svg';
interface imgProp {
  imgSrc: string;
  username: string;
}
const ActiveUserImg = ({imgSrc, username}: imgProp) => (
  <>
    <View style={styles.userBox}>
      <TouchableOpacity>
        <Svg width={56} height={56} viewBox="0 0 56 56" fill="#2CC069">
          <Rect
            x={0}
            y={0}
            width={56}
            height={56}
            rx={30}
            fill="url(#pattern0_3349_1790)"
          />
          <Path
            d="M48 55.7002C51.866 55.7002 55 52.5662 55 48.7002C55 44.8342 51.866 41.7002 48 41.7002C44.134 41.7002 41 44.8342 41 48.7002C41 52.5662 44.134 55.7002 48 55.7002Z"
            fill="#2CC069"
            stroke="#FCFCFC"
            strokeWidth={2}
          />
          <Defs>
            <Pattern
              id="pattern0_3349_1790"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}>
              <Use
                xlinkHref="#image0_3349_1790"
                transform="translate(0 -0.25) scale(0.003125)"
              />
            </Pattern>
            <Image
              id="image0_3349_1790"
              width={450}
              height={500}
              xlinkHref={imgSrc}
            />
          </Defs>
        </Svg>
      </TouchableOpacity>
      <Text style={styles.belowText}>{username}</Text>
    </View>
  </>
);
export default ActiveUserImg;
const styles = StyleSheet.create({
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
  addBtn: {
    width: 56,
    height: 56,
    // borderRadius: 23,
  },
});
