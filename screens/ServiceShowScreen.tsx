import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ChevronRight } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const ServiceShowScreen = ({ navigation, route }) => {
  // In a real app, this would come from route.params
  const service = {
    title: "Bill Payment",
    description: "Pay your utility bills easily and securely",
    image: require("../assets/placeholder.png"),
    features: [
      "Instant payment confirmation",
      "Save payment history",
      "Schedule recurring payments",
      "Multiple payment methods",
    ],
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={service.title} showBackButton={true} />
      
      <ScrollView style={styles.content}>
        <Image source={service.image} style={styles.image} />
        
        <View style={styles.section}>
          <Text style={styles.description}>{service.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          {service.features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <ChevronRight stroke={colors.emerald[500]} width={20} height={20} />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate("MakePayment")}
        >
          <Text style={styles.buttonText}>Continue</Text>
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
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  section: {
    padding: 16,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray[600],
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: colors.gray[700],
    marginLeft: 12,
  },
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  button: {
    backgroundColor: colors.emerald[500],
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
})

export default ServiceShowScreen