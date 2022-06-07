import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

import { LinearTextGradient } from 'react-native-text-gradient';

function CustomText({ text, limit, design }) {

    const [showFullText, setShowFullText] = useState(false)
    const [max, setMax] = useState(limit);

    const handleReadMorePress = () => {

    }

    if (text.length >= max) {
        return (
            <View
                style={styles.container}
            >
                <Text style={design}>
                    {text.substring(0, max)}
                    {showFullText ? "" : <Text>....</Text>}
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
                    <TouchableWithoutFeedback
                        onPress={() => {
                            if (showFullText) {
                                setMax(limit)
                            } else {
                                setMax(text.length)
                            }
                            setShowFullText(!showFullText)
                        }}
                    >
                        <Text>
                            Read {
                                showFullText
                                    ? "Less"
                                    : "More"
                            }
                        </Text>
                    </TouchableWithoutFeedback>
                </LinearTextGradient>
            </View>
        )
    } else {

        return (
            <Text style={design}>
                {text}
            </Text>
        );
    }
}

const styles = StyleSheet.create({

})

export default CustomText;