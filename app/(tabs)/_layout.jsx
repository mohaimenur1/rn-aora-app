import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { StyleSheet, Text } from "react-native";

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopColor: "#232533",
            borderTopWidth: 1,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: color, // dynamic color for active/inactive
                }}
              >
                Home
              </Text>
            ),
            tabBarActiveTintColor: "#FFA001",
            tabBarInactiveTintColor: "#CDCDE0",
            tabBarIcon: ({ color, size, focused }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        {/* create */}
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: color, // dynamic color for active/inactive
                }}
              >
                Create
              </Text>
            ),
            tabBarIcon: ({ color, size, focused }) => (
              <AntDesign name="pluscircle" size={size} color={color} />
            ),
          }}
        />

        {/* profile */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: color, // dynamic color for active/inactive
                }}
              >
                Profile
              </Text>
            ),
            tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome5 name="user-alt" size={size} color={color} />
            ),
          }}
        />
        {/* bookmark */}
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: color, // dynamic color for active/inactive
                }}
              >
                Bookmark
              </Text>
            ),
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name="bookmark-minus"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
