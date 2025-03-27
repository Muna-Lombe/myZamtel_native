
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Calendar, Clock } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const OfferShowScreen = ({ navigation, route }) => {
  // In a real app, this would come from route.params
  const offer = {
    title: "50% Off on Airtime",
    description: "Get 50% off when you buy airtime worth K100 or more",
    image: require("../assets/placeholder.png"),
    validUntil: "2024-03-31",
    timeLeft: "5 days",
    terms: [
      "Offer valid for all networks",
      "Maximum discount of K50",
      "One redemption per user",
      "Cannot be combined with other offers",
    ],
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Special Offer" showBackButton={true} />
      
      <ScrollView style={styles.content}>
        <Image source={offer.image} style={styles.image} />
        
        <View style={styles.section}>
          <Text style={styles.title}>{offer.title}</Text>
          <Text style={styles.description}>{offer.description}</Text>
        </View>

        <View style={styles.validityContainer}>
          <View style={styles.validityItem}>
            <Calendar stroke={colors.emerald[500]} width={20} height={20} />
            <Text style={styles.validityText}>Valid until {offer.validUntil}</Text>
          </View>
          <View style={styles.validityItem}>
            <Clock stroke={colors.emerald[500]} width={20} height={20} />
            <Text style={styles.validityText}>{offer.timeLeft} remaining</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Terms & Conditions</Text>
          {offer.terms.map((term, index) => (
            <Text key={index} style={styles.termItem}>• {term}</Text>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate("MakePayment")}
        >
          <Text style={styles.buttonText}>Redeem Now</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.gray[900],
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray[600],
  },
  validityContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: colors.white,
    marginBottom: 16,
  },
  validityItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  validityText: {
    fontSize: 14,
    color: colors.gray[700],
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 16,
  },
  termItem: {
    fontSize: 14,
    color: colors.gray[700],
    marginBottom: 8,
    lineHeight: 20,
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

export default OfferShowScreen
