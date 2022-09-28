import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Dimensions, StyleSheet } from "react-native";

import Home from "~/screens/Home";
import Search from "~/screens/Search";
import Notification from "~/screens/Notification";
import User from "~/screens/User";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SearchNavigation from "./SearchNavigation";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get("window");
function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <View style={focused ? styles.background_icon : {}}>
                <FontAwesome name="home" size={36} color={color} />
              </View>
            );
          } else if (route.name === "Search") {
            return (
              <View style={focused ? styles.background_icon : {}}>
                <FontAwesome name="search" size={36} color={color} />
              </View>
            );
          } else if (route.name === "Notification") {
            return (
              <View style={focused ? styles.background_icon : {}}>
                <MaterialIcons name="notifications" size={36} color={color} />
              </View>
            );
          } else if (route.name === "User") {
            return (
              <View style={focused ? styles.background_icon : {}}>
                <MaterialCommunityIcons name="account" size={36} color={color} />
              </View>
            );
          }
        },
        tabBarStyle: {
          height: 78,
        },
        tabBarActiveTintColor: "#F8A170",
        tabBarInactiveTintColor: "#D9D9D9",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={SearchNavigation} options={{ headerShown: false }} />
      <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Tab.Screen name="User" component={User} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  background_icon: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#FFC7A733",
  },
});

export default BottomTab;
