// screens/AddTaskScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { RadioButton, Card } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// 🔹 Define el tipo de tus rutas
type RootStackParamList = {
  Home: undefined;
  Card: undefined;
  Details: { task: any };
};

// 🔹 Tipo de navegación para esta pantalla
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function AddTaskScreen({
  onAddTask,
}: {
  onAddTask: (task: any) => void;
}) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("alta");
  const [category, setCategory] = useState("Trabajo");
  const [isRecurring, setIsRecurring] = useState(false);

  const navigation = useNavigation<NavigationProp>(); // ✅ navegación tipada

  const handleSave = () => {
    if (!taskName.trim()) return;

    const newTask = {
      taskName,
      priority,
      category,
      isRecurring,
    };

    onAddTask(newTask);
    setTaskName("");
    setPriority("alta");
    setCategory("Trabajo");
    setIsRecurring(false);

    // ✅ Ahora funciona sin errores de tipo
    navigation.navigate("Details", { task: newTask });
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>Agregar Tarea</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre de la tarea"
          value={taskName}
          onChangeText={setTaskName}
        />

        <Text style={styles.label}>Prioridad:</Text>
        <RadioButton.Group onValueChange={setPriority} value={priority}>
          <View style={styles.radioRow}>
            <RadioButton value="alta" />
            <Text>Alta</Text>
          </View>
          <View style={styles.radioRow}>
            <RadioButton value="media" />
            <Text>Media</Text>
          </View>
          <View style={styles.radioRow}>
            <RadioButton value="baja" />
            <Text>Baja</Text>
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>Categoría:</Text>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Trabajo" value="Trabajo" />
          <Picker.Item label="Personal" value="Personal" />
          <Picker.Item label="Compras" value="Compras" />
        </Picker>

        <View style={styles.checkboxContainer}>
          <Checkbox value={isRecurring} onValueChange={setIsRecurring} />
          <Text style={styles.label}>Recurrente</Text>
        </View>

        <Button title="Guardar tarea" onPress={handleSave} />

        {/* 🔹 Navegación manual */}
        <View style={{ marginTop: 20 }}>
          <Button
            title="Ir a CardScreen"
            onPress={() => navigation.navigate("Card")}
          />
          <Button
            title="Ir a DetailsScreen"
            onPress={() =>
              navigation.navigate("Details", {
                task: { taskName, priority, category, isRecurring },
              })
            }
          />
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});
