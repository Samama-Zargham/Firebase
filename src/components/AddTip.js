import React, { Component, } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import colors from '../theme/colors';


export default class Option extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOption: this.props.options[0],
        };
    }
    updateActiveOption = (activeOption) => {
        this.setState({
            activeOption,
        });
    };
    render() {
        return (
            <View
                style={{
                    justifyContent: "space-between",
                    flexDirection: 'row',
                    paddingHorizontal: 22
                }}
            >
                {this.props.options.map((option, index) => (
                    <TouchableOpacity
                    activeOpacity={0.7}
                        key={index}
                        onPress={() => {
                            this.props.onChange(option);
                            this.updateActiveOption(option);
                        }}
                    >
                        <Text
                            style={{
                                backgroundColor: colors.FIELD,
                                textAlign: "center",
                                borderColor: this.state.activeOption === option ? colors.PRIMARY : colors.FIELD,
                                borderWidth: 2,
                                width: 75,
                                fontSize: 15,
                                height: 35,
                                borderRadius: 5,
                                paddingTop: 7
                            }}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}