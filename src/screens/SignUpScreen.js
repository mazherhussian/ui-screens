import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export function SignUpScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign up</Text>

      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <TextInput style={styles.input} placeholder="Confirm Password" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line}></View>
      </View>

      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.buttonText}>Sign up with Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink}>Log in</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000000",
  },
  input: {
    height: 50,
    borderColor: "#DBDBDB",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "#7a201a",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#DBDBDB",
  },
  orText: {
    marginHorizontal: 10,
    color: "#8E8E8E",
    fontSize: 16,
  },
  facebookButton: {
    backgroundColor: "#7a201a",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  loginText: {
    marginTop: 20,
    textAlign: "center",
    color: "#8E8E8E",
    fontSize: 16,
  },
  loginLink: {
    color: "#0095F6",
    fontWeight: "bold",
  },
});
