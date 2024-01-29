import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

export default function App() {
  LocalAuthentication.authenticateAsync({
    promptMessage: "Authenticate to proceed",
    cancelLabel: "Cancel",
  });

  return (
    <View style={styles.container}>
      <Text>Pushpaje Kumar!</Text>
      <StatusBar style="auto" />
    </View>
  );
  Loca;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
