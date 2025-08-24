import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colorTheme from "../utils/colorsTheme";

import { Redirect, router } from "expo-router";
import splashImage from "../assets/images/cards.png";
import logo from "../assets/images/logo.png";
import path from "../assets/images/path.png";

import { useGlobalAuthContext } from "@/context/authContext";
import CustomButton from "../components/CustomButton";

export default function Index() {
  const { height: screenHeight } = Dimensions.get("window");
  const { isLoading, isLoggedIn } = useGlobalAuthContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView
      style={{
        backgroundColor: colorTheme.colors.primary,
        height: "100%",
      }}
    >
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: screenHeight * 0.85,
            paddingHorizontal: 16,
          }}
        >
          <Image
            source={logo}
            style={{ width: 130, height: 84 }}
            resizeMode="contain"
          />
          <Image
            source={splashImage}
            style={{ width: 375, height: 298 }}
            resizeMode="contain"
          />
          <View style={{ position: "relative", marginTop: 16 }}>
            <Text
              style={{
                fontSize: 30,
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Discover Endless Possibilities with{" "}
              <Text style={{ color: colorTheme.colors.secondary.DEFAULT }}>
                Aora
              </Text>
            </Text>
            <Image
              source={path}
              style={{
                width: 136,
                height: 15,
                position: "absolute",
                bottom: -8,
                right: 10,
              }}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 14,
              color: colorTheme.colors.gray[100],
              textAlign: "center",
              marginTop: 28,
            }}
          >
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
      <StatusBar style="light" backgroundColor={colorTheme.colors.primary} />
    </SafeAreaView>
  );
}
