import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";

import { useNavigation } from '@react-navigation/native';

import CustomButton from '../reusable/CustomButton';
import CustomInput from '../reusable/CustomInput';
import IconButton from '../reusable/IconButtons';

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
        navigation.navigate("LoginScreen");
    }

    return (
        <View style={styles.container}>
            <View>
                <IconButton
                    title={"Continue With Google"}
                    iconName={"google"}
                    iconColor={"red"}
                    style={styles.buttonTextColor}
                />
                <IconButton
                    title={"Continue With Facebook"}
                    iconName={"facebook"}
                    iconColor={"blue"}
                    style={styles.buttonTextColor}
                />
                <View style={styles.lineSegment}>
                    <Text style={styles.lineSegmentText}>
                        or
                    </Text>
                </View>
                <View style={styles.loginInputsContainer}>
                    <Text style={styles.loginInputText}>
                        Email
                    </Text>
                    <CustomInput
                        placeholderText={"Enter your email"}
                        onFocusIn={() => setIsLoginFocused(!isLoginFocused)}
                        onFocusOut={() => setIsLoginFocused(!isLoginFocused)}
                        style={
                            isLoginFocused
                                ? styles.customInputFocused
                                : styles.customInput
                        }
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
                            isPassword={isHidden}
                            onFocusIn={() => setIsPasswordFocused(!isPasswordFocused)}
                            onFocusOut={() => setIsPasswordFocused(!isPasswordFocused)}
                            updateText={(text) => setPassword(text)}
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
                    styleButton={styles.customButton}
                    styleText={styles.customButtonText}
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
    LoginButtonTextContainer: {
        flex: 1,
    },
    loginButtonText: {
        textAlign: "center",
    },
    buttonTextColor: {
        color: "#313131"
    },
    lineSegment: {
        backgroundColor: "#DADADA",
        height: 1,
        position: "relative",
        marginVertical: 20,
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
    customInput: {
        borderWidth: 0,
    },
    customInputFocused: {
        borderWidth: 2,
    },
    registerButton: {
        marginTop: 100
    },
    customButton: {
        backgroundColor: "#979797",
    },
    customButtonText: {
        color: "white"
    }
})

export default RegisterScreen;