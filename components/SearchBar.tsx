import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#999" />
      <TextInput style={styles.input} placeholder="Search dishes, restaurants" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  input: { marginLeft: 10, flex: 1 },
});
