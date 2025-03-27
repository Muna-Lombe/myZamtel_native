"use client"

import { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from "react-native"
import { ArrowLeft, Smartphone, X } from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

import Header from "../components/Header"
import BottomNavigation from "../components/BottomNavigation"
import { colors } from "../styles/colors"

const CashOutScreen = () => {
  const navigation = useNavigation()
  const [agentCode, setAgentCode] = useState("")
  const [showKeypad, setShowKeypad] = useState(true)

  const handleKeyPress = (key) => {
    if (key === "backspace") {
      setAgentCode((prev) => prev.slice(0, -1))
    } else if (key === "clear") {
      setAgentCode("")
    } else {
      setAgentCode((prev) => prev + key)
    }
  }

  const handleNext = () => {
    if (agentCode.trim()) {
      navigation.navigate("PinEntry")
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar backgroundColor={colors.emerald[500]} barStyle="light-content" />

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>10:26</Text>
      </View>

      {/* Header */}
      <Header title="Cash Out" showBackButton={true} />

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>Enter Agent Details</Text>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Agent Code*</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={agentCode}
                onChangeText={setAgentCode}
                onFocus={() => setShowKeypad(true)}
                placeholder="Enter agent code"
                keyboardType="numeric"
              />
              {agentCode ? (
                <TouchableOpacity style={styles.clearButton} onPress={() => setAgentCode("")}>
                  <X width={20} height={20} stroke={colors.gray[400]} />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>

          <View style={styles.infoBox}>
            <View style={styles.infoIconContainer}>
              <Smartphone width={20} height={20} stroke={colors.amber[600]} />
            </View>
            <Text style={styles.infoText}>You can find the agent code displayed at the agent's location</Text>
          </View>

          <TouchableOpacity
            style={[styles.nextButton, !agentCode.trim() && styles.disabledButton]}
            onPress={handleNext}
            disabled={!agentCode.trim()}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Keypad */}
      {showKeypad && (
        <View style={styles.keypad}>
          <View style={styles.keypadGrid}>
            {/* Row 1 */}
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress("1")}>
              <Text style={styles.keypadButtonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress("2")}>
              <Text style={styles.keypadButtonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress("3")}>
              <Text style={styles.keypadButtonText}>3</Text>
            </TouchableOpacity>

            {/* Row 2 */}
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress("4")}>
              <Text style={styles.keypadButtonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress("5")}>
              <Text style={styles.keypadButtonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress("6")}>
              <Text style={styles.keypadButtonText}>6</Text>
            </TouchableOpacity>

            {/* Row 3 */}
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress("7")}>
              <Text style={styles.keypadButtonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress("8")}>
              <Text style={styles.keypadButtonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress("9")}>
              <Text style={styles.keypadButtonText}>9</Text>
            </TouchableOpacity>

            {/* Row 4 */}
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress(".")}>
              <Text style={styles.keypadButtonText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress("0")}>
              <Text style={styles.keypadButtonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress("backspace")}>
              <ArrowLeft width={24} height={24} stroke={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Bottom Navigation */}
      <BottomNavigation activeScreen="Money" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  statusBar: {
    backgroundColor: colors.emerald[500],
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "flex-end",
  },
  statusBarText: {
    color: colors.white,
    fontSize: 12,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.gray[800],
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.gray[700],
    marginBottom: 4,
  },
  inputContainer: {
    position: "relative",
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: colors.emerald[200],
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  clearButton: {
    position: "absolute",
    right: 12,
    top: 16,
  },
  infoBox: {
    backgroundColor: colors.amber[50],
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  infoIconContainer: {
    backgroundColor: colors.amber[100],
    borderRadius: 16,
    padding: 8,
    marginRight: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: colors.amber[800],
  },
  nextButton: {
    backgroundColor: colors.emerald[500],
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: colors.gray[200],
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "500",
  },
  keypad: {
    backgroundColor: colors.gray[800],
    paddingVertical: 16,
  },
  keypadGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
  },
  keypadButton: {
    width: "33.33%",
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  keypadButtonInner: {
    backgroundColor: colors.gray[700],
    borderRadius: 8,
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  keypadButtonText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
})

export default CashOutScreen

