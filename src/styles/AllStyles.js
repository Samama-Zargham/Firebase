import { StyleSheet } from "react-native"
import colors from "../theme/colors"

const container1 = {
    flex: 1,
    backgroundColor: colors.WHITE
}

const MEAL_STYLE = StyleSheet.create({
    container: container1,
    inContainer: {
        alignItems: "center",
        paddingTop: 90
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    headV: {
        flexDirection: "row",
        alignItems: "center",
    },
    head_Title: {
        color: colors.TEXT_COLOR,
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 15
    },
    txt: {
        padding: 10,
        fontWeight: "600",
        // fontSize:18
    },
    chooseMeal: {
        fontWeight: "500",
        marginRight: 80,
        marginTop: 30,
        fontSize: 15
    },
    mCView: {
        flexDirection: "row",
        alignItems: "center"
    },
    mcTxt: {
        backgroundColor: "#DADADA",
        fontSize: 18,
        borderRadius: 5,
        width: 24,
        height: 24,
        fontWeight: "500",
        textAlign: "center"
    },
    TotalAmount: {
        fontSize: 15,
        fontWeight: "500",
        padding: 10
    },
    dollar: {
        fontWeight: "500",
        fontSize: 20
    },
    Xsign: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 30,
        paddingHorizontal: 25
    }
})

const ADRESS = StyleSheet.create({
    container: container1
})

const ODERING = StyleSheet.create({
    container: container1
})

const SUMMARY = StyleSheet.create({
    container: container1
})

const PAYMENT = StyleSheet.create({
    container: container1,
    inContainer:{
        alignItems:"center"
    },
    Login:{}
})

export { MEAL_STYLE, PAYMENT, SUMMARY, ADRESS, ODERING }