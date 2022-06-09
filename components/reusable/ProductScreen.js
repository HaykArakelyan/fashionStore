import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

import { LinearTextGradient } from 'react-native-text-gradient';

import IconFA from "react-native-vector-icons/FontAwesome";
import IconFA5 from "react-native-vector-icons/FontAwesome5";

import CustomButton from './CustomButton';
import CustomRadioButton from './CustomRadioButton';
import CustomText from './CustomText';

const sizes = ["S", "M", "L", "XL"];
const colors = ["#9EC1C1", "#DA2732", "#313131"];

function ProductScreen({ route, navigation }) {
    const { image, title, price, rating, description, } = route.params;

    const [isLiked, setIsLiked] = useState(false);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [selectedColor, setSelectedColor] = useState(colors[0]);


    const addToCart = async (size, color, product) => {
        console.log(`selected size: ${size}`);
        console.log(`selected color: ${color}`);
        console.log(`selected product: ${product}`);
        console.log("Added");
    }

    const handleLikeButtonPress = () => {
        setIsLiked(!isLiked);
    }

    const handleGoBack = () => {
        navigation.goBack();
        // because navigation.canGoBack() returns true,
        // while the headerLeft didnt appear
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.productBackground}
                source={{ uri: image }}
                resizeMode={"contain"}
            >

                <TouchableOpacity
                    style={styles.goBackButton}
                    onPress={handleGoBack}
                >
                    <IconFA5
                        name='chevron-left'
                        size={30}
                        color={"black"}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.likeButton}
                    onPress={handleLikeButtonPress}
                >
                    <IconFA
                        name={
                            isLiked
                                ? 'heart'
                                : 'heart-o'
                        }
                        size={30}
                        color={
                            isLiked
                                ? "red"
                                : null
                        }
                    />
                </TouchableOpacity>

            </ImageBackground>
            <View style={styles.productContent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.productContentHeader}>
                        <Text style={styles.productTitle}>
                            {title}
                        </Text>
                        <LinearTextGradient
                            colors={[
                                "#E54500CF",
                                "#FF5C00C9",
                                "#FF9921"
                            ]}
                            locations={[0, 0.5, 1]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                        >
                            <Text style={styles.productPrice}>
                                ${price}
                            </Text>
                        </LinearTextGradient>
                    </View>
                    <View
                        style={styles.productBanner}
                    >

                        <LinearTextGradient
                            colors={[
                                "#E54500CF",
                                "#FF5C00C9",
                                "#FF9921"
                            ]}
                            locations={[0, 0.5, 1]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text>
                                <IconFA
                                    name='star'
                                    size={14}
                                /> {rating.rate}
                            </Text>
                        </LinearTextGradient>
                        <Text
                            style={styles.productReviews}
                        > ({rating.count} reviews)
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.productDescription}>
                            Description
                        </Text>
                        <CustomText
                            text={description}
                            limit={200}
                            design={styles.productDescriptionText}
                        />
                    </View>
                    <View style={styles.productFooter}>
                        <View>
                            <Text style={styles.palletTitle}>Size</Text>
                            <View style={styles.sizePallet}>
                                {sizes.map((item) =>
                                    <CustomRadioButton
                                        hadnlePress={setSelectedSize}
                                        item={item}
                                        key={item}
                                        style={
                                            selectedSize === item
                                                ? styles.activeRadioButtonSize
                                                : styles.radioButton
                                        }
                                        text={item}
                                        textStyle={
                                            selectedSize === item
                                                ? styles.activeRadioButtonTextSize
                                                : styles.radioButtonText
                                        }
                                    />
                                )}
                            </View>
                        </View>
                        <View>
                            <Text style={styles.palletTitle}>
                                Color
                            </Text>
                            <View style={styles.colorPallet}>
                                {colors.map((item) =>
                                    <CustomRadioButton
                                        hadnlePress={setSelectedColor}
                                        item={item}
                                        key={item}
                                        style={
                                            selectedColor === item && styles.activeRadioButtonColor
                                        }
                                    />
                                )}
                            </View>
                        </View>
                    </View>
                    <CustomButton
                        handlePress={() => addToCart(selectedSize, selectedColor, title)}
                        styleButton={styles.customButtonStyle}
                        title={"Add To Cart"}
                    />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    productBackground: {
        flex: 0.5,
        justifyContent: "flex-end",
    },
    goBackButton: {
        backgroundColor: "#DADADA",
        borderRadius: 15,
        left: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        position: "absolute",
        top: 100,
    },
    likeButton: {
        backgroundColor: "#DADADA",
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        padding: 10,
        position: "absolute",
        right: 0,
        top: 100,
    },
    productContent: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 4,
        flex: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    productContentHeader: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    productTitle: {
        color: "#313131",
        flex: 1,
        fontSize: 20,
        fontWeight: "600",
    },
    productPrice: {
        fontSize: 28,
    },
    productBanner: {
        flexDirection: "row",
        paddingVertical: 20,
    },
    productReviews: {
        color: "#979797",
    },
    productDescription: {
        color: "#313131",
        fontSize: 16,
        fontWeight: "600",
        paddingVertical: 10,
    },
    productDescriptionText: {
        color: "#625C5C",
        fontWeight: "300",
    },
    productFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    sizePallet: {
        flexDirection: "row",
    },
    colorPallet: {
        flexDirection: "row",
    },
    palletTitle: {
        color: "#313131",
        fontSize: 16,
        fontWeight: "600",
        paddingVertical: 10,
    },
    activeRadioButtonSize: {
        backgroundColor: "#FE7825",
    },
    activeRadioButtonTextSize: {
        color: "#FFFFFF",
    },
    radioButton: {
        backgroundColor: "#FFFFFF",
        borderColor: "#DADADA",
        borderStyle: "solid",
        borderWidth: 2,
    },
    radioButtonText: {
        color: "#313131",
    },
    activeRadioButtonColor: {
        borderColor: "#FE7825",
        borderStyle: "solid",
        borderWidth: 2,
    },
    customButtonStyle: {
        backgroundColor: "#FE7825",
    }
})

export default ProductScreen;