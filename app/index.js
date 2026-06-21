import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { router } from "expo-router";
import { cards } from "../data/cards";

export default function Home() {
  const categories = [...new Set(cards.map((c) => c.category))];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>English Learning</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/category/${item}`)}
          >
            <Text style={styles.cardText}>{item}</Text>
            <Text style={styles.subText}>Tap to start learning →</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0b0f19",
      padding: 20,
      paddingTop: 60,
    },
  
    title: {
      fontSize: 34,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#ffffff",
    },
  
    card: {
      backgroundColor: "#111827",
      padding: 22,
      borderRadius: 18,
      marginBottom: 15,
    },
  
    cardText: {
      fontSize: 20,
      fontWeight: "700",
      color: "#ffffff",
    },
  
    subText: {
      marginTop: 5,
      color: "#9ca3af",
    },
  });
