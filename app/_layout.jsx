import { Stack } from "expo-router";
import GlobalProvider from "../context/authContext";

export default function RootLayout() {
  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GlobalProvider>
  );
}
