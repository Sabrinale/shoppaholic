import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Tabs } from '../../Router';

export default class Shop extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <View>
                    <Text>Top Bar</Text>
                </View>
                <Tabs/ >
               
            </View>

        );
    }
}