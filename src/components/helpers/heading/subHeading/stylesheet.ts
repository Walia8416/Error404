import { StyleSheet } from "react-native"
import { Colors } from "../../../../constants/colors"
import { Medium } from "../../../../constants/Fonts"

export const styles = StyleSheet.create({
    subHeading: {
        backgroundColor: Colors.FeatherWhite,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginVertical: 16
    },
    text: {
        fontFamily: Medium,
        color: Colors.text,
        marginVertical: 16,
    },
})
