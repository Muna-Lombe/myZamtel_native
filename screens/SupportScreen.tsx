
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { MessageCircle, Phone, Mail, HelpCircle } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const SupportScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Support" showBackButton={true} />
      
      <ScrollView style={styles.content}>
        <Text style={styles.title}>How can we help you?</Text>
        
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.iconContainer}>
              <MessageCircle width={24} height={24} stroke={colors.emerald[600]} />
            </View>
            <Text style={styles.optionTitle}>Live Chat</Text>
            <Text style={styles.optionDescription}>Chat with our support team</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.iconContainer}>
              <Phone width={24} height={24} stroke={colors.emerald[600]} />
            </View>
            <Text style={styles.optionTitle}>Call Us</Text>
            <Text style={styles.optionDescription}>Speak to an agent</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.iconContainer}>
              <Mail width={24} height={24} stroke={colors.emerald[600]} />
            </View>
            <Text style={styles.optionTitle}>Email Support</Text>
            <Text style={styles.optionDescription}>Send us an email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.iconContainer}>
              <HelpCircle width={24} height={24} stroke={colors.emerald[600]} />
            </View>
            <Text style={styles.optionTitle}>FAQs</Text>
            <Text style={styles.optionDescription}>Find quick answers</Text>
          </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 24,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionCard: {
    width: "48%",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
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
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: colors.gray[600],
  },
})

export default SupportScreen
