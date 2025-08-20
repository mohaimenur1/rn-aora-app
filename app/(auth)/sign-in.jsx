import { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/logo.png";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import colorTheme from "../../utils/colorsTheme";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { height: screenHeight } = Dimensions.get("window");

  return (
    <SafeAreaView
      style={{ backgroundColor: colorTheme.colors.primary, height: "100%" }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            width: "100%",
            // justifyContent: "center",
            height: "100%",
            paddingHorizontal: 16,
            marginVertical: 24,
          }}
        >
          <Image source={logo} resizeMode="contain" style={{ width: 112 }} />
          <Text
            style={{
              color: "#fff",
              fontSize: 23,
              fontWeight: "600",
              marginTop: 10,
            }}
          >
            Sign In
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton title="Log In" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
