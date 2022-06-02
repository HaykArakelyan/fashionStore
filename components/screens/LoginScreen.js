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

import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from '../reusable/CustomButton';
import CustomInput from '../reusable/CustomInput';

function LoginScreen() {
    const navigation = useNavigation()

    const handleCreateNewAccount = () => {
        navigation.navigate("RegisterScreen");
    }

    const handleLogIn = () => {
        navigation.navigate("HomeScreen")
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
                    style={{
                        paddingVertical: 100
                    }}
                >
                    <Image
                        source={require("../../assets/images/logo.png")}
                        style={{
                            width: 100,
                            height: 100,
                            alignSelf: "center"
                        }}
                    />

                    <LinearTextGradient
                        style={{
                            fontSize: 25,
                            fontWeight: "700",
                            alignSelf: "center"
                        }}
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
                <TouchableOpacity style={styles.loginButton}>
                    <Icon
                        name="google"
                        size={15}
                        color="red"
                        style={styles.loginButtonIcons}
                    />
                    <View style={styles.LoginButtonTextContainer}>
                        <Text style={styles.loginButtonText}>
                            Continue with Google
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}>
                    <Icon
                        name="facebook"
                        size={12}
                        color="blue"
                        style={styles.loginButtonIcons}
                    />
                    <View style={styles.LoginButtonTextContainer}>
                        <Text style={styles.loginButtonText}>
                            Continue with Facebook
                        </Text>
                    </View>
                </TouchableOpacity>
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
            <View style={styles.recoverPasswordContainer}>
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
            </View>
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
        padding: 20,
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
    LoginButtonTextContainer: {
        flex: 1,
    },
    loginButtonText: {
        textAlign: "center",
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