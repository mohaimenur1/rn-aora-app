import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              //   source={!showPassword ? icons.eye : icons.eyeHide}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8, // space-y-2 approximation
  },
  title: {
    fontSize: 16, // text-base
    color: "#E5E5E5", // text-gray-100
    fontWeight: "500", // approximate font-pmedium
  },
  inputWrapper: {
    width: "100%", // w-full
    height: 64, // h-16 → 16 * 4 = 64px
    paddingHorizontal: 16, // px-4 → 16px
    backgroundColor: "#1A1A1A", // bg-black-100
    borderRadius: 24, // rounded-2xl ~ 24px
    borderWidth: 2, // border-2
    borderColor: "#333333", // border-black-200
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#FFFFFF", // text-white
    fontSize: 16, // text-base
    fontWeight: "600", // font-psemibold
  },
  icon: {
    width: 24, // w-6 → 6 * 4 = 24px
    height: 24, // h-6 → 24px
  },
});
