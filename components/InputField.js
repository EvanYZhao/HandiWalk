import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function InputField({ label, setLocation }) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={label}
        onChangeText={(e) => setLocation(e)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
