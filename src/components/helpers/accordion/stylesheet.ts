import { StyleSheet } from "react-native";
import { Colors } from "../../../../../constants/colors";
import { widthtodp } from "../../../../../constants/Dimenstions";
import { Medium } from "../../../../../constants/Fonts";

export const styles = StyleSheet.create({
    mainText: {
        color: Colors.Crimson,
        fontFamily: Medium,
    },
    secondText: {
        paddingVertical: 10,
        marginLeft: widthtodp(38),
    },
    card: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: widthtodp(28),
        height: widthtodp(22),
        resizeMode: 'contain',
        marginRight: 12,
    },
});
