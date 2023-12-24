import axios from 'axios';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import useAuthContext from '../context/useAuthContext';

function SearchComplain({ navigation }) {
    const { user } = useAuthContext();
    const [id, setId] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            if (!user) {
                throw new Error("You must be logged in");
            }

            const response = await axios.get(`https://2e5e-111-68-98-167.ngrok-free.app/api/workouts/search/${id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            console.log("Search complain", response.data);

            const workoutdata = response.data
            if (workoutdata.error) {
                setError(workoutdata.error)
                return
            }

            const { name, email, number, description } = workoutdata

            navigation.navigate('ComplainSearchResult', { name, email, number, description })
        } catch (error) {
            console.error("Error searching complain:", error);
            setError(error.message);
            // Log the entire error response
            console.log("Error response:", error.response);
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.txt} variant="headlineLarge">
                Complain Search
            </Text>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            <TextInput
                style={styles.input}
                label="Enter Complain Id"
                value={id}
                onChangeText={(id) => setId(id)}
            />
            <Button style={styles.btn} mode="contained" onPress={handleSearch}>
                Search
            </Button>
        </View>
    );
}

export default SearchComplain;

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
});
