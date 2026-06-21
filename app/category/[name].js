import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { useState } from "react";
import { cards as allCards } from "../../data/cards";

const { width } = Dimensions.get("window");

export default function CategoryScreen() {
  const { name } = useLocalSearchParams();

  const [cards, setCards] = useState(
    allCards.filter((c) => c.category === name)
  );

  const archiveCard = (id) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  const deleteCard = (id) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  const renderCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.category}>{name}</Text>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.label}>فارسی</Text>
        <Text style={styles.text}>{item.persian}</Text>

        <Text style={styles.label}>English</Text>
        <Text style={styles.text}>{item.english}</Text>

        {item.expressions?.length > 0 && (
          <>
            <Text style={styles.label}>Key expressions</Text>
            {item.expressions.map((e, i) => (
              <Text key={i} style={styles.exp}>
                • {e.fa} = {e.en}
              </Text>
            ))}
          </>
        )}

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.archiveBtn}
            onPress={() => archiveCard(item.id)}
          >
            <Text style={styles.btnText}>Archive</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => deleteCard(item.id)}
          >
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={cards}
      keyExtractor={(item) => item.id}
      renderItem={renderCard}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
}


const styles = StyleSheet.create({
    card: {
      width,
      flex: 1,
      backgroundColor: "#0b0f19",
      padding: 25,
      justifyContent: "center",
    },
  
    category: {
      fontSize: 14,
      color: "#8b95a7",
      marginBottom: 10,
    },
  
    title: {
      fontSize: 26,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#ffffff",
    },
  
    label: {
      marginTop: 12,
      fontWeight: "700",
      color: "#9aa4b2",
    },
  
    text: {
      fontSize: 16,
      marginTop: 6,
      color: "#e5e7eb",
      lineHeight: 24,
    },
  
    exp: {
      marginTop: 6,
      color: "#cbd5e1",
    },
  
    buttons: {
      flexDirection: "row",
      marginTop: 40,
      justifyContent: "space-between",
    },
    archiveBtn: {
        backgroundColor: "#111827",
        borderColor: "#10b981",
        borderWidth: 1,
        padding: 14,
        borderRadius: 12,
        width: "48%",
      },
      
      deleteBtn: {
        backgroundColor: "#111827",
        borderColor: "#ef4444",
        borderWidth: 1,
        padding: 14,
        borderRadius: 12,
        width: "48%",
      },
      
      btnText: {
        color: "#e5e7eb",
        textAlign: "center",
        fontWeight: "600",
      },
  });

