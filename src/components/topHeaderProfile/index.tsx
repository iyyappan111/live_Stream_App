import React from 'react';
import { View, Image, Text, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { ImageSource } from 'react-native-vector-icons/Icon';
import  Colors  from '../../constants/colors'
import { hightPercentage, widthPercentage } from '../../screeeDimensions';

interface TopHeaderProfileCardProps {
    profileImage: ImageSource;
    name: string;
    followers: string;
    containerStyle?: ViewStyle;
    imageStyle?: ImageStyle;
    nameStyle?: TextStyle;
    followersStyle?: TextStyle;
    TextViewStyle?:ViewStyle
}

const TopHeaderProfileCard: React.FC<TopHeaderProfileCardProps> = ({
    profileImage,
    name,
    followers,
    containerStyle,
    imageStyle,
    nameStyle,
    followersStyle,
    TextViewStyle
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Image source={profileImage} resizeMode='cover' style={[styles.image, imageStyle]} />
            <View style={[styles.twoTextAlignStyle,TextViewStyle]}>
                <Text style={[styles.name, nameStyle]}>{name}</Text>
                <Text style={[styles.followers, followersStyle]}>{followers}</Text>
            </View>
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    } as ViewStyle,
    image: {
        width: 30,
        height: 30,
        borderRadius: 1000,
    } as ImageStyle,
    name: {
        fontSize: hightPercentage(2),
        color: Colors.white,
        fontFamily: 'Roboto-Medium',
    } as TextStyle,
    followers: {
        fontSize: hightPercentage(1.5),
        color: Colors.white,
        fontFamily: 'Roboto-Light',
    } as TextStyle,
    twoTextAlignStyle :{
paddingHorizontal:widthPercentage(1)
    } as ViewStyle,
};

export default TopHeaderProfileCard;
