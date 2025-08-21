import { router } from "expo-router";
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
import { StatusBar } from "react-native-web";
import logo from "../../assets/images/logo.png";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { signIn } from "../../services/appwrite";
import colorTheme from "../../utils/colorsTheme";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { height: screenHeight } = Dimensions.get("window");

  const submit = async () => {
    console.log(form.email, form.password);
    if (!form.email || !form.password) {
      return alert("Please fill all fields");
    }

    try {
      await signIn(form.email, form.password);
      router.replace("/home");
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

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
            // otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            // otherStyles="mt-7"
          />
          <CustomButton title="Log In" handlePress={submit} />
          <Text style={{ color: "#fff", textAlign: "center", marginTop: 20 }}>
            Don't have an account?{" "}
            <Text
              style={{
                color: colorTheme.colors.secondary.DEFAULT,
                fontWeight: "bold",
              }}
              onPress={() => router.push("/(auth)/sign-up")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
