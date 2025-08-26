import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutIcon from "../../assets/icons/logout.png";
import Logo from "../../assets/images/react-logo.png";

import { logOutUser } from "../../services/appwrite";

const Profile = () => {
  const handleLogout = () => {
    // 👉 put your logout logic here
    console.log("Logout clicked");
    logOutUser();
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <StatusBar />
      <View className="w-full px-4 mt-4">
        <TouchableOpacity onPress={handleLogout} className=" self-end">
          <Image source={LogoutIcon} className="h-7 w-7" />
        </TouchableOpacity>
      </View>
      <View className="justify-center items-center">
        <View className="justify-center items-center mt-5 mb-5">
          <Image
            source={Logo}
            className="h-20 w-20 border-2 border-solid rounded-lg border-secondary-100 mb-5"
          />
          <Text className="font-pbold text-3xl text-white">jsmastry</Text>
        </View>
        <View className="flex-row justify-center items-center gap-10">
          <View className="justify-center items-center">
            <Text className="font-pbold text-3xl text-white">10</Text>
            <Text className=" text-white text-2xl">Posts</Text>
          </View>
          <View className="justify-center items-center">
            <Text className="font-pbold text-3xl text-white">1.2K</Text>
            <Text className=" text-white text-2xl">Views</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
