import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import { LinearTextGradient } from 'react-native-text-gradient';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from "../../store/loggedInReducer.js";

import CustomButton from '../reusable/CustomButton';
import CustomInput from '../reusable/CustomInput';
import IconButtons from '../reusable/IconButtons.js';

function LoginScreen() {
    const navigation = useNavigation()
    const dispatch = useDispatch();

    const handleCreateNewAccount = () => {
        navigation.navigate("RegisterScreen");
    }

    const handleLogIn = () => {
        navigation.navigate("HomeScreen");
        dispatch(setIsLoggedIn());
    }

    const handleRecoverPassword = () => {
        console.log("recover password");
    }
    return (
        <View>
            <ImageBackground
                resizeMode={"cover"}
                source={require("../../assets/images/loginBg.png")}
            >
                <LinearGradient
                    colors={[
                        "rgba(255, 255, 255, 0)",
                        "rgba(242, 242, 242, 1)"
                    ]}
                    locations={[0, 0.9]}
                    style={styles.linearGradient}
                >
                    <Image
                        source={require("../../assets/images/logo.png")}
                        style={styles.logo}
                    />

                    <LinearTextGradient
                        style={styles.linearTextGradient}
                        colors={[
                            "#E54500CF",
                            "#FF5C00C9",
                            "#FF9921"
                        ]}
                        locations={[0, 0.5, 1]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <Text>Spoon</Text>
                    </LinearTextGradient>
                </LinearGradient>
            </ImageBackground>
            <View style={styles.loginButtonsContainer}>
                <IconButtons
                    title={"Continue with Google"}
                    iconName={"google"}
                    iconColor={'red'}
                    titleColor={"#313131"}
                />
                <IconButtons
                    title={"Continue with Facebook"}
                    iconName={"facebook"}
                    iconColor={"blue"}
                    titleColor={"#313131"}
                />
            </View>
            <View style={styles.lineSegment}>
                <Text style={styles.lineSegmentText}>
                    Or
                </Text>
            </View>
            <View style={styles.loginInputsContainer}>
                <Text style={styles.loginInputText}>
                    Email
                </Text>
                <CustomInput
                    placeholderText={"Enter your email"}
                    inputColor={"white"}
                    textColor={"#979797"}
                />
            </View>
            <View style={styles.loginInputsContainer}>
                <Text style={styles.loginInputText}>
                    Password
                </Text>
                <CustomInput
                    placeholderText={"Enter your password"}
                    inputColor={"white"}
                    textColor={"#979797"}
                />
            </View>
            <TouchableOpacity
                style={styles.recoverPasswordContainer}
                onPress={() => handleRecoverPassword()}
            >
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
                    <Text>
                        Forgot your password?
                    </Text>
                </LinearTextGradient>
            </TouchableOpacity>
            <View style={styles.submitButtonContainer}>
                <CustomButton
                    title={"Log In"}
                    buttonColor="#979797"
                    textColor={"white"}
                    handlePress={() => handleLogIn()}
                />
            </View>
            <View style={styles.newAccountContainer}>
                <Text style={styles.newAccountText}>
                    Don't have an account?
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
                    onPress={() => handleCreateNewAccount()}
                >
                    <Text> Register</Text>
                </LinearTextGradient>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loginButtonsContainer: {
        backgroundColor: "#F2F2F3",
        paddingHorizontal: 20,
    },
    loginButton: {
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    logo: {
        alignSelf: "center",
        height: 100,
        width: 100,
    },
    linearGradient: {
        paddingVertical: 100
    },
    loginButtonTextContainer: {
        flex: 1,
    },
    loginButtonText: {
        textAlign: "center",
    },
    linearTextGradient: {
        alignSelf: "center",
        fontSize: 25,
        fontWeight: "700",
    },
    loginButtonIcons: {
        alignSelf: "center",
    },
    lineSegment: {
        backgroundColor: "#DADADA",
        height: 1,
        position: "relative",
    },
    lineSegmentText: {
        alignSelf: "center",
        backgroundColor: "#F2F2F3",
        paddingHorizontal: 10,
        position: "absolute",
        top: -10,
    },
    loginInputsContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    loginInputText: {
        color: "#979797",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
    },
    recoverPasswordContainer: {
        alignItems: "flex-end",
        paddingHorizontal: 20,
    },
    submitButtonContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
    },
    newAccountContainer: {
        alignSelf: "center",
        flexDirection: "row",
        marginTop: 10,
    },
    newAccountText: {
        color: "#979797",
        fontWeight: "500",
    }
})

export default LoginScreen;