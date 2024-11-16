import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

import useCartStore from "@/store/cartStore";
import Tabbar from "@/components/Tabbar";

export default function TabLayout() {
  const { items } = useCartStore();

  return (
    <Tabs
      tabBar={(props) => <Tabbar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: "#802c6e",
        headerStyle: {
          backgroundColor: "#802c6e",
        },
        headerTintColor: "#fff",
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerTitleAlign: "center",
          headerRight: () => (
            <Text
              style={{
                marginRight: 20,
                fontSize: 16,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              {items}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          headerTitle: "Groups",
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,
          headerTitle: "Cart",
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="[product]"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
