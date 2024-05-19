import React from 'react';
import { View, Text, TextStyle, ViewStyle, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from "../../constants/colors";
import { hightPercentage, widthPercentage } from '../../screeeDimensions';

interface LikeButtonProps {
    iconName: string;
    iconSize?: number;
    iconColor?: string;
    text: string;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
    onPress?: () => void
}

const LikeButton: React.FC<LikeButtonProps> = ({
    iconName,
    iconSize = 20,
    iconColor = Colors.yellow,
    text,
    containerStyle,
    textStyle,
    onPress
}) => {
    return (
        <TouchableOpacity style={[defaultContainerStyle, containerStyle]} onPress={onPress}>
            {iconName && (<AntDesign name={iconName} size={iconSize} color={iconColor} />)}
            {text && (<Text style={[defaultTextStyle, textStyle]}>{text}</Text>)}
        </TouchableOpacity>
    );
};

const defaultContainerStyle: ViewStyle = {
    width: widthPercentage(15),
    height: hightPercentage(4),
    justifyContent: 'space-around',
    alignItems: "center",
    backgroundColor: '#707070',
    flexDirection: 'row',
    paddingHorizontal: widthPercentage(1),
    borderRadius: 20,

};

const defaultTextStyle: TextStyle = {
    color: Colors.white
};

export default LikeButton;
