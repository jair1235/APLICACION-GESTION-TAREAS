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
<img width="1919" height="991" alt="Captura de pantalla 2025-09-14 204431" src="https://github.com/user-attachments/assets/e3b75683-1389-4890-813e-d0bff96c6462" />
<img width="1915" height="1000" alt="Captura de pantalla 2025-09-14 204443" src="https://github.com/user-attachments/assets/590bb762-0d42-4180-a619-39150690ed7c" />
<img width="1917" height="856" alt="Captura de pantalla 2025-09-14 204450" src="https://github.com/user-attachments/assets/11e95029-7cde-4e7c-be3c-be4fa1c60f4e" />
<img width="1919" height="429" alt="Captura de pantalla 2025-09-14 204501" src="https://github.com/user-attachments/assets/49aa346e-54ea-4902-9692-3cdc91a83cbf" />
<img width="1919" height="1079" alt="Captura de pantalla 2025-09-14 185532" src="https://github.com/user-attachments/assets/1ac6f0db-e9d2-4757-a7b3-1a358bd21d46" />
<img width="1919" height="884" alt="Captura de pantalla 2025-09-14 204307" src="https://github.com/user-attachments/assets/038a41f3-0516-4deb-be50-621aa8da66d0" />
<img width="1919" height="1016" alt="Captura de pantalla 2025-09-14 204335" src="https://github.com/user-attachments/assets/bebb7110-c85a-4c23-91e8-bd59eee07ea0" />
<img width="32" height="1" alt="Captura de pantalla 2025-09-14 204426" src="https://github.com/user-attachments/assets/485b17d9-9a20-4bf7-9739-a0f2b30fecf6" />

