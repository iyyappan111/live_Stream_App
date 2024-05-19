import React, { useState } from "react";
import LivestreamScreen from "./screen";
import { Images } from "../../constants/images";
import Colors from "../../constants/colors";
import { Alert, ImageSourcePropType } from "react-native";
const Livestream: React.FC = () => {
    const [activeButton, setActiveButton] = useState<string>('Live');
    const [isHasPressMenu, setIsHasPressMenu] = useState<boolean>(false);
    const [comment, setComment] = useState<string>('');
    const [chatId, setChatId] = useState<number>(1);
    const [chatData, setChatData] = useState<{
        id: number;
        iconName: ImageSourcePropType;
        name: string;
        message: string;
        color: string;
        active: boolean;
    }[]>([]);

    const handleInput = (text: string) => {
        setComment(text);
    };
    const menuHandler = () => {
        setIsHasPressMenu(!isHasPressMenu)
    }
    const buttonPress = () => {
        Alert.alert("1 to 1 booked")
    }

    const handleSendPress = () => {
        if (comment) {
            const newChatData = chatData.map(item => ({ ...item, active: false }));
            const newChatId = chatId + 1;
            const chatObject = {
                id: newChatId,
                iconName: Images.profileImage,
                name: "Augustina",
                message: comment,
                color: Colors.black,
                active: true,
            };
            newChatData.push(chatObject);
            setChatData(newChatData);
            setChatId(newChatId);
            setComment('')
        }
    };
    const handleIconPress = (val: any) => {

    }
    return (
        <LivestreamScreen
            setActiveButton={setActiveButton}
            activeButton={activeButton}
            handleInput={handleInput}
            comment={comment}
            handleSendPress={handleSendPress}
            chatData={chatData}
            handleIconPress={handleIconPress}
            menuHandler={menuHandler}
            buttonPress={buttonPress}
            isHasPressMenu={isHasPressMenu}
        />
    );
};

export default Livestream;
