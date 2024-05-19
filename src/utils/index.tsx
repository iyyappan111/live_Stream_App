import { useEffect, useState } from 'react';
import { Keyboard, Dimensions } from 'react-native';

export const useKeyboardStatus = () => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
            const screenHeight = Dimensions.get('window').height;
            const keyboardHeight = event.endCoordinates.height;
            const offset = screenHeight - keyboardHeight;
            setKeyboardHeight(offset);
            setIsKeyboardOpen(true);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardHeight(0);
            setIsKeyboardOpen(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return { keyboardHeight, isKeyboardOpen };
};
