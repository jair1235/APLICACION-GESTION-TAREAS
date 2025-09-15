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
## 📸 Capturas de pantalla

<img width="1919" height="429" alt="Captura de pantalla 2025-09-14 204501" src="https://github.com/user-attachments/assets/087b4881-28fd-4a4b-b885-f5423b010f69" />
<img width="1917" height="856" alt="Captura de pantalla 2025-09-14 204450" src="https://github.com/user-attachments/assets/a319616c-dcb1-4c40-9167-d38443113648" />
<img width="1915" height="1000" alt="Captura de pantalla 2025-09-14 204443" src="https://github.com/user-attachments/assets/c30bd137-3275-4147-afa9-81fa91eb58ee" />
<img width="1919" height="991" alt="Captura de pantalla 2025-09-14 204431" src="https://github.com/user-attachments/assets/a93f622d-ce47-41d9-9a98-c00f811e4d86" />
<img width="1919" height="1016" alt="Captura de pantalla 2025-09-14 204335" src="https://github.com/user-attachments/assets/3d192f9a-d34d-465a-85cf-7e40025eb17e" />
<img width="1919" height="884" alt="Captura de pantalla 2025-09-14 204307" src="https://github.com/user-attachments/assets/4cb8a1f8-ad33-404e-9f5e-125a90235914" />
<img width="1919" height="1079" alt="Captura de pantalla 2025-09-14 185532" src="https://github.com/user-attachments/assets/7946e784-6049-419b-aec9-12b59ec2ea21" />



