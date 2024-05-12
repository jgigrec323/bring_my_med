import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../styles/profileBar";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ProfileBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/profile.jpg")}
            style={styles.profileImg}
          ></Image>
        </View>
        {/* locaton part */}
        <View style={styles.locationPart}>
          <Text style={{ color: "black" }}>Sent to</Text>
          <View style={styles.locationIcon}>
            <MaterialIcons name="location-on" size={24} color="gray" />
            <Text style={{ fontWeight: "bold" }}>My home</Text>
          </View>
        </View>
      </View>
      <View style={styles.right}>
        <View style={styles.iconContainer}>
          <AntDesign name="shoppingcart" size={24} color="white" />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default ProfileBar;
