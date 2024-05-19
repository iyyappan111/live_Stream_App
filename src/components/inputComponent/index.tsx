import React, { memo } from 'react';
import { TextInput, StyleSheet, TextInputProps, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { hightPercentage, widthPercentage } from '../../screeeDimensions';
import Colors from '../../constants/colors';

interface InputComponentProps extends TextInputProps {
    style?: object;
    textInputStyle?: object;
    onSendPress?: () => void;
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({
    style,
    textInputStyle,
    onSendPress,
    iconName,
    iconSize = 25,
    iconColor = Colors.black,
    value,
    ...props
}) => {
    return (
        <View style={[styles.inputContainer, style]}>
            <TextInput
                style={[styles.textInputStyle, textInputStyle]}
                {...props}
                value={value}
            />
            {iconName && (
                <TouchableOpacity onPress={onSendPress}>
                    <FontAwesome
                        name={iconName}
                        size={iconSize}
                        color={iconColor}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: widthPercentage(50),
        height: hightPercentage(7),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: widthPercentage(3),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.yellow,
    },
    textInputStyle: {
        width: widthPercentage(40),
        height: hightPercentage(7),
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default memo(InputComponent);
