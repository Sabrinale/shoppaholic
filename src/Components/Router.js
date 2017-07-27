 import React from 'react';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Main from './Main/Main';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Shop from './Main/Shop/Shop';
import Menu from'./Main/Menu'
import Home from './Main/Shop/Home/Home';
import Cart from './Main/Shop/Cart/Cart'
import Contact from './Main/Shop/Contact/Contact'
import Search from './Main/Shop/Search/Search'

export const MainStack = StackNavigator({
        Screen_Main: {
            screen: Main,
            navigationOptions: {
              title: 'Main Page'
            }
        },  
        Screen_Authentication: {
            screen: Authentication,
            navigationOptions: {
              title: 'Authentication Page'
            }
        },
        Screen_ChangeInfo: {
            screen: ChangeInfo,
            navigationOptions: {
              title: 'ChangeInfo Page'
            }
          },
        Screen_OrderHistory: {
            screen: OrderHistory,
            navigationOptions: {
              title: 'OrderHistory Page'
            }
        },
  });
export const CartStack = StackNavigator({
  Screen_Cart: {
    screen: Cart,
    navigationOptions: {
      title: 'Cart Page'
    }
  },
});
export const ContactStack = StackNavigator({
  Screen_Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'Contact Page'
    }
  },
});
export const HomeStack = StackNavigator({
  Screen_Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
});
export const SearchStack = StackNavigator({
  Screen_Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search Page'
    }
  },
});
export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
        tabBarLabel: 'HOME'
    }
  },
  Cart: {
    screen: CartStack,
    navigationOptions: {
        tabBarLabel: 'CART'
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
        tabBarLabel: 'Search'
    }
  },
  Contact: {
    screen: ContactStack,
    navigationOptions: {
        tabBarLabel: 'CONTACT'
    }
  }
  },
    {
      tabBarPosition: 'bottom',
      //gat tap nganh de qua man hinh moi
      swipeEnabled: true,
      tabBarOptions: {
        style: {
        backgroundColor: '#dddddd'
        },
        inactiveTintColor: 'green',
        activeTinColor: 'red'
      }
});
export const SideMenu = DrawerNavigator({
  Tabbar: {
    screen: Tabs
  },
},
 {
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: props => <Menu{...props} />
 }
);
