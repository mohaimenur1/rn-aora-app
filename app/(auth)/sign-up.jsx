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
import logo from "../../assets/images/logo.png";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { createUser } from "../../services/appwrite";
import colorTheme from "../../utils/colorsTheme";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { height: screenHeight } = Dimensions.get("window");

  const submit = async () => {
    console.log(form.email, form.password, form.username);
    if (!form.email || !form.password || !form.username) {
      return alert("Please fill all fields");
    }

    try {
      const result = await createUser(form.email, form.password, form.username);
      router.replace("/home");
    } catch (error) {}
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
            Sign Up
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            // otherStyles="mt-7"
          />
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
          <CustomButton title="Sign Up" handlePress={submit} />
          <Text style={{ color: "#fff", textAlign: "center", marginTop: 20 }}>
            Already have an account?{" "}
            <Text
              style={{
                color: colorTheme.colors.secondary.DEFAULT,
                fontWeight: "bold",
              }}
              onPress={() => router.push("/sign-in")}
            >
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
