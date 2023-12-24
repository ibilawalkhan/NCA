import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text
                style={styles.txt}
                variant="headlineSmall"
            >
                Help us in Stopping Drugs
            </Text>
            <Button
                style={styles.btn}
                mode="contained"
                onPress={() => navigation.navigate("SearchComplain")}
            >
                Search Complain
            </Button>
            <Button
                style={styles.btn}
                mode="contained"
                onPress={() => navigation.navigate("AddComplain")}
            >
                Add a Complain
            </Button>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: '50%',
        marginTop: 20,
    },
    txt: {
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'purple',
    },
});