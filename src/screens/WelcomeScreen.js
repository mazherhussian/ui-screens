import React from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Instagram</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Sign up")}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Sign in")}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center", 
  },
  title: {
    fontStyle:"italic",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000000",
  },
  button: {
    backgroundColor: "#7a201a",
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10, 
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 100,
    marginVertical: 10,
  },
});
