import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import IconAD from "react-native-vector-icons/AntDesign";

import ColorIcon from './ColorIcon';

import { LinearTextGradient } from 'react-native-text-gradient';
import { useNavigation } from '@react-navigation/native';

const colors = [
    {
        color: "#FFCD90"
    },
    {
        color: "#FF4F4F"
    },
    {
        color: "#313131"
    },
    {
        color: "#FFFFFF",
        iconName: "pluscircleo"
    }
]

function ItemCard({ item }) {

    const navigation = useNavigation()

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
                    source={{ uri: item.image }}
                    style={styles.itemImage}
                />
                <TouchableOpacity
                    onPress={() => handleLikeButtonClick()}
                    style={styles.likeButton}>
                    <IconAD
                        color={"#313131"}
                        name={
                            isLiked
                                ? "heart"
                                : 'hearto'
                        }
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.itemContent}>
                <Text style={styles.itemTitle}>
                    {item.title}
                </Text>
                <View style={styles.itemSubtitle}>
                    <View>
                        <Text style={styles.itemPrice}>
                            ${item.price}
                        </Text>
                    </View>
                    <View style={styles.itemColorPallet}>
                        {colors.map((item) =>
                            <ColorIcon
                                key={item.color}
                                styleColor={stylesArgs({ color: item.color }).colorIcons}
                                title={<IconAD
                                    name={item?.iconName}
                                    color={"black"}
                                    size={14}
                                />}
                            />)}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const stylesArgs = ({ color }) => StyleSheet.create({
    colorIcons: {
        backgroundColor: color,
    }
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 5,
        flex: 1,
        marginHorizontal: 2,
        marginVertical: 5,
        overflow: "hidden",
        padding: 10,
    },
    itemImage: {
        borderRadius: 15,
        height: 300,
        width: 170,
    },
    likeButton: {
        alignItems: "center",
        alignSelf: "flex-end",
        borderBottomLeftRadius: 15,
        justifyContent: "center",
        padding: 5,
        position: "absolute",
    },
    itemContent: {
        flex: 1,
        justifyContent: "space-between",
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
        flex: 0.5,
        color: "#FE7825",
    },
    itemColorPallet: {
        flexDirection: "row",
    },
    itemCollorPalletPlus: {
        alignSelf: "center",
    }
})

export default ItemCard;
