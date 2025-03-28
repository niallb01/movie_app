import { Tabs } from "expo-router";
import React from "react";
import { ImageBackground, Image } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground source={images.highlight}>
                <Image source={icons.home} />
              </ImageBackground>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{ headerShown: false, title: "Saved" }}
      />
      <Tabs.Screen
        name="search"
        options={{ headerShown: false, title: "Search" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, title: "Profile" }}
      />
    </Tabs>
  );
};

export default _Layout;
