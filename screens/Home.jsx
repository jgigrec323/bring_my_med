import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../constants";
import { useRouter } from "expo-router";
import CenteredBtn from "../components/CenteredBtn";

export default function Home() {
  const router = useRouter();
  const onPress = () => {
    router.push("/login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bring my med</Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.mainImg}
          source={require("../assets/pills.png")}
        ></Image>
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <Text style={styles.bottomTitle}>Let's Get Started</Text>
        <Text style={styles.description}>
          Welcome to Bring My Med, your personal medication management
          assistant. Get started today and take control of your health
        </Text>
      </View>
      <CenteredBtn onPress={onPress} text={"Get Started"}></CenteredBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  title: {
    textTransform: "capitalize",
    fontSize: 35,
    fontWeight: "bold",
    color: COLORS.tertiary,
    textAlign: "center",
    marginTop: 60,
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 375,
  },
  mainImg: {
    height: 300,
    width: 300,
    objectFit: "contain",
  },
  bottomTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS.tertiary,
    lineHeight: 50,
  },
  description: {
    marginTop: 10,
    color: COLORS.secondary,
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
  },
});
