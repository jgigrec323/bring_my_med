import { View, Text } from "react-native";
import React from "react";
import HeaderBar from "../../components/HeaderBar";
import { COLORS } from "../../constants";

const Notifications = () => {
  return (
    <View>
      <HeaderBar title={"Notifications"}></HeaderBar>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 25,
          backgroundColor: COLORS.gray,
          padding: 15,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>
          Your orders has been delivered !
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 25,
          backgroundColor: COLORS.gray,
          padding: 15,
          borderRadius: 5,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>We received your order !</Text>
      </View>
    </View>
  );
};

export default Notifications;
