import React, { useState } from "react";
import { View, FlatList, Text, SafeAreaView } from "react-native";
import AddTaskScreen from "../screens/AddTaskScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa tus pantallas
import CardScreen from "../screens/CardScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const [tasks, setTasks] = useState<any[]>([]);

  const addTask = (task: any) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <View style={{ flex: 1 }}>
      <AddTaskScreen onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.taskName}
            </Text>
            <Text>Prioridad: {item.priority}</Text>
            <Text>Categoría: {item.category}</Text>
            <Text>
              {item.isRecurring ? "Recurrente ✅" : "No recurrente ❌"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Tareas" }}
        />
        {/* Pantalla de E-Cards */}
        <Stack.Screen
          name="Card"
          component={CardScreen}
          options={{ title: "E-Card" }}
        />

        {/* Pantalla de detalles */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Detalles" }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
