import { StyleSheet, Text, View } from "react-native";

import LottieView from "lottie-react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <LottieView 
      source={require('../assets/animations/Isometric_data.json')}
      autoPlay // reproduce automáticamente
      loop // repite la animación
      speed={0.9}
      style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  animation: {
    width: 300,
    height: 300,
  },
});
