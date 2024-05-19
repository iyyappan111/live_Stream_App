import React from 'react';
import { View, Text, TextStyle, ViewStyle } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Colors from "../../constants/colors"; 
import { hightPercentage, widthPercentage } from '../../screeeDimensions';

interface SurpriseBoxProps {
    iconName: string;
    iconSize?: number;
    iconColor?: string;
    text: string;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
}

const SurpriseBoxComponent: React.FC<SurpriseBoxProps> = ({
    iconName,
    iconSize = 20,
    iconColor = Colors.yellow,
    text,
    containerStyle,
    textStyle,
}) => {
    return (
        <View style={[defaultContainerStyle, containerStyle]}>
            {iconName && (<FontAwesome6 name={iconName} size={iconSize} color={iconColor} />)}
            {text && (<Text style={[defaultTextStyle, textStyle]}>{text}</Text>)}
        </View>
    );
};

const defaultContainerStyle: ViewStyle = {
    width: widthPercentage(17),
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

export default SurpriseBoxComponent;
