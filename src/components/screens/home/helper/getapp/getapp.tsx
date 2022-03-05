import React from 'react'
import { View, Text, TouchableOpacity, GestureResponderEvent, ImageSourcePropType } from 'react-native'
import { heighttodp, widthtodp } from '../../../../../constants/Dimenstions'
import Images from '../../../../../constants/icon'
import { Styles } from '../../../../../styles/homescreen'
import ImageContainer from '../../../../helpers/header/ImageContainer'

interface props {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  text?: string;
  image: ImageSourcePropType

}

const GetApp = ({ onPress, image, text }: props) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.radioselectcontainer}>
      <View style={Styles.radioinnercontainer}>
        <ImageContainer style={{ height: heighttodp(24), width: widthtodp(24) }} name={image} />
        <Text style={Styles.radiotext}>{text}</Text>
      </View>
      <View style={Styles.radioinnercontainer}>
        <Text style={Styles.getapptext}>Get App</Text>
      </View>
    </TouchableOpacity>
  )
}

export default GetApp
