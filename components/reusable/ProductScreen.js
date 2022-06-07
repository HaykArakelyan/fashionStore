import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';


import { LinearTextGradient } from 'react-native-text-gradient';
import IconFA from "react-native-vector-icons/FontAwesome";

import CustomButton from './CustomButton';
import CustomRadioButton from './CustomRadioButton';
import CustomText from './CustomText';


const sizes = ["S", "M", "L", "XL"];

function ProductScreen({ route, navigation }) {

    const [state, setRender] = useState(true);

    const [isLiked, setIsLiked] = useState(false);

    // const sizes = [
    //     {
    //         size: "S",
    //         isActive: true,
    //     },
    //     {
    //         size: "M",
    //         isActive: false,
    //     },
    //     {
    //         size: "L",
    //         isActive: false,
    //     },
    //     {
    //         size: "XL",
    //         isActive: false,
    //     },
    // ];

    const colors = [
        {
            color: "#9EC1C1",
            isActive: true,
        },
        {
            color: "#DA2732",
            isActive: false,
        },
        {
            color: "#313131",
            isActive: false,
        }
    ];

    const { image, title, price, rating, description, } = route.params;
    // console.log(image);

    const [selectedSize, setSelectedSize] = useState("S");
    // console.log(selectedSize);


    const handleSizeChange = (activeSize) => {
        for (let i = 0; i < sizes.length; i++) {
            if (sizes[i].size === activeSize) {
                sizes[i].isActive = true;
            } else {
                sizes[i].isActive = false;
            }
            // console.log(sizes[i].size + " - " + sizes[i].isActive);
        }
        // console.log("====================");
    }

    const handleColorChange = (activeColor) => {
        for (let i = 0; i < colors.length; i++) {
            if (colors[i].color === activeColor) {
                colors[i].isActive = true;
            } else {
                colors[i].isActive = false;
            }
            // console.log(colors[i].color + " - " + colors[i].isActive);
        }
        // console.log("====================");
    }

    const addToCart = () => {
        console.log("added");
    }

    const handleLikeButtonPress = () => {
        setIsLiked(!isLiked);
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.productBackground}
                source={{ width: 200, height: 200, uri: image }}
                resizeMode={"contain"}
            />
            <TouchableOpacity
                style={styles.likeButton}
                onPress={() => handleLikeButtonPress()}
            >
                <IconFA
                    name={isLiked ? 'heart' : 'heart-o'}
                    size={30}
                    color={isLiked ? "red" : null}
                />
            </TouchableOpacity>


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
                                        key={item}
                                        isActive={selectedSize === item}
                                        hadnlePress={setSelectedSize}
                                        // setRender={(bool) => setRender(bool)}// render?
                                        text={item}
                                        textColor={"#313131"}
                                        activeTextColor={"#FFFFFF"}
                                        bgColor={"#FFFFFF"}
                                        activeBgColor={"#FE7825"}
                                        activeBorderColor={"#FE7825"}
                                        borderColor={"#DADADA"}
                                    />
                                )}
                            </View>
                        </View>
                        <View>
                            <Text style={styles.palletTitle}>Color</Text>
                            <View style={styles.colorPallet}>
                                {colors.map((item) =>
                                    <CustomRadioButton
                                        key={item.color}
                                        isActive={item.isActive}
                                        bgColor={item.color}
                                        activeBgColor={item.color}
                                        borderColor={"white"}
                                        activeBorderColor={"red"}
                                        hadnlePress={(activeColor) => handleColorChange(activeColor)}
                                    />
                                )}
                            </View>
                        </View>
                    </View>
                    <CustomButton
                        title={"Add To Cart"}
                        buttonColor={"#FE7825"}
                        textColor={"#FFFFFF"}
                        handlePress={() => addToCart()}
                    />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    productBackground: {
        flex: 0.5,
        justifyContent: "flex-end",
    },
    likeButton: {
        position: "absolute",
        backgroundColor: "#DADADA",
        right: 0,
        top: 100,
        padding: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    productContent: {
        flex: 0.5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
        elevation: 4,
    },
    productContentHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    productTitle: {
        color: "#313131",
        fontWeight: "600",
        fontSize: 20,//--24x
        flex: 1,
    },
    productPrice: {
        fontSize: 28,//--32
    },
    productBanner: {
        flexDirection: "row",
        paddingVertical: 20,
    },
    productReviews: {
        color: "#979797",
    },
    productDescription: {
        fontSize: 16,
        fontWeight: "600",
        color: "#313131",
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
        flexDirection: "row"
    },
    colorPallet: {
        flexDirection: "row"
    },
    palletTitle: {
        fontSize: 16,
        color: "#313131",
        fontWeight: "600",
        paddingVertical: 10,
    }
})

export default ProductScreen;