import {
  FlatList,
  Image,
  RefreshControl,
  // StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import logoImage from "../../assets/images/logo-small.png";
import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import VideoCard from "../../components/VideoCard";
import { getAllPost } from "../../services/appwrite";
import useFetchingData from "../../utils/useFetchingData";

const Home = () => {
  const { data: posts, refetch } = useFetchingData(getAllPost);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <StatusBar />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-2">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-pmedium text-white">
                  JSMastery
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={logoImage}
                  className="h-10 w-9"
                  resizeMode="contain"
                />
              </View>
            </View>
            {/* search input */}
            <View className="mb-5">
              <SearchInput placeholder="Search for a video topic" />
            </View>
            {/* latest video section */}
            <View>
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>
              <Trending posts={posts} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subTitle="No videos found for this profile"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
