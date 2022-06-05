import React from 'react';
import { View, StyleSheet } from 'react-native';

import CustomButton from '../reusable/CustomButton';
import Icon from "react-native-vector-icons/FontAwesome";

import { useNavigation } from '@react-navigation/native';

function GoBackButton() {
    const navigation = useNavigation();

    return (
        <View
            style={styles.headerLeft}
        >
            <CustomButton
                title={
                    <Icon
                        name='arrow-left'
                        size={15}
                        onPress={() =>
                            navigation.navigate("LoginScreen")}
                    />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerLeft: {
        paddingHorizontal: 20
    }
})

export default GoBackButton;