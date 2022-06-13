import React, { useState, useEffect } from 'react';

import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconFA from "react-native-vector-icons/FontAwesome5";

import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import { useGetProductsQuery } from "../../store/products.js";

import CustomButton from "../reusable/CustomButton.js";
import IconInput from '../reusable/IconInput';
import ItemCard from '../reusable/ItemCard';
import SquaredcircleBackground from '../reusable/SquaredcircleBackground';



function HomeScreen() {

    const [products, setProducts] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [sortType, setSortType] = useState("Women");

    const sortTypes = ["Women", "Men", "Other"];

    const { data, error, isLoading, isSuccess, isError } = useGetProductsQuery()
    useEffect(() => {
        if (isSuccess && data) {
            setProducts(data);
        }
    }, [])
    if (isError) {
        console.log("error occured", error.message);
    }

    const sortData = () => {
        if (sortType === "Women") {
            return products.filter((elem) => elem.category === "women's clothing")
        } else if (sortType === "Men") {
            return products.filter((elem) => elem.category === "men's clothing")
        } else {
            return products.filter((elem) => elem.category !== "women's clothing" && elem.category !== "men's clothing")
        }
    }

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const renderItem = ({ item }) => {
        return (
            <ItemCard
                item={item}
            />
        )
    }

    const hadnleSortTypeUpdate = (item) => {
        setSortType(item);
        setIsMenuOpen(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.screenHeader}>
                <SquaredcircleBackground
                    styleBgColor={styleWithProps({ color: "white" }).iconBackgroundColor}
                    title={
                        <Icon
                            name={"account"}
                            size={30}
                        />}
                    titleColor={styleWithProps({ textColor: "#FE7825" }).iconTitleColor}
                />
                <TouchableOpacity
                    style={styles.productType}
                    onPress={handleMenuOpen}
                >
                    <Text style={styles.productTypeText}>
                        {sortType}
                    </Text>
                    <Icon
                        name={
                            isMenuOpen
                                ? 'chevron-up'
                                : 'chevron-down'
                        }
                        size={25}
                        color={"black"}
                    />
                </TouchableOpacity>
                <SquaredcircleBackground
                    title={
                        <Icon
                            name={"cog-outline"}
                            size={30}
                        />}
                    titleColor={styleWithProps({ textColor: "black" }).iconTitleColor}
                    styleBgColor={styleWithProps({ color: "white" }).iconBackgroundColor}
                />

                {isMenuOpen &&
                    <View
                        style={styles.menu}
                    >
                        {(sortTypes.filter(elem => elem !== sortType)).map((item, index) =>
                            <TouchableOpacity
                                onPress={() => hadnleSortTypeUpdate(item)}
                                key={`${Math.random()}`}
                            >
                                <Text
                                    style={styleWithProps({ index, length: sortTypes.length }).menuLines}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>

                        )}
                    </View>
                }
            </View>
            <View style={styles.screenBanner}>
                <IconInput
                    iconName={"search"}
                    iconColor={"#FE7825"}
                    placeholder={"Search"}
                />
                <SquaredcircleBackground
                    title={
                        <IconFA
                            name={"sliders-h"}
                            size={30}
                        />}
                    titleColor={styleWithProps({ textColor: "#FE7825" }).iconTitleColor}
                    styleBgColor={styleWithProps({ color: "white" }).iconBackgroundColor}
                />
            </View>
            <View style={styles.screenContent}>
                <LinearGradient
                    colors={[
                        "rgba(255, 222, 188, 1)",
                        "rgba(255, 111, 21, 0.4)"
                    ]}
                    locations={[0, 0.9]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View style={styles.screentContentContainer}>
                        <Image
                            source={require("../../assets/images/topItem.png")}
                        />
                        <View style={styles.contentText}>
                            <Text style={styles.contentTitle}>
                                Beautiful Clothes
                            </Text>
                            <Text style={styles.contentSubtitle}>
                                The joy of premium fashion
                            </Text>
                            <CustomButton
                                buttonColor={"white"}
                                title={"Buy Now"}
                                styleText={styles.customButtonTextStyle}
                                styleButton={styles.customButtonStyle}
                            />
                        </View>
                    </View>
                </LinearGradient>
            </View>
            <View style={styles.products}>
                <View style={styles.productHeader}>
                    <Text style={styles.productHeaderTextLeft}>
                        New Arrival
                        <Icon
                            name='fire'
                            color={"#FE7825"}
                            size={30}
                        />
                    </Text>
                    <TouchableOpacity>
                        <LinearTextGradient
                            colors={[
                                "#E54500CF",
                                "#FF5C00C9",
                                "#FF9921",
                            ]}
                            locations={[0, 0.5, 1]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 0, y: 0 }}
                        >
                            <Text style={styles.productHeaderTextRight}>
                                See all
                            </Text>
                        </LinearTextGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.productListContainer}>
                    <FlatList
                        data={sortData(products)}
                        key={`${Math.random()}`}
                        renderItem={renderItem}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View >
    );
}
const styleWithProps = ({ index, length, color, textColor }) => StyleSheet.create({
    menuLines: {
        borderBottomColor: index === length - 2 ? "white" : "#DADADA",
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 1,
        color: "#FE7825",
        paddingVertical: 10,
        paddingHorizontal: 30,
        textAlign: "center",
    },
    iconBackgroundColor: {
        backgroundColor: color,
    },
    iconTitleColor: {
        color: textColor,
    },
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E5E5E5",
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    screenHeader: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconBackground: {
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
    },
    productType: {
        flexDirection: "row",
        padding: 5,
    },
    productTypeText: {
        color: "#313131",
        fontSize: 18,
        fontWeight: "600",
    },
    menu: {
        backgroundColor: "white",
        borderRadius: 20,
        elevation: 10,
        left: 110,
        paddingHorizontal: 20,
        position: "absolute",
        top: 50,
        zIndex: 5,
    },
    screenBanner: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    screenContent: {
        borderRadius: 15,
        marginTop: 20,
        overflow: "hidden",
    },
    screentContentContainer: {
        flexDirection: "row",
    },
    contentText: {
        alignItems: "flex-end",
    },
    contentTitle: {
        color: "#FE7825",
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10,
    },
    contentSubtitle: {
        color: "#FE7825",
        fontSize: 14,
        fontWeight: "500",
        marginVertical: 10,

    },
    customButtonStyle: {
        backgroundColor: "#FFFFFF"
    },
    customButtonTextStyle: {
        color: "#FE7825",
    },
    productHeader: {
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    productHeaderTextLeft: {
        color: "#313131",
        fontSize: 24,
    },
    productHeaderTextRight: {
        fontSize: 12,
    },
    products: {
        flex: 1,
    },
    productListContainer: {
        flex: 1,
    }
})

export default HomeScreen;
