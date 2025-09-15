# 📝 Task Manager App (React Native + Expo)

Este proyecto es una aplicación móvil de gestión de tareas desarrollada con **React Native** y **Expo**.  
Permite **crear, visualizar y gestionar tareas** con categorías, prioridades y opciones adicionales como marcar tareas recurrentes.  

---

## 🚀 Características principales

- 📌 **Agregar tareas** con:
  - Nombre de la tarea
  - Nivel de prioridad (Alta, Media, Baja)
  - Categoría seleccionable (Trabajo, Personal, Compras)
  - Opción de marcar si es **recurrente**
- 📋 **Visualización de tareas** en tarjetas (`CardScreen`)
- 🔍 **Pantalla de detalles** (`DetailsScreen`) para ver la información completa de una tarea
- ✅ Navegación fluida entre pantallas gracias a **React Navigation**
- 🎨 Estilo moderno utilizando **React Native Paper** y componentes personalizados

---

## 🛠️ Tecnologías utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Expo Checkbox](https://docs.expo.dev/versions/latest/sdk/checkbox/)
- [@react-native-picker/picker](https://github.com/react-native-picker/picker)

---

## 📂 Estructura del proyecto

```bash
📦 TaskManagerApp
 ┣ 📂 app
 ┃ ┣ 📜 index.tsx        # Configuración de navegación principal
 ┣ 📂 screens
 ┃ ┣ 📜 AddTaskScreen.tsx  # Formulario para agregar tareas
 ┃ ┣ 📜 CardScreen.tsx     # Lista/tarjeta de tareas con navegación
 ┃ ┣ 📜 DetailsScreen.tsx  # Detalles de cada tarea
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 App.tsx (opcional según configuración de Expo)
git clone https://github.com/tu-usuario/TaskManagerApp.git
cd TaskManagerApp
npm install
yarn install
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-paper
npm install @react-native-picker/picker
expo install expo-checkbox
npx expo start
expo start



