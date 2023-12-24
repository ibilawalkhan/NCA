import axios from 'axios';
import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, TextInput, Text } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { AuthContext } from '../context/AuthContext';

function Login({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { dispatch } = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            console.log('Request data of Login:', { email, password });
            const response = await axios.post('https://2e5e-111-68-98-167.ngrok-free.app/api/user/login', {
                email,
                password,
            });


            console.log('Response data:', response);

            if (response && response.data && response.data.token) {
                const token = response.data.token;
                console.log('Login successful');
                // Dispatch an action to set the user in the context
                dispatch({ type: 'LOGIN', payload: { token } });
                navigation.navigate('Home');
                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: 'Login Successful',
                    visibilityTime: 3000,
                    autoHide: true,
                });
            } else {
                console.error('Login failed: Invalid response format');

                // Check the response status code
                if (response && response.status === 404) {
                    // User not found, show relevant toast
                    Toast.show({
                        type: 'error',
                        position: 'top',
                        text1: 'Login Failed',
                        text2: 'User not found. Please sign up.',
                        visibilityTime: 3000,
                        autoHide: true,
                    });
                } else {
                    // Show error toast for other cases
                    Toast.show({
                        type: 'error',
                        position: 'top',
                        text1: 'Login Failed',
                        text2: 'Invalid response format',
                        visibilityTime: 3000,
                        autoHide: true,
                    });
                }
            }
        } catch (error) {
            console.error('Login failed:', error);

            // Show error toast with detailed error message
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Login Failed',
                text2: error?.response?.data?.error || 'An unexpected error occurred',
                visibilityTime: 3000,
                autoHide: true,
            });
        }
    };



    return (
        <View style={styles.container}>
            <Text
                style={styles.txt}
                variant="headlineLarge"
            >
                Welcome to NCA
            </Text>
            <TextInput
                style={styles.input}
                label="Email"
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                style={styles.input}
                label="Password"
                value={password}
                secureTextEntry
                onChangeText={password => setPassword(password)}
            />
            <Button
                style={styles.btn}
                mode="contained"
                onPress={handleLogin}
            >
                Login
            </Button>

            <View style={styles.bottom}>
                <Text>Don't have an Account? </Text>
                <Text style={styles.stxt} onPress={() => navigation.navigate("Signup")}>Sign up here</Text>
            </View>
        </View>
    )

}

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
    }
});


export default Login