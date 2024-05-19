import React from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface MenuIconProps extends TouchableOpacityProps {
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
    name: string;
    opacity?: number;
    onPress: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ name, size = 20, color = 'black', style, opacity = 0.7, onPress, ...rest }) => {
    return (
        <TouchableOpacity onPress={onPress} {...rest}>
            <Feather
                name={name}
                size={size}
                color={color}
                style={[styles.icon, style]}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    
    icon: {

    },
});

export default MenuIcon;
