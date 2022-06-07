import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import IconFA from "react-native-vector-icons/FontAwesome";
import IconEvil from "react-native-vector-icons/EvilIcons";

import ColorIcon from './ColorIcon';
import { LinearTextGradient } from 'react-native-text-gradient';

import { useNavigation } from '@react-navigation/native';


function ItemCard({ item }) {

    const navigation = useNavigation();

    const [isLiked, setIsLiked] = useState(false)

    const handleLikeButtonClick = () => {
        setIsLiked(!isLiked);
    }

    const handleItemPress = (product) => {
        navigation.navigate("ProductScreen", product);
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => handleItemPress(item)}
        >
            <View>
                <Image
                    resizeMode={"contain"}
                    source={require("../../assets/images/sweater.jpg")}
                    style={styles.itemImage}
                />
                <TouchableOpacity
                    onPress={() => handleLikeButtonClick()}
                    style={styles.likeButton}>
                    <IconFA
                        color={"white"}
                        name={
                            isLiked
                                ? "heart"
                                : 'heart-o'
                        }
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <View style={styles.itemSubtitle}>
                    <LinearTextGradient
                        colors={[
                            "#E54500CF",
                            "#FF5C00C9",
                            "#FF9921"
                        ]}
                        locations={[0, 0.85, 1]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <Text style={styles.itemPrice}>
                            ${item.price}
                        </Text>
                    </LinearTextGradient>
                    <View style={styles.itemColorPallet}>
                        <ColorIcon color={"#FFCD90"} />
                        <ColorIcon color={"#FF4F4F"} />
                        <ColorIcon color={"#313131"} />
                        {/* <ColorIcon
                            color={"white"}
                            icon={
                                <IconEvil
                                    name='plus'
                                    color={"black"}
                                    size={20}
                                    style={{
                                        marginLeft: -2  ,
                                    }}
                                />
                            }
                        /> */}

                        {/*When I use the implementation above,
                        the icon is not standing in the center of the Text Component.
                        It seemes like there is some margin.
                        */}
                        <IconEvil
                            name='plus'
                            size={23}
                            color={"black"}
                            style={styles.itemCollorPalletPlus}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#B6B6B6",
        borderRadius: 15,
        flex: 1,
        marginHorizontal: 3,
        marginVertical: 5,
        overflow: "hidden",
        paddingVertical: 10,
    },
    itemImage: {
        borderRadius: 15,
        height: 300,
        width: 160,
    },
    likeButton: {
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: "#B6B6B6",
        borderBottomLeftRadius: 15,
        justifyContent: "center",
        padding: 5,
        position: "absolute",
    },
    itemContent: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 5,
    },
    itemTitle: {
        color: "#313131",
        fontSize: 12,
        fontWeight: "500",
    },
    itemSubtitle: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemPrice: {
        fontSize: 18,
        fontWeight: "600",
    },
    itemColorPallet: {
        flexDirection: "row",
    },
    itemCollorPalletPlus: {
        alignSelf: "center",
    }
})

export default ItemCard;
