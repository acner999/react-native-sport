import React from "react";
import { Linking, useColorScheme } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "@screens/detail/DetailScreen";
// ? Screens
import HomeScreen from "@screens/home/HomeScreen";
import NotificationScreen from "@screens/notification/NotificationScreen";
import ProfileScreen from "@screens/profile/ProfileScreen";
import SearchScreen from "@screens/search/SearchScreen";
import { DarkTheme, LightTheme, palette } from "@theme/themes";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";

// ? If you want to use stack or tab or both
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  const changeToggleTheme = () => {
    if (isDarkMode) {
      return LightTheme;
    } else {
      return DarkTheme;
    }
  };

  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  /*  const renderTabIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number
  ) => {
    let iconName = "home";
    switch (route.name) {
      case SCREENS.HOME:
        iconName = focused ? "home" : "home-outline";
        break;
      case SCREENS.SEARCH:
        iconName = focused ? "search" : "search-outline";
        break;
      case SCREENS.NOTIFICATION:
        iconName = focused ? "notifications" : "notifications-outline";
        break;
      case SCREENS.PROFILE:
        iconName = focused ? "person" : "person-outline";
        break;
      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }
    return (
      <Icon
        name={iconName}
        type={IconType.Ionicons}
        size={size}
        color={color}
      />
    );
  };
*/
  const Menu = () => {
    return (
      <Drawer.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="home" component={RenderTabNavigation} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
      </Drawer.Navigator>
    );
  };

  const CustomDrawerContent = (props: any) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => Linking.openURL("https://mywebsite.com/help")}
        />
        <DrawerItem label="change theme" onPress={() => changeToggleTheme()} />
      </DrawerContentScrollView>
    );
  };

  const RenderTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          tabBarActiveTintColor: palette.primary,
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
          tabBarBadgeStyle: { backgroundColor: palette.secondary },
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: isDarkMode ? palette.black : palette.white,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                name={focused ? "home" : "home-outline"}
                type={IconType.Ionicons}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: "Equipos",
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                name={focused ? "users" : "users"}
                type={IconType.FontAwesome5}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: "Agenda",
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                name={focused ? "calendar" : "calendar-outline"}
                type={IconType.Ionicons}
                size={size}
                color={color}
              />
            ),
            tabBarBadge: 3,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Usuario",
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                name={focused ? "person" : "person-outline"}
                type={IconType.Ionicons}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={isDarkMode ? DarkTheme : LightTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Detail">
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

/*
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={RenderTabNavigation} />
        <Stack.Screen name="Detail">
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    */
