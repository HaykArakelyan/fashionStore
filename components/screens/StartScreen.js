import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

import { useSelector, useDispatch } from 'react-redux';
import { setIsSkipped } from "../../store/guideReucer"
import { useNavigation } from "@react-navigation/native";

function StartScreen(props) {
    const data = useSelector((state) => state.getCarouselData.data);
    const { isSkipped } = useSelector((state) => state.isGuideSkipped)
    const [index, setIndex] = useState(0);

    const carouselRef = useRef();
    const navigation = useNavigation();
    const dispatch = useDispatch();


    if (isSkipped) {
        navigation.navigate("LoginScreen");
    } else {
        navigation.navigate("StartScreen");
    }


    const goNextPage = () => {
        setIndex(index + 1);
        carouselRef.current.snapToNext(index);
    }

    const handleGetStartedPress = () => {
        dispatch(setIsSkipped())
    }

    const skipGuide = () => {
        dispatch(setIsSkipped())
    }

    function renderItem({ item }) {
        return (
            <ImageBackground
                source={item.image}
                style={styles.carouselBackgroundContainer}

            >
                <LinearGradient
                    colors={[
                        "rgba(255, 255, 255, 0)",
                        "rgba(255, 255, 255, 1)"
                    ]}
                    locations={[0, 0.7]}
                    style={{ flex: 1 }}
                >
                    <View style={styles.carouselItemTextContainer}>
                        <Text style={styles.carouselItemTitle}>{item.title} <Text style={styles.carouselItemKeyWord}>{item.keyWord}</Text></Text>
                        <Text style={styles.carouselItemSubTitle}>{item.subTitle}</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        )
    }
    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                pagingEnabled
                sliderWidth={Dimensions.get("screen").width}
                itemWidth={Dimensions.get("screen").width}
                data={data}
                renderItem={renderItem}
                onSnapToItem={index => setIndex(index)}
                inactiveSlideScale={1}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: -5,
                    backgroundColor: "#F77D24",
                }}
                inactiveDotStyle={{
                    backgroundColor: "#F77D24",
                    width: 10,
                    height: 10,
                }}
            />

            < View style={
                index === data.length - 1
                    ? styles.alternativeButtons
                    : styles.buttons
            }>
                {index !== data.length - 1
                    && <TouchableOpacity
                        style={styles.skipButtonContainer}
                        onPress={() => skipGuide()}
                    >
                        <Text style={styles.skipButton}>Skip</Text>
                    </TouchableOpacity>}
                <TouchableOpacity
                    style={styles.nextButtonContainer}
                    onPress={() => (
                        index !== data.length - 1
                            ? goNextPage()
                            : skipGuide())
                    }
                >
                    <LinearGradient
                        colors={["#E54500CF", "#FF5C00C9", "#FF9921"]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 0 }}
                    >
                        {index === 2 ?
                            <Text style={styles.nextButton}>Get Started</Text>
                            :
                            <Text style={styles.nextButton}>Next</Text>}
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carouselBackgroundContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    carouselItemTextContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
    },
    carouselItemTitle: {
        color: "#313131",
        fontSize: 40,
        fontWeight: "700",
    },
    carouselItemKeyWord: {
        color: "#F77D24",
    },
    carouselItemSubTitle: {
        width: 270,// TBC
        color: "#979797",
        fontSize: 18,
        fontWeight: "500",
        paddingBottom: 20
    },
    buttons: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    alternativeButtons: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    skipButtonContainer: {
        borderRadius: 15,
        overflow: "hidden"
    },
    skipButton: {
        paddingVertical: 20,
        paddingHorizontal: 50,
        color: "#FE7825",
        textAlign: "center",
    },
    nextButtonContainer: {
        borderRadius: 15,
        overflow: "hidden"
    },
    nextButton: {
        paddingVertical: 20,
        paddingHorizontal: 50,
        color: "#FFFFFF",
        textAlign: "center",
    },
})

export default StartScreen;

// 1. some distance decrease from the top of the carousel
// 2. Redux will throw lots of errors here ???
// 3. referance to the carousel in the function component ()