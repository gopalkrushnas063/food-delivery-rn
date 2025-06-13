import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

export default function RestaurantDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    require("@/assets/images/restaurant_1.png"),
    require("@/assets/images/pizza.png"),
    require("@/assets/images/restaurant_1.png"),
  ];

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
      {/* Carousel Header */}
      <View
        style={{ position: "relative", borderRadius: 30, overflow: "hidden" }}
      >
        <Carousel
          width={width}
          height={250}
          data={images}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item }) => (
            <Image source={item} style={styles.heroImage} />
          )}
        />

        {/* Top Left/Right Icons */}
        <View style={styles.topIcons}>
          <TouchableOpacity style={styles.icon} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Dot Indicator */}
        <View style={styles.dotContainer}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, activeIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>

      {/* Info */}
      <View style={styles.infoBox}>
        <View style={styles.row}>
          <FontAwesome name="star" size={14} color="orange" />
          <Text style={styles.infoText}>{restaurant.rating}</Text>
          <Text style={styles.dotText}>•</Text>
          <Text style={styles.infoText}>{restaurant.delivery}</Text>
          <Text style={styles.dotText}>•</Text>
          <Text style={styles.infoText}>{restaurant.time}</Text>
        </View>

        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.description}>{restaurant.description}</Text>

        {/* Food Categories */}
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 3, paddingTop: 10, paddingBottom: 20 }}
        >
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
  dotContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    margin: 5,
  },
  activeDot: {
    backgroundColor: "#ff6600",
    width: 10,
    height: 10,
  },
  infoBox: { padding: 20 },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  infoText: { marginHorizontal: 5, color: "#444" },
  dotText: { color: "#888", fontSize: 12 },
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
