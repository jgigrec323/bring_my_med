import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { useRouter } from "expo-router";
import { useRouteNode } from "expo-router/build/Route";
const HeaderBar = ({ title }) => {
  const router = useRouter();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
      }}
    >
      <View
        style={{
          height: 40,
          width: 40,
          position: "absolute",
          backgroundColor: COLORS.primary,
          borderRadius: 150,
          left: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="arrow-back-outline"
          onPress={() => router.back()}
          size={20}
          color="black"
        />
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 19 }}>{title}</Text>
    </View>
  );
};

export default HeaderBar;
