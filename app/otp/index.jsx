import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../../styles/otp";
import { OtpInput } from "react-native-otp-entry";
import { COLORS } from "../../constants";
import CenteredBtn from "../../components/CenteredBtn";
import { useRouter } from "expo-router";

const Otp = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Enter verification code</Text>
        <Text style={styles.label}>
          We send you a code on your phone number
        </Text>
        <View>
          <OtpInput
            focusColor={COLORS.tertiary}
            focusStickBlinkingDuration={400}
          />
          <TouchableOpacity onPress={() => {}} style={styles.resendBtn}>
            <Text>Don't receive the code ? </Text>
            <Text style={{ color: COLORS.tertiary }}>Resend Code</Text>
          </TouchableOpacity>
        </View>
        <CenteredBtn
          text={"Verify"}
          onPress={() => {
            router.push("/home");
          }}
        ></CenteredBtn>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
