import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import RestaurantCard from "../components/RestaurantCard";
import SearchOverlay from "../components/SearchOverlay";
import { categories, restaurants } from "../constants/data";

export default function HomeScreen() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <SearchBar onPress={() => setSearchOpen(true)} />

        <Text style={styles.sectionTitle}>All Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {categories.map((cat) => (
            <CategoryCard key={cat.id} image={cat.image} title={cat.title} />
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Open Restaurants</Text>
        {restaurants.map((rest) => (
          <RestaurantCard key={rest.id} {...rest} />
        ))}
      </ScrollView>

      {searchOpen && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 99,
          }}
        >
          <SearchOverlay onClose={() => setSearchOpen(false)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 50 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "200",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  horizontalScroll: {
    paddingLeft: 20,
    paddingBottom: 10,
    marginBottom: 20,
  },
});
