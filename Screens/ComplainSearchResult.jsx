// AddComplain.jsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';

function ComplainSearchResult({ navigation, route }) {

    const { name, email, number, description } = route.params;

    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.heading}>
                Complain Details
            </Text>

            <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                    <Text style={styles.label}>Name:<Text style={styles.value}>{name}</Text></Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.label}>Email: <Text style={styles.value}>{email}</Text></Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.label}>Number:<Text style={styles.value}>{number}</Text></Text>
                </View>

                <View style={styles.detailItem}>
                    <Text style={styles.label}>Description:<Text style={styles.value}>{description}</Text></Text>
                </View>
            </View>
        </View>
    );
}

export default ComplainSearchResult;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    detailsContainer: {
        padding: 12,
    },
    detailItem: {
        padding: 6,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        fontWeight: 'bold',
        color: 'purple',
        fontSize: 16,
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
