import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function RestaurantCard({ image, name, tags, rating, deliveryFee, eta }: any) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.tags}>{tags}</Text>
      <View style={styles.infoRow}>
        <FontAwesome name="star" size={14} color="orange" />
        <Text style={styles.infoText}>{rating}</Text>
        <Entypo name="price-tag" size={14} color="#999" />
        <Text style={styles.infoText}>{deliveryFee}</Text>
        <Text style={styles.infoText}>{eta}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  tags: {
    color: "#777",
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoText: {
    fontSize: 12,
    marginLeft: 5,
  },
});
