"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { ArrowLeft, User } from "lucide-react-native"
import { colors } from "../styles/colors"
import BottomNavigation from "../components/BottomNavigation"

interface SendMoneyScreenProps {
  navigation: any
}

const SendMoneyScreen = ({ navigation }: SendMoneyScreenProps) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [receiverName, setReceiverName] = useState("")

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Money</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recipient Details</Text>

          <View style={styles.formGroup}>
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholder="Enter Number*"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                placeholderTextColor={colors.gray[400]}
              />
              <TouchableOpacity style={styles.contactButton}>
                <User size={24} color={colors.emerald[600]} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formGroup}>
            <TextInput
              style={styles.input}
              placeholder="Receiver's Name"
              value={receiverName}
              onChangeText={setReceiverName}
              placeholderTextColor={colors.gray[400]}
            />
          </View>

          <TouchableOpacity
            style={[styles.continueButton, !phoneNumber || !receiverName ? styles.disabledButton : {}]}
            disabled={!phoneNumber || !receiverName}
            onPress={() => {
              // Navigate to amount entry screen
              navigation.navigate("SendMoneyAmount", {
                phoneNumber,
                receiverName,
              })
            }}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <BottomNavigation navigation={navigation} activeScreen="dashboard" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  header: {
    backgroundColor: colors.emerald[500],
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
    flex: 1,
    textAlign: "center",
    marginRight: 24,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    padding: 24,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.gray[800],
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.emerald[200],
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: colors.gray[800],
  },
  contactButton: {
    backgroundColor: colors.emerald[100],
    padding: 16,
    borderWidth: 1,
    borderColor: colors.emerald[200],
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginLeft: -1, // Overlap the borders
  },
  continueButton: {
    backgroundColor: colors.emerald[500],
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },
  disabledButton: {
    backgroundColor: colors.gray[300],
  },
  continueButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
})

export default SendMoneyScreen

