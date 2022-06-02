import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

import { useSelector, useDispatch } from 'react-redux';
import { setIsSkipped } from "../../store/guideReucer"
import { useNavigation } from "@react-navigation/native";

function StartScreen() {
    const data = useSelector((state) => state.getCarouselData.data);
    const { isSkipped } = useSelector((state) => state.isGuideSkipped)
    const [index, setIndex] = useState(0);

    const carouselRef = useRef();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    global.screenWidth = Dimensions.get("screen").width;

    if (isSkipped) {
        navigation.navigate("LoginScreen");
    } else {
        navigation.navigate("StartScreen");
    }


    const goNextPage = () => {
        setIndex(index + 1);
        carouselRef.current.snapToNext(index);
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
                    style={styles.carouselGradient}
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
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                data={data}
                renderItem={renderItem}
                onSnapToItem={index => setIndex(index)}
                inactiveSlideScale={1}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                dotStyle={styles.dotStyle}
                inactiveDotStyle={styles.inactiveDotStyle}
            />

            < View style={index === data.length - 1
                ? styles.alternativeButtons
                : styles.buttons
            }>
                {index !== data.length - 1
                    && <TouchableOpacity
                        style={styles.skipButtonContainer}
                        onPress={() => skipGuide()}
                    >
                        <Text style={styles.skipButton}>Skip</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity
                    style={styles.nextButtonContainer}
                    onPress={() => (index !== data.length - 1
                        ? goNextPage()
                        : skipGuide())
                    }
                >
                    <LinearGradient
                        colors={["#E54500CF", "#FF5C00C9", "#FF9921"]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 0 }}
                    >
                        {index === data.length - 1
                            ? <Text style={styles.nextButton}>Get Started</Text>
                            : <Text style={styles.nextButton}>Next</Text>
                        }
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
    carouselGradient: {
        flex: 1
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
        color: "#979797",
        fontSize: 18,
        fontWeight: "500",
        paddingBottom: 20,
        width: 270,
    },
    dotStyle: {
        backgroundColor: "#F77D24",
        borderRadius: 5,
        height: 10,
        marginHorizontal: -5,
        width: 10,
    },
    inactiveDotStyle: {
        backgroundColor: "#F77D24",
        height: 10,
        width: 10,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 20,
    },
    alternativeButtons: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    skipButtonContainer: {
        borderRadius: 15,
        overflow: "hidden",
    },
    skipButton: {
        color: "#FE7825",
        paddingHorizontal: 50,
        paddingVertical: 20,
        textAlign: "center",
    },
    nextButtonContainer: {
        borderRadius: 15,
        overflow: "hidden",
    },
    nextButton: {
        color: "#FFFFFF",
        paddingHorizontal: 50,
        paddingVertical: 20,
        textAlign: "center",
    },
})

export default StartScreen;
