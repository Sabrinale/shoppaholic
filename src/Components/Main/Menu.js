import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Authentication from '../Authentication/Authentication';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';
import { MainStack } from '../Router';


export default class Menu extends Component {
    render() {
      
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Text>Menu Component</Text>
              <TouchableOpacity style={{ backgroundColor: 'pink' }} 
                onPress={() => { this.props.navigation.navigate('Screen_Authentication') }}
                >
                <Text>GO TO Authentication </Text>
                
                < MainStack  />
               
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'pink' }} 
                onPress={() => {this.props.navigation.navigate('Screen_ChangeInfo')}}
                >< Text>GO TO ChangeInfo</Text></TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'pink' }} 
                onPress={() => { this.props.navigation.navigate('Screen_OrderHistory')}}
                ><Text>GO TO OrderHistory</Text></TouchableOpacity>
            </View>

        );
    }
}