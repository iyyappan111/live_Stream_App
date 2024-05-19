import React from 'react';
import { View, Image, StyleSheet, ImageStyle, ViewStyle } from 'react-native';

interface ImageFrameProps {
    source: any;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    style?: ViewStyle;
    imageStyle?: ImageStyle;
}

const ImageFrame: React.FC<ImageFrameProps> = ({ source, resizeMode = 'cover', style, imageStyle }) => {
    return (
        <View style={[styles.container, style]}>
            <Image source={source} resizeMode={resizeMode} style={[styles.image, imageStyle]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default React.memo(ImageFrame);
