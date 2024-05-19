import React from 'react';
import { View, ViewStyle, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

interface CircleIconProps {
    name: string;
    size: number;
    color: string;
    style?: ViewStyle;
    isShow: boolean;
    onPress?: () => void; 
}

const CircleIconComponent: React.FC<CircleIconProps> = ({ name, size, color, style, isShow, onPress }) => {
    const iconProps = { name, size, color };
    const Icon = determineIconComponent(name);

    return (
        isShow ? (
            <TouchableOpacity style={[defaultStyle, style]} onPress={onPress}>
                <Icon {...iconProps} />
            </TouchableOpacity>
        ) : null
    );
};

const determineIconComponent = (name: string) => {
    switch (name) {
        case 'videocamera':
        case 'calendar':
        case 'gift':
            return AntDesign;
        case 'more-vertical':
            return Feather;
        default:
            return Ionicons;
    }
};

const defaultStyle: ViewStyle = {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
};

export default CircleIconComponent;
