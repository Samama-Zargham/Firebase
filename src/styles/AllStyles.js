import { StyleSheet } from "react-native"
import colors from "../theme/colors"

const container1 = {
    flex: 1,
    backgroundColor: colors.WHITE
}
const WH = {
    width: 320,
    height: 45,
}
const PRESS_STYLE = StyleSheet.create({
    width: WH.width,
    height: WH.height,
    alignSelf: "center",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center"
})
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
        color: colors.TEXT_COLOR,
        // fontSize:18
    },
    chooseMeal: {
        fontWeight: "500",
        marginRight: 80,
        marginTop: 30,
        fontSize: 15,
        color: colors.TEXT_COLOR
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
        padding: 10,
        color: colors.TEXT_COLOR
    },
    dollar: {
        fontWeight: "500",
        fontSize: 20,
        color: colors.TEXT_COLOR
    },

    Xsign: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 30,
        paddingHorizontal: 25,
        color: colors.TEXT_COLOR
    }
})

const ADRESS = StyleSheet.create({
    container: container1,
    View1: {
        marginLeft: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
        flexDirection: "row",
        width: WH.width,
        justifyContent: "space-between"
    },
    modalView1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    swtch: { flexDirection: "row", marginBottom: 10, alignItems: "center", },
    txt: {
        paddingHorizontal: 20,
        fontSize: 19,
        fontWeight: "500",
        color: colors.TEXT_COLOR,
        margin: 3,
        marginTop: 20
    },
    iconView: {
        flexDirection: "row",
        marginBottom: -10
    }

})

const ODERING = StyleSheet.create({
    container: {
        backgroundColor: colors.BACKGROUND,
        flex: 1
    },
    detailView: {
        backgroundColor: colors.PRIMARYFADE_COLOR,
        width: WH.width,
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
        padding: 10,
        borderRadius: 10
    },
    imgD: {
        height: 80,
        width: 80,
        borderRadius: 100,
    },
    dTitle: {
        fontSize: 17,
        fontWeight: "500",
        color: colors.TEXT_COLOR
    },
    type: {
        fontWeight: "500",
        fontSize: 15,
        color: colors.TEXTFADE_COLOR
    },
    countItem: {
        fontSize: 15,
        padding: 2,
        fontWeight: "bold"
    },
    Header: {
        backgroundColor: colors.PRIMARY,
        width: "100%",
        height: "25%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headSvg: {
        position: "absolute",
        alignSelf: "center",
        padding: 20
    },
    headSvg1: {
        position: "absolute",
        alignSelf: "center",
        top: 180
    },
    txt: {
        paddingHorizontal: 20,
        fontSize: 19,
        fontWeight: "500",
        color: colors.TEXT_COLOR,
        margin: 3,
        padding: 7
    },
    rowView: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20
    },
    rowTxt: {
        fontSize: 15,
        fontWeight: "500",
        color: colors.TEXTFADE_COLOR,
        marginLeft: 5
    },
    sTxt: {
        padding: 5,
        paddingHorizontal: 20,
        width: 250,
        color: colors.TEXTFADE_COLOR
    },
    s1Txt: {
        color: colors.TEXTFADE_COLOR,
        fontWeight: "500"
    },
    s2Txt: {
        color: colors.TEXTFADE_COLOR,
        paddingHorizontal: 20
    },
    colorTxtView: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    tip: {
        backgroundColor: colors.FIELD,
        textAlign: "center",
        borderWidth: 2,
        width: 75,
        fontSize: 15,
        height: 35,
        borderRadius: 5,
        paddingTop: 7
    },
    tipView:{
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingHorizontal: 22
    }

})

const SUMMARY = StyleSheet.create({
    container: container1
})

const PAYMENT = StyleSheet.create({
    container: container1,
    png: {
        marginRight: -10,
        marginLeft: -10
    },
    dollar: {
        fontWeight: "500",
        fontSize: 20,
        color: colors.TEXT_COLOR,
        textAlign: "center",
        padding: 20
    },
    switchView: {
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 130,
        marginTop: 5
    },
    ModelView: {
        backgroundColor: colors.WHITE,
        width: WH.width,
        borderRadius: 10,
        height: 380,
    },
    inContainer: {
        alignItems: "center",
        marginBottom: 30
    },
    italic: {
        margin: 12,
        width: 270,
        marginRight: 50,
        fontSize: 13
    },
    Login: {
        fontSize: 20,
        fontWeight: "600",
        color: colors.TEXT_COLOR,
        paddingTop: 5,

    },
    Field: {
        flex: 1,
    },
    FieldView: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colors.FIELD,
        width: WH.width,
        height: WH.height,
        paddingHorizontal: 10,
        borderRadius: 7,
        marginVertical: 8
    },
    dMethod: {

        paddingTop: 8,
        fontSize: 15,
        fontWeight: "500"
    }
})

export { MEAL_STYLE, PAYMENT, SUMMARY, ADRESS, ODERING, PRESS_STYLE, WH }