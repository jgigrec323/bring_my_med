import { View, Text } from "react-native";
import React from "react";
import CustomBtn from "./CustomBtn";
import { COLORS } from "../constants";

const CenteredBtn = ({ onPress, text }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 50,
      }}
    >
      <CustomBtn text={text} onPress={onPress}></CustomBtn>
    </View>
  );
};

export default CenteredBtn;
