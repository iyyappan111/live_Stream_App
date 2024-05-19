import React from 'react';
import { TouchableOpacity, Text, TextStyle, ViewStyle } from 'react-native';
import { hightPercentage, widthPercentage } from '../../screeeDimensions';
import Colors from '../../constants/colors';
import fonts from '../../constants/fonts';
interface SliderButtonProps {
    text: string;
    onPress: () => void;
    active: boolean;
    containerStyle?: ViewStyle;
    textStyle?: TextStyle;
}

const SliderButton: React.FC<SliderButtonProps> = ({ text, onPress, active, containerStyle, textStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, active && styles.activeButtonContainer, containerStyle]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonContainer: {
        width: widthPercentage(31.5),
        height: hightPercentage(5),
        justifyContent: 'space-evenly',
        alignItems: 'center',
    } as ViewStyle,
    buttonText: {
        fontSize: hightPercentage(2),
        color: Colors.white,
        fontFamily: 'Roboto-Medium',
    } as ViewStyle,
    activeButtonContainer: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.yellow,
    } as ViewStyle,
};

export default React.memo(SliderButton);
