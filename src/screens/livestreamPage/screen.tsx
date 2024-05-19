import React, { useRef } from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView, KeyboardAvoidingView, FlatList, ImageSourcePropType } from 'react-native';
import { hightPercentage, widthPercentage } from "../../screeeDimensions";
import { Images } from '../../constants/images';
import Colors from '../../constants/colors';
import Button from '../../components/button';
import FeatureIconComponent from '../../components/featureIconComponent';
import LikeButton from '../../components/likeButtonComponent';
import SliderButton from '../../components/sliderButton';
import InputComponent from '../../components/inputComponent';
import TopHeaderProfileCard from '../../components/topHeaderProfile';
import { sliderButton, actionButtons, likeButtons, futureButtons, surpriseBoxData, circleIcons } from "../../constants/data"
import ImageFrame from '../../components/imageFrame';
import ChatView from '../../components/chatViewComponent';
import { Icons } from '../../constants/icons';
import SurpriseBoxComponent from '../../components/supriseBoxComponent';
import CircleIconComponent from '../../components/circleIconComponent';
import MenuIcon from '../../components/menuIconComponent';
import { useKeyboardStatus } from '../../utils';
interface LivestreamScreenProps {
    setActiveButton: (val: string) => void;
    activeButton: string;
    handleInput: (text: string) => void;
    comment: string;
    handleSendPress: () => void;
    menuHandler: () => void
    buttonPress: () => void
    isHasPressMenu: boolean
    handleIconPress: (val: {
        id: number, name: string, size: number, color: string, isShow: boolean
    }) => void
    chatData: ChatData[];
}
interface ChatData {
    id: number;
    iconName: ImageSourcePropType;
    name: string;
    message: string;
    color: string;
    active: boolean;
}
const LivestreamScreen: React.FC<LivestreamScreenProps> = ({
    setActiveButton,
    activeButton,
    handleInput,
    comment,
    handleSendPress,
    chatData,
    handleIconPress,
    menuHandler,
    buttonPress,
    isHasPressMenu
}) => {
    const { keyboardHeight, isKeyboardOpen } = useKeyboardStatus();
    const listRef = useRef<FlatList<ChatData>>(null);
    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={Images.backgroundImage} resizeMode='cover' style={styles.container}>
                <KeyboardAvoidingView behavior="padding" style={styles.keyboardContainer} >
                    <View style={styles.pageWrapperStyle}>
                        <FlatList
                            data={sliderButton}
                            renderItem={({ item }) => (
                                <SliderButton
                                    text={item.text}
                                    onPress={() => setActiveButton(item.key)}
                                    active={activeButton === item.key}
                                />
                            )}
                            keyExtractor={(item: any) => item.id}
                            horizontal
                            scrollEnabled={false}
                            contentContainerStyle={styles.topHeaderContainer}
                        />
                        {!isKeyboardOpen ? (<View style={styles.topHeaderprofileContainer}>
                            <TopHeaderProfileCard
                                profileImage={Images.profileImage}
                                name={"Iman Esmail"}
                                followers={"100k"}
                                containerStyle={styles.headerProfile}
                                imageStyle={styles.profileCircle}
                            />

                            <FlatList
                                data={actionButtons}
                                renderItem={({ item }) => (
                                    <Button
                                        title={item.title}
                                        style={{ backgroundColor: item.backgroundColor }}
                                        iconName={item.iconName}
                                        iconSize={item.iconSize}
                                        iconColor={item.iconColor}
                                        textStyle={item.textColor}
                                    />
                                )}
                                keyExtractor={(item: any) => item.id}
                                horizontal
                                scrollEnabled={false}
                                contentContainerStyle={styles.topButtonContainer}
                            />
                        </View>) : null}

                        {!isKeyboardOpen ? (<FlatList
                            data={likeButtons}
                            renderItem={({ item }) => (
                                <LikeButton
                                    iconName={item.iconName}
                                    iconSize={item.iconSize}
                                    iconColor={item.iconColor}
                                    text={item.text}
                                    containerStyle={styles.likeStyle}
                                    textStyle={styles.likeTextStyle}
                                />
                            )}
                            keyExtractor={(item: any) => item.id}
                            horizontal
                            scrollEnabled={false}
                            contentContainerStyle={styles.likeMainContainer}
                        />) : null}
                        {!isKeyboardOpen ? (<View style={styles.middleAlinStyle}>
                            <FlatList
                                data={futureButtons}
                                renderItem={({ item }) => (
                                    <FeatureIconComponent
                                        name={item.name}
                                        size={item.size}
                                        color={item.color}
                                        style={styles.circleIconStyle}

                                    />
                                )}
                                keyExtractor={(item: any) => item.id}
                                scrollEnabled={false}
                                contentContainerStyle={styles.middleIconContainer}
                            />
                            <View style={styles.liveImageAlignView}>
                                <ImageFrame
                                    source={Images.profileImage}
                                    resizeMode={"cover"}
                                    imageStyle={styles.liveImageViewframe}
                                />
                            </View>
                        </View>) : null}

                        <View style={styles.chatView}>
                            <FlatList
                                data={chatData}
                                renderItem={({ item }) => (
                                    <ChatView
                                        profileImage={item.iconName}
                                        name={item.name}
                                        message={item.message}
                                        containerStyle={styles.livestreamProfile}
                                        imageStyle={styles.profileCircle}
                                        icon={Icons.speakerIcon}
                                        active={item.active}
                                        buttonPress={buttonPress}
                                        nameStyle={item.active ? styles.activeChatColor : styles.inActiveChatColor}
                                        messageStyle={item.active ? styles.activeChatColor : styles.inActiveChatColor}
                                    />
                                )}
                                keyExtractor={(item) => item.id.toString()}
                                showsVerticalScrollIndicator={false}
                                ref={listRef}
                                onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: true })}
                                onLayout={() => listRef.current?.scrollToEnd({ animated: true })}
                            />
                        </View>
                        <View style={styles.flatListSurpriseBoxScrollStyle}>
                            {!isKeyboardOpen ? (<FlatList
                                data={surpriseBoxData}
                                renderItem={({ item }) => {
                                    return (
                                        <SurpriseBoxComponent
                                            iconName={item.iconName}
                                            iconSize={item.iconSize}
                                            iconColor={item.iconColor}
                                            text={item.text}
                                            containerStyle={styles.surpriseBoxStyle}
                                            textStyle={styles.likeTextStyle}
                                        />
                                    )
                                }}
                                keyExtractor={(item: any) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />) : null}

                            <View style={styles.bottomAliment}>
                                <InputComponent
                                    style={styles.inputContainer}
                                    textInputStyle={styles.textInputStyle}
                                    placeholder="Say...Something"
                                    placeholderTextColor={Colors.white}
                                    onChangeText={handleInput}
                                    value={comment}
                                    keyboardType='default'
                                    returnKeyType='done'
                                    iconName="send"
                                    iconSize={13}
                                    iconColor={Colors.yellow}
                                    onSendPress={handleSendPress}
                                    onSubmitEditing={handleSendPress}
                                />

                                <View style={styles.circleIconFlatListStyle}>
                                    {!isHasPressMenu ? (
                                        <FlatList
                                            data={circleIcons}
                                            renderItem={({ item }) => (
                                                <CircleIconComponent
                                                    name={item.name}
                                                    size={item.size}
                                                    color={item.color}
                                                    style={item.id === 4 ? styles.menuStyle : styles.circleIconComponentStyle}
                                                    isShow={item.isShow}
                                                    onPress={() => handleIconPress(item)}
                                                />
                                            )}
                                            horizontal
                                            keyExtractor={(item) => item.id.toString()}
                                            contentContainerStyle={styles.circleIconFlatListStyle}
                                        />
                                    ) : null}
                                </View>
                                <MenuIcon name='more-vertical' size={20} color={Colors.white} onPress={menuHandler} style={styles.menuTouchableStyle} />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between',

    },
    topHeaderContainer: {
        flexDirection: 'row',
        width: widthPercentage(95),
        height: hightPercentage(8),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: widthPercentage(30),
        height: hightPercentage(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeButtonContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.black
    },
    profileCircle: {
        width: 30,
        height: 30,
        borderRadius: 1000,
    },
    livestreamProfile: {
        flexDirection: 'row',
        width: widthPercentage(95),
        justifyContent: 'space-between',
        alignItems: "center",
    },
    headerProfile: {
        flexDirection: 'row',
        width: widthPercentage(35),
        height: hightPercentage(5),
        justifyContent: 'flex-start',
        alignItems: "center",
    },
    topButtonContainer: {
        flexDirection: 'row',
        width: widthPercentage(60),
        height: hightPercentage(5),
        justifyContent: 'space-between',
        alignItems: "center",
    },
    topHeaderprofileContainer: {
        flexDirection: 'row',
        width: widthPercentage(95),
        height: hightPercentage(9),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    likeStyle: {
        width: widthPercentage(15),
        height: hightPercentage(3.5),
        justifyContent: 'space-around',
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flexDirection: 'row',
        borderRadius: 20,
    },

    likeTextStyle: {
        color: Colors.white,
        fontSize: hightPercentage(1.5),
        fontFamily: 'Roboto-Medium',
    },
    surpriseBoxStyle: {
        width: widthPercentage(27),
        height: hightPercentage(4),
        justifyContent: 'space-around',
        alignItems: "center",
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.yellow,
        marginHorizontal: widthPercentage(1.5),
    },
    likeMainContainer: {
        width: widthPercentage(50),
        height: hightPercentage(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    circleIconStyle: {
        width: 35,
        height: 35,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        marginVertical: hightPercentage(1),

    },
    middleIconContainer: {
        width: widthPercentage(10),
    },
    inputContainer: {
        width: widthPercentage(50),
        height: hightPercentage(4.5),
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.yellow,
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    textInputStyle: {
        width: widthPercentage(40),
        height: hightPercentage(5),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        fontSize: hightPercentage(1.5),
        color: Colors.white,
        fontFamily: 'Roboto-Medium',
    },
    profileCardName: {
        fontSize: 16,
        color: Colors.white,
    },
    profileCardFollowers: {
        fontSize: 14,
        color: Colors.gray,
    },
    touchableOpacityContainer: {
        flexDirection: 'row',
        width: widthPercentage(20),
        height: hightPercentage(4),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        marginVertical: hightPercentage(1),
        paddingHorizontal: widthPercentage(3),
        borderRadius: 20
    },
    liveImageView: {
        width: widthPercentage(95),
        height: hightPercentage(30),
        justifyContent: "space-between",
        alignItems: 'flex-start',
        flexDirection: 'row',

    },
    liveImageViewframe: {
        width: widthPercentage(25),
        height: hightPercentage(15),
        justifyContent: "center",
        alignItems: 'flex-start',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.yellow
    },
    liveImageAlignView: {
        justifyContent: 'flex-end',
    },
    chatView: {
        width: widthPercentage(95),
        height: hightPercentage(35),
        justifyContent: 'center',
        alignItems: 'center',

    },
    middleAlinStyle: {
        flexDirection: 'row',
        height: hightPercentage(25),
        alignItems: 'flex-end'
    },
    middleIconViewContainer: {
        marginVertical: hightPercentage(1),
    },
    menuStyle: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleIconComponentStyle: {
        width: 35,
        height: 35,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.yellow
    },
    flatListSurpriseBoxStyle: {
        width: widthPercentage(95),
        height: hightPercentage(10),
        justifyContent: "flex-start",
        alignItems: "center"
    },
    bottomAliment: {
        flexDirection: 'row',
        width: widthPercentage(96),
        height: hightPercentage(5),
        marginBottom: hightPercentage(2),
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    circleIconFlatListStyle: {
        width: widthPercentage(40),
        height: hightPercentage(4.5),
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    activeChatColor: {
        color: Colors.yellow
    },
    inActiveChatColor: {
        color: Colors.white
    },
    flatListSurpriseBoxScrollStyle: {
        height: hightPercentage(12), width: widthPercentage(96),
    },
    keyboardContainer: {
        backgroundColor: 'transparent'
    },
    scrollViewContainer: {
        flex: 1
    },
    menuTouchableStyle: {
        width: widthPercentage(6),
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageWrapperStyle: {
        flex: 1, justifyContent: "center", alignItems: 'flex-start', marginHorizontal: widthPercentage(2.5)
    }
});

export default LivestreamScreen;
