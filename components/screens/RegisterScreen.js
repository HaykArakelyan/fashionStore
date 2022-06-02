import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";

import { useNavigation } from '@react-navigation/native';

import CustomButton from '../reusable/CustomButton';
import CustomInput from '../reusable/CustomInput';

function RegisterScreen(props) {
    const [password, setPassword] = useState("")
    const [isHidden, setIsHidden] = useState(true)

    const navigation = useNavigation();

    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isLoginFocused, setIsLoginFocused] = useState(false);

    const handleShowPassword = () => {
        if (password.length === 0) {
            return;
        }
        setIsHidden(!isHidden)
    }

    const handleRegister = () => {
        navigation.navigate("HomeScreen");
    }

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.loginButton}>
                    <Icon
                        name="google"
                        size={15}
                        color="red"
                        style={styles.loginBsuttonIcons}
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
                        onFocusIn={() => setIsLoginFocused(!isLoginFocused)}
                        onFocusOut={() => setIsLoginFocused(!isLoginFocused)}
                        hasBorder={isLoginFocused}
                    />
                </View>
                <View style={styles.loginInputsContainer}>
                    <Text style={styles.loginInputText}>
                        Password
                    </Text>
                    <View
                        style={
                            isPasswordFocused
                                ? styles.showPasswordTextInputFocused
                                : styles.showPasswordTextInput
                        }>
                        <CustomInput
                            placeholderText={"Enter your password"}
                            inputColor={"white"}
                            textColor={"#979797"}
                            isPassword={isHidden}
                            onFocusIn={() => setIsPasswordFocused(!isPasswordFocused)}
                            onFocusOut={() => setIsPasswordFocused(!isPasswordFocused)}
                            updatePassword={(text) => setPassword(text)}
                        />
                        <Icon
                            onPress={() => handleShowPassword()}
                            name='eye'
                            size={18}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.registerButton}>
                <CustomButton
                    title={"Register"}
                    buttonColor={"#979797"}
                    textColor={"white"}
                    handlePress={() => handleRegister()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
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
        paddingVertical: 10,
    },
    showPasswordTextInput: {
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 20,
    },
    showPasswordTextInputFocused: {
        alignItems: "center",
        backgroundColor: "white",
        borderColor: "#FE7825",
        borderRadius: 15,
        borderStyle: "solid",
        borderWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 20,
    },
    loginInputText: {
        color: "#979797",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
    },
    registerButton: {
        marginTop: 100
    }
})

export default RegisterScreen;