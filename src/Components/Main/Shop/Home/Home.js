
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../Header'

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'pink' }}>
                <Text>Home Component</Text>
                <Header />
            </View>

        );
    }
}