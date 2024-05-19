import React from 'react';
import { View, Image, Text, ViewStyle, ImageStyle, TextStyle, StyleSheet, StyleProp } from 'react-native';
import { ImageSource } from 'react-native-vector-icons/Icon';
import Button from '../button';
import { hightPercentage, widthPercentage } from '../../screeeDimensions';
import Colors from '../../constants/colors';

interface ChatViewProps {
    profileImage: ImageSource;
    name: string;
    message: string;
    containerStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    nameStyle?: StyleProp<TextStyle>;
    messageStyle?: StyleProp<TextStyle>;
    icon: ImageSource;
    iconStyle?: StyleProp<ImageStyle>;
    active: boolean;
    buttonPress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    buttonTextStyle?: StyleProp<TextStyle>;
    alignViewStyle?: StyleProp<ViewStyle>;
    twoTextAlignStyle?: StyleProp<ViewStyle>;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
}

const ChatView: React.FC<ChatViewProps> = ({
    profileImage,
    name,
    message,
    containerStyle,
    imageStyle,
    nameStyle,
    messageStyle,
    icon,
    iconStyle,
    active,
    buttonPress,
    buttonStyle,
    buttonTextStyle,
    alignViewStyle,
    twoTextAlignStyle,
    rightIconContainerStyle
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={[styles.alignView, alignViewStyle]}>
                <Image source={profileImage} resizeMode='cover' style={[styles.image, imageStyle]} />
                <View style={[styles.twoTextAlignStyle, twoTextAlignStyle]}>
                    <Text style={[styles.name, nameStyle]}>{name}</Text>
                    <Text style={[styles.message, messageStyle]}>{message}</Text>
                </View>
                <View style={[styles.rightIconContainer, rightIconContainerStyle]}>
                    {active ? (
                        <>
                            <Image source={icon} resizeMode='contain' style={[styles.iconStyle, iconStyle]} />
                            <Button title={'Book 1 to 1'} style={styles.button} textStyle={[styles.buttonText, buttonTextStyle]} onPress={buttonPress} />
                        </>
                    ) : null}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        marginVertical: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        color: Colors.white,
        fontSize: hightPercentage(2),
        fontFamily: 'Roboto-Medium',
    },
    message: {
        color: Colors.white,
        fontSize: hightPercentage(1.5),
        fontFamily: 'Roboto-Light',
    },
    alignView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: widthPercentage(95),
    },
    iconStyle: {
        width: widthPercentage(10),
        height: hightPercentage(5),
    },
    twoTextAlignStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    rightIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    button: {
        backgroundColor: Colors.yellow,
        padding: 5,
        borderRadius: 20,
        marginLeft: 10,
    },
    buttonText: {
        color: Colors.black,
        fontSize: 14,
    },
    chatAlignBottom: {
        marginBottom: hightPercentage(10)
    }
});

export default ChatView;
