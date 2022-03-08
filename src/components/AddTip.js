import React, { Component, } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { ODERING } from '../styles/AllStyles';

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
                style={ODERING.tipView}>
                {this.props.options.map((option, index) => (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={index}
                        onPress={() => {
                            this.props.onChange(option);
                            this.updateActiveOption(option);
                        }}>
                        <Text
                            style={[ODERING.tip, { borderColor: this.state.activeOption === option ? colors.PRIMARY : colors.FIELD, }]}>
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}