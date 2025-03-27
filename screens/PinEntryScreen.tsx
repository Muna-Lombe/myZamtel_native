
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowLeft } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const PinEntryScreen = ({ navigation }) => {
  const [pin, setPin] = useState("")

  const handlePinSubmit = () => {
    if (pin.length === 4) {
      // Handle PIN verification
      navigation.goBack()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Enter PIN" showBackButton={true} />
      
      <View style={styles.content}>
        <Text style={styles.title}>Enter your PIN to continue</Text>
        
        <TextInput
          style={styles.pinInput}
          value={pin}
          onChangeText={setPin}
          keyboardType="numeric"
          maxLength={4}
          secureTextEntry
          placeholder="****"
        />

        <TouchableOpacity 
          style={[styles.submitButton, pin.length !== 4 && styles.disabledButton]}
          onPress={handlePinSubmit}
          disabled={pin.length !== 4}
        >
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 24,
  },
  pinInput: {
    width: "60%",
    height: 50,
    borderWidth: 1,
    borderColor: colors.emerald[300],
    borderRadius: 8,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  submitButton: {
    backgroundColor: colors.emerald[500],
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "60%",
  },
  disabledButton: {
    backgroundColor: colors.gray[300],
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
})

export default PinEntryScreen
