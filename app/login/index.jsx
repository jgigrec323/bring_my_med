import { View, Text, TextInput, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { styles } from "../../styles/login";
import { COLORS } from "../../constants";
import Checkbox from "expo-checkbox";
import CenteredBtn from "../../components/CenteredBtn";
import { useRouter } from "expo-router";
const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Create an account</Text>
        <Text style={styles.label}>Enter your informations</Text>
        <View style={styles.inputGroup}>
          <Text style={{ fontSize: 20, color: COLORS.tertiary }}>Name</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor={COLORS.tertiary}
              keyboardType="default"
              style={{ fontSize: 15, width: "100%" }}
            ></TextInput>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={{ fontSize: 20, color: COLORS.tertiary }}>Surname</Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Enter your surname"
              placeholderTextColor={COLORS.tertiary}
              keyboardType="default"
              style={{ fontSize: 15, width: "100%" }}
            ></TextInput>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={{ fontSize: 20, color: COLORS.tertiary }}>
            Phone number
          </Text>
          <View style={styles.inputView}>
            <TextInput
              placeholder="Enter your phone number (eg:+90212025020)"
              placeholderTextColor={COLORS.tertiary}
              keyboardType="default"
              style={{ fontSize: 15, width: "100%" }}
            ></TextInput>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 6 }}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.tertiary : undefined}
          />
          <Text style={{ fontSize: 15, color: COLORS.tertiary }}>
            I aggree to the terms and conditions
          </Text>
        </View>
        <CenteredBtn
          onPress={() => {
            router.push("/otp");
          }}
          text={"Continue"}
        ></CenteredBtn>
      </View>
    </SafeAreaView>
  );
};

export default Login;
