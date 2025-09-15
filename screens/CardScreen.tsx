import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardScreen() {
  const navigation = useNavigation<any>();

  const exampleTask = {
    taskName: "Ejemplo desde Card",
    priority: "alta",
    category: "Trabajo",
    isRecurring: true,
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://ibb.co/4gP7bXHz" }} // ejemplo
          style={styles.image}
        />
        <Text style={styles.title}>Tarjeta de ejemplo</Text>
        <Text style={styles.description}>
          Esta es una tarjeta con imagen. Al presionar el botón, se abre otra pantalla.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Details", { task: exampleTask })}
        >
          <Text style={styles.buttonText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#6200ea",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
