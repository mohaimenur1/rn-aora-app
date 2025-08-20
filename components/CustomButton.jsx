import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colorTheme from "../utils/colorsTheme";

const CustomButton = ({ title, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: colorTheme.colors.secondary.DEFAULT,
        width: "100%",
        height: 65,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#000",
          textAlign: "center",
          fontWeight: "semibold",
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
