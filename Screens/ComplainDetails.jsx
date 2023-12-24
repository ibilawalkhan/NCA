import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

function ComplainDetails({ route, navigation }) {
    const { name, email, number, description } = route.params ?? {};

    const handleEdit = () => {
        console.log('Edit Complain pressed');

        navigation.navigate("AddComplain", { name, email, number, description })
    }

    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.heading}>
                Complain Details
            </Text>

            <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                    <Text style={styles.label}>Name:</Text>
                    <Text style={styles.value}>{name}</Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{email}</Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.label}>Number:</Text>
                    <Text style={styles.value}>{number}</Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.label}>Description:</Text>
                    <Text style={styles.value}>{description}</Text>
                </View>
            </View>

            <Button mode="contained" style={styles.btn} onPress={handleEdit}>
                Edit Complain
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    heading: {
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'purple',
    },
    detailsContainer: {
        width: '80%',
        marginBottom: 20,
        marginLeft: 'auto',
    },
    detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    label: {
        fontWeight: 'bold',
        color: 'gray',
    },
    value: {
        flex: 1,
        marginLeft: 8,
    },
    btn: {
        width: '60%',
        marginTop: 40,
    },
});

export default ComplainDetails;
