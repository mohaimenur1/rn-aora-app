import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import colorTheme from "../../utils/colorsTheme";

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" backgroundColor={colorTheme.colors.primary} />
    </>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
