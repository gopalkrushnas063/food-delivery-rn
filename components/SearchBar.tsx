import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
};

export default function SearchBar({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="search" size={20} color="#999" />
      <Text style={styles.placeholder}>Search, Order, Enjoy, Repeat!</Text>
    </TouchableOpacity>
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
  placeholder: {
    marginLeft: 10,
    color: "#999",
    fontSize: 16,
  },
});
