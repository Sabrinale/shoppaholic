import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';


const{ height } = Dimensions.get('window');
export default class Header extends Component {
    
    render() {
        return (
            
                <View>
                    <Text>Top Bar</Text>
                    <TouchableOpacity
                        style={{ backgroundColor: 'red' }}
                        onPress={() => { this.props.navigation.navigate('DrawerOpen'); }}
                    >
                        <Text>GO TO MENU</Text>
                    </TouchableOpacity>
                </View>
                

            

        );
    }
}