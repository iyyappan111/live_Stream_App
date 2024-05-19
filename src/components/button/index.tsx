import React from "react";
import { TouchableOpacity, Text, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { hightPercentage, widthPercentage } from '../../screeeDimensions';
import Colors from "../../constants/colors";
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ButtonProps {
    title: string;
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
    style?: ViewStyle;
    textStyle?: any;
    onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, iconName, iconSize, iconColor, style, textStyle, onPress, ...restProps }) => {
    return (
        <TouchableOpacity style={[styles.touchableOpacityContainer, style]} onPress={onPress} {...restProps}>
            {iconName && (<AntDesign name={iconName} size={iconSize} color={iconColor || Colors.black} style={styles.iconStyle} />)}
            <Text style={[styles.textContainer, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchableOpacityContainer: {
        flexDirection:'row',
        height: hightPercentage(4),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.danger,
        marginVertical: hightPercentage(1),
        paddingHorizontal: widthPercentage(3),
        borderRadius: 25,
    },
    textContainer: {
        color: Colors.white,
        fontSize: hightPercentage(1.5),
        fontFamily: 'Roboto-Medium',
    },
    iconStyle: {
        marginRight: widthPercentage(2),
    },
});

export default Button;
