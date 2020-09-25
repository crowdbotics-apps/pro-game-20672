import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile109842Navigator from '../features/UserProfile109842/navigator';
import Tutorial109841Navigator from '../features/Tutorial109841/navigator';
import NotificationList109813Navigator from '../features/NotificationList109813/navigator';
import Settings109812Navigator from '../features/Settings109812/navigator';
import Settings109804Navigator from '../features/Settings109804/navigator';
import UserProfile109802Navigator from '../features/UserProfile109802/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile109842: { screen: UserProfile109842Navigator },
Tutorial109841: { screen: Tutorial109841Navigator },
NotificationList109813: { screen: NotificationList109813Navigator },
Settings109812: { screen: Settings109812Navigator },
Settings109804: { screen: Settings109804Navigator },
UserProfile109802: { screen: UserProfile109802Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
