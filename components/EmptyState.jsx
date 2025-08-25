import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import SearchImage from "../assets/images/empty.png";
import CustomButton from "../components/CustomButton";

const EmptyState = ({ title, subTitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image source={SearchImage} className="w-64 h-52" resizeMode="contain" />
      <Text className="text-gray-100 mb-2">{title}</Text>
      <Text className="text-white font-medium text-3xl">{subTitle}</Text>
      <CustomButton
        title="Back to Explore"
        handlePress={() => router.push("/create")}
      />
    </View>
  );
};

export default EmptyState;
