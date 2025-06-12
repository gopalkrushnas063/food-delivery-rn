import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function RestaurantDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();


  // Example dummy data — replace with real data via API or context
  const restaurant = {
    name: "Spicy Restaurant",
    rating: 4.7,
    delivery: "Free",
    time: "20 min",
    description:
      "Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    foodCategories: ["Burger", "Sandwich", "Pizza"],
    items: [
      {
        id: 1,
        name: "Burger Ferguson",
        price: "$40",
        image: require("@/assets/images/pizza.png"),
      },
      {
        id: 2,
        name: "Rockin' Burgers",
        price: "$40",
        image: require("@/assets/images/pizza.png"),
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("@/assets/images/restaurant_1.png")}
        style={styles.heroImage}
      />

      {/* Header with Back and Menu */}
      <View style={styles.topIcons}>
        <TouchableOpacity style={styles.icon} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Info */}
      <View style={styles.infoBox}>
        <View style={styles.row}>
          <FontAwesome name="star" size={14} color="orange" />
          <Text style={styles.infoText}>{restaurant.rating}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.infoText}>{restaurant.delivery}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.infoText}>{restaurant.time}</Text>
        </View>

        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.description}>{restaurant.description}</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          {restaurant.foodCategories.map((cat) => (
            <View key={cat} style={styles.categoryPill}>
              <Text style={styles.categoryText}>{cat}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Food Items */}
        <Text style={styles.foodTitle}>Burger (10)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {restaurant.items.map((item) => (
            <View key={item.id} style={styles.foodCard}>
              <Image source={item.image} style={styles.foodImage} />
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodPrice}>{item.price}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  heroImage: { width: "100%", height: 250 },
  topIcons: {
    position: "absolute",
    top: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  infoBox: { padding: 20 },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  infoText: { marginHorizontal: 5, color: "#444" },
  dot: { color: "#888", fontSize: 12 },
  name: { fontSize: 20, fontWeight: "700", marginVertical: 4 },
  description: { color: "#777", fontSize: 14, lineHeight: 20 },
  categoryScroll: { marginTop: 15, marginBottom: 10 },
  categoryPill: {
    backgroundColor: "#f3f3f3",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: { fontSize: 14, fontWeight: "500" },
  foodTitle: { fontSize: 16, fontWeight: "600", marginVertical: 10 },
  foodCard: {
    backgroundColor: "#fff",
    marginRight: 15,
    borderRadius: 15,
    padding: 10,
    width: 150,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  foodImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  foodName: { fontSize: 14, fontWeight: "500" },
  foodPrice: { fontSize: 14, fontWeight: "bold" },
});
