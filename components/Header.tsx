import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  const cartItemCount = 3; // You can dynamically get this from state

  return (
    <View style={styles.header}>
      {/* Top row with location and cart */}
      <View style={styles.topRow}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="filter-circle-outline" size={40} color="orange" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.deliverTo}>Deliver to</Text>
            <Text style={styles.location}>Halal, 123 Main St</Text>
          </View>
        </View>

        {/* Cart Icon with badge */}
        <View style={styles.cartContainer}>
          <Ionicons name="cart-outline" size={30} color="white" />
          {cartItemCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItemCount}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={{ height: 20 }}/>

      {/* Greeting */}
      <Text style={styles.greeting}>
        Hey Halal, <Text style={{ fontWeight: "bold" }}>Good Afternoon!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deliverTo: {
    color: "orange",
    fontWeight: "600",
    fontSize: 12,
  },
  location: {
    fontWeight: "500",
    fontSize: 16,
  },
  greeting: {
    marginTop: 10,
    fontSize: 16,
  },
  cartContainer: {
    position: "relative",
    padding: 5,
    backgroundColor: "black",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
  },
  cartBadge: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "#f87418",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    minWidth: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  cartBadgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});
