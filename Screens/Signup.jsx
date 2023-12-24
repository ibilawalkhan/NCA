import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import axios from 'axios';

function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async () => {
        try {
            console.log('Request data of Signup:', { email, password });
            const response = await axios.post('https://2e5e-111-68-98-167.ngrok-free.app/api/user/signup', {
                email,
                password,
            });
            console.log('Response data:', response.data);
            console.log('Signup successful');
            navigation.navigate('Login');
        } catch (error) {
            if (error.response) {
                console.error('Server Error:', error.response.data);
                setError(error.response.data.error);
            } else if (error.request) {
                console.error('Network Error:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>{error}</Text>
            <Text style={styles.txt} variant="headlineLarge">
                Welcome to NCA
            </Text>
            <TextInput
                style={styles.input}
                label="Email"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.input}
                label="Password"
                value={password}
                secureTextEntry
                onChangeText={(password) => setPassword(password)}
            />
            <Button style={styles.btn} mode="contained" onPress={handleSignup}>
                Signup
            </Button>

            <View style={styles.bottom}>
                <Text>Already have an Account? </Text>
                <Text style={styles.stxt} onPress={() => navigation.navigate('Login')}>
                    Login here
                </Text>
            </View>
        </View>
    );
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'purple',
    },
    input: {
        width: '80%',
        backgroundColor: '#fff',
    },
    btn: {
        width: '30%',
        marginTop: 40,
    },
    bottom: {
        flexDirection: 'row',
        marginTop: 15,
    },
    stxt: {
        color: 'purple',
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});
