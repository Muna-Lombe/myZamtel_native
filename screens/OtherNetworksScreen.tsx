
import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const OtherNetworksScreen = ({ navigation }) => {
  const networks = [
    { id: "airtel", name: "Airtel Money", logo: "🔴" },
    { id: "mtn", name: "MTN Mobile Money", logo: "🟡" },
    { id: "zamtel", name: "Zamtel Kwacha", logo: "🟢" }
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Other Networks" showBackButton={true} />
      
      <ScrollView style={styles.content}>
        <Text style={styles.subtitle}>Select mobile money network</Text>

        {networks.map((network) => (
          <TouchableOpacity
            key={network.id}
            style={styles.networkCard}
            onPress={() => navigation.navigate("SendMoney", { network: network.id })}
          >
            <Text style={styles.networkLogo}>{network.logo}</Text>
            <View style={styles.networkInfo}>
              <Text style={styles.networkName}>{network.name}</Text>
              <Text style={styles.networkDescription}>Send money to {network.name} users</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray[600],
    marginBottom: 24,
  },
  networkCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  networkLogo: {
    fontSize: 32,
    marginRight: 16,
  },
  networkInfo: {
    flex: 1,
  },
  networkName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 4,
  },
  networkDescription: {
    fontSize: 14,
    color: colors.gray[600],
  },
})

export default OtherNetworksScreen
