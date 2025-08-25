import { Stack } from "expo-router";
import GlobalProvider from "../context/authContext";
import "../global.css";
export default function RootLayout() {
  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GlobalProvider>
  );
}
