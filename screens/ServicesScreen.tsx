
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Zap, Droplet, Shield, Monitor, CreditCard, Phone } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"

const ServicesScreen = ({ navigation }) => {
  const services = [
    { id: "electricity", name: "Electricity", icon: Zap },
    { id: "water", name: "Water", icon: Droplet },
    { id: "insurance", name: "Insurance", icon: Shield },
    { id: "tv", name: "TV", icon: Monitor },
    { id: "internet", name: "Internet", icon: CreditCard },
    { id: "airtime", name: "Airtime", icon: Phone },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Services" showBackButton={true} />
      
      <ScrollView style={styles.content}>
        <SearchBar placeholder="Search services" />
        
        <View style={styles.servicesGrid}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceCard}
              onPress={() => navigation.navigate("ServiceShow", { serviceId: service.id })}
            >
              <View style={styles.iconContainer}>
                <service.icon width={24} height={24} stroke={colors.emerald[600]} />
              </View>
              <Text style={styles.serviceName}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  serviceCard: {
    width: "31%",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    backgroundColor: colors.emerald[100],
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.gray[800],
    textAlign: "center",
  },
})

export default ServicesScreen
