import { FlatList, StatusBar, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList
        data={[{ $id: 1 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text>{item.$id}</Text>}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
