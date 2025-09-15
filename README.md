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
<img width="1919" height="429" alt="Captura de pantalla 2025-09-14 204501" src="https://github.com/user-attachments/assets/ceb384e7-d6fe-497a-9d07-68fdb0916bce" />
<img width="1917" height="856" alt="Captura de pantalla 2025-09-14 204450" src="https://github.com/user-attachments/assets/2429933c-11e1-413c-8466-6358e1bd9f7a" />
<img width="1915" height="1000" alt="Captura de pantalla 2025-09-14 204443" src="https://github.com/user-attachments/assets/a8a65849-516d-4cdf-9396-7705180b6697" />
<img width="1919" height="1016" alt="Captura de pantalla 2025-09-14 204335" src="https://github.com/user-attachments/assets/cdc2f5e9-aedf-40f7-adfa-02067ffd9458" />
<img width="1919" height="884" alt="Captura de pantalla 2025-09-14 204307" src="https://github.com/user-attachments/assets/d895ae33-a92d-416a-b70d-6b7733945b1e" />
<img width="1919" height="1079" alt="Captura de pantalla 2025-09-14 185532" src="https://github.com/user-attachments/assets/3b241b19-9f54-4ef4-8062-d8e7c6e671f0" />



