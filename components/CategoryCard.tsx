import { Image, StyleSheet, Text, View } from "react-native";

export default function CategoryCard({
  image,
  title,
}: {
  image: any;
  title: string;
}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Starting </Text>
        <Text style={styles.title}>₹20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginRight: 15,
    borderColor: "transparent",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
  },
});
