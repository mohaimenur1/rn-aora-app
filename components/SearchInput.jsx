import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import SearchIcon from "../assets/icons/search.png";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  return (
    <View style={[styles.container, otherStyles]}>
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
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image className="w-5 h-5" source={SearchIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8, // space-y-2 approximation
  },
  title: {
    fontSize: 16, // text-base
    color: "#E5E5E5", // text-gray-100
    fontWeight: "500", // approximate font-pmedium
    marginTop: 30,
  },
  inputWrapper: {
    width: "100%", // w-full
    height: 64, // h-16 → 16 * 4 = 64px
    paddingHorizontal: 16, // px-4 → 16px
    backgroundColor: "#232533", // bg-black-100
    borderRadius: 10, // rounded-2xl ~ 24px
    borderWidth: 2, // border-2
    borderColor: "#333333", // border-black-200
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10, // mt-2
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
