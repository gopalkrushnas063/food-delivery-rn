import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Animated, { SlideInUp, SlideOutUp } from "react-native-reanimated";
import { useState } from "react";

const suggestions = [
  "Pizza",
  "Burger",
  "Paneer Tikka",
  "Biryani",
  "Momos",
  "Fries",
  "Dosa",
  "Tandoori Chicken",
];

const recentSearches = [
  "Chapan Bhog",
  "Priya Restaurant",
  "Hotel Sri Mandira",
  "Whats That Flavour",
];

export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const hasQuery = query.length > 0;

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  

  return (
    <Animated.View
      entering={SlideInUp.duration(300)}
      exiting={SlideOutUp.duration(200)}
      style={[styles.overlay, hasQuery && styles.fullscreen]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: hasQuery ? 1 : undefined }}
      >
        {/* Top header with back + title */}
        <View style={styles.topHeader}>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Search for dishes & restaurants</Text>
        </View>

        {/* Search bar with mic */}
        <View style={styles.searchBoxWrapper}>
          <Ionicons name="search" size={20} color="#999" style={{ marginLeft: 10 }} />
          <TextInput
            autoFocus
            placeholder="Search, Order, Enjoy, Repeat!"
            placeholderTextColor="#aaa"
            style={styles.input}
            value={query}
            onChangeText={setQuery}
          />
          <TouchableOpacity>
            <MaterialIcons name="keyboard-voice" size={22} color="#ff4d4d" />
          </TouchableOpacity>
        </View>

        {/* Recent */}
        {!hasQuery && (
          <View style={styles.recentContainer}>
            <Text style={styles.recentTitle}>RECENTLY SEARCHED RESTAURANTS</Text>
            <View style={styles.chipsWrapper}>
              {recentSearches.map((item) => (
                <View key={item} style={styles.chip}>
                  <Ionicons
                    name="refresh-circle"
                    size={16}
                    color="#555"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={styles.chipText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Suggestions */}
        {hasQuery && (
          <View style={styles.suggestionsContainer}>
            <FlatList
              data={filteredSuggestions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Text style={styles.suggestionItem}>🍽 {item}</Text>
              )}
            />
          </View>
        )}
      </KeyboardAvoidingView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    zIndex: 100,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  fullscreen: {
    bottom: 0,
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 12,
    color: "#222",
  },
  searchBoxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 8,
    color: "#000",
  },
  recentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  recentTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 10,
  },
  chipsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
  },
  chipText: {
    fontSize: 14,
    color: "#333",
  },
  suggestionsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  suggestionItem: {
    fontSize: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
    color: "#111",
  },
});
