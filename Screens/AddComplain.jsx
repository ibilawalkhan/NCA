// AddComplain.jsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import axios from 'axios';
import useAuthContext from '../context/useAuthContext'


function AddComplain({ navigation, route }) {
    const { user } = useAuthContext();

    const {
        name: initialName = '',
        email: initialEmail = '',
        number: initialNumber = '',
        description: initialDescription = '',
        isEdit = false,
    } = route.params ?? {};

    const [name, setName] = useState(initialName);
    const [email, setEmail] = useState(initialEmail);
    const [number, setNumber] = useState(initialNumber);
    const [description, setDescription] = useState(initialDescription);
    const [error, setError] = useState(null);
    const [copyId, setCopyId] = useState(null);


    const handleComplain = async () => {
        if (!user) {
            setError("You must be logged in");
            return;
        }

        console.log('Request data of AddComplain:', { name, email, number, description });

        try {
            const response = await axios.post('https://2e5e-111-68-98-167.ngrok-free.app/api/workouts/', {
                name,
                email,
                number,
                description,
            }, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });

            console.log('Response data of handle complain:', response.data);
            console.log('Complain added successfully');

            // Show success message
            setError("The complain is submitted");

            const workoutId = response.data.id;
            console.log("Mongo_db id: ", workoutId)
            setCopyId(`Copy the ID: ${workoutId}`);

            // Wait for a short duration (you can use setTimeout)
            setTimeout(() => {
                // Navigate to the next page
                navigation.navigate('ComplainDetails', { name, email, number, description });
            }, 100); // 100 milliseconds or adjust as needed

        } catch (error) {
            console.error('Error adding complain:', error);

            if (error.response && error.response.data) {
                console.error('Error response:', error.response.data);
                setError(error.response.data.error || 'Error adding complain');
            } else {
                setError('Error adding complain');
            }
        }
    };


    useEffect(() => {
        // Update state when the route params change
        setName(initialName);
        setEmail(initialEmail);
        setNumber(initialNumber);
        setDescription(initialDescription);

        return () => {
            console.log('Unmounting AddComplain');
        };
    }, [route.params]);

    return (
        <View style={styles.container}>
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
            {copyId && <Text style={{ color: 'green', fontWeight: 'bold' }}>{copyId}</Text>}

            <Text style={styles.txt} variant="headlineLarge">
                {isEdit ? 'Edit Your Complain' : 'Add Your Complain'}
            </Text>
            <TextInput
                style={styles.input}
                label="Name"
                value={name}
                onChangeText={(name) => setName(name)}
            />
            <TextInput
                style={styles.input}
                label="Email"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.input}
                label="Number"
                value={number}
                onChangeText={(number) => setNumber(number)}
            />
            <TextInput
                style={styles.textArea}
                label="Description"
                multiline
                value={description}
                onChangeText={(text) => setDescription(text)}
            />
            <Button
                style={styles.btn}
                mode="contained"
                onPress={handleComplain}
            >
                {isEdit ? 'Save Changes' : 'Add'}
            </Button>
        </View>
    );
}

export default AddComplain;

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
    textArea: {
        width: '80%',
        height: 100,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
});
