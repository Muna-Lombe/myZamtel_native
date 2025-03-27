import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from "react-native"
import { Zap, Droplet, Shield, Monitor } from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

import Header from "../components/Header"
import BottomNavigation from "../components/BottomNavigation"
import { colors } from "../styles/colors"

const MakePaymentScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar backgroundColor={colors.emerald[500]} barStyle="light-content" />

      {/* Header */}
      <Header title="Make Payment" showBackButton={true} />

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>What would you like to pay for?</Text>

          <View style={styles.servicesGrid}>
            {/* Electricity */}
            <View style={styles.serviceItem}>
              <TouchableOpacity style={styles.serviceIconContainer} activeOpacity={0.7}>
                <Zap width={36} height={36} stroke={colors.emerald[600]} />
              </TouchableOpacity>
              <Text style={styles.serviceLabel}>Electricity</Text>
            </View>

            {/* Water */}
            <View style={styles.serviceItem}>
              <TouchableOpacity style={styles.serviceIconContainer} activeOpacity={0.7}>
                <Droplet width={36} height={36} stroke={colors.emerald[600]} />
              </TouchableOpacity>
              <Text style={styles.serviceLabel}>Water</Text>
            </View>

            {/* Insurance */}
            <View style={styles.serviceItem}>
              <TouchableOpacity style={styles.serviceIconContainer} activeOpacity={0.7}>
                <Shield width={36} height={36} stroke={colors.emerald[600]} />
              </TouchableOpacity>
              <Text style={styles.serviceLabel}>Insurance</Text>
            </View>

            {/* TV */}
            <View style={styles.serviceItem}>
              <TouchableOpacity style={styles.serviceIconContainer} activeOpacity={0.7}>
                <Monitor width={36} height={36} stroke={colors.emerald[600]} />
              </TouchableOpacity>
              <Text style={styles.serviceLabel}>TV</Text>
            </View>
          </View>
        </View>
      </View>

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
    fontSize: 22,
    fontWeight: "500",
    color: colors.gray[800],
    marginBottom: 32,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceItem: {
    width: "48%",
    alignItems: "center",
    marginBottom: 20,
  },
  serviceIconContainer: {
    backgroundColor: colors.emerald[100],
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  serviceLabel: {
    fontSize: 16,
    color: colors.gray[700],
  },
})

export default MakePaymentScreen

