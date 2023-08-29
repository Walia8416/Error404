import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './stylesheet'

type SubHeadingProps = {
    name: string,
    style?: object
}

const SubHeading = ({ name, style }: SubHeadingProps) => (
    <View style={[styles.subHeading, style]}>
        <Text style={styles.text}>{name}</Text>
    </View>
)

export default SubHeading
