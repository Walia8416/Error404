import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  ImageSourcePropType,
} from 'react-native';
import {heighttodp, widthtodp} from '../../../../../constants/Dimenstions';
import Images from '../../../../../constants/icon';
import {Styles} from '../../../../../styles/homescreen';
import ImageContainer from '../../../../helpers/header/ImageContainer';

interface props {
  active?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  image: ImageSourcePropType;
  text?: string;
}

const Radioselect = ({active, onPress, image, text}: props) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.radioselectcontainer}>
      <View style={Styles.radioinnercontainer}>
        {image ? (
          <ImageContainer
            style={{height: heighttodp(24), width: widthtodp(24)}}
            name={image}
          />
        ) : null}
        <Text style={Styles.radiotext}>{text}</Text>
      </View>
      <View style={Styles.radioinnercontainer}>
        <View style={active ? Styles.radioactive : Styles.radiodeactive}></View>
      </View>
    </TouchableOpacity>
  );
};

export default Radioselect;
