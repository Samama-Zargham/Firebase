import { Picker } from '@react-native-picker/picker';
import colors from '../theme/colors';
import { View, } from 'react-native'
import React,{useState} from 'react'
import { WH } from '../styles/AllStyles';
const PICKER = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={{
            marginHorizontal: 20,
            marginVertical: 10,
            width: WH.width,
            backgroundColor: colors.FIELD,
            borderRadius: 10,
            height:46,justifyContent:"center"
        }}>
            <Picker
                style={{ color: colors.TEXTFADE_COLOR, }}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label={props.label} value="java" />
                <Picker.Item label={props.label1} value="js" />
            </Picker>
        </View>
    )
}

export { PICKER }