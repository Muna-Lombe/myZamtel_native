import { View, Text, ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const PrivacyPolicyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Privacy Policy" showBackButton={true} />
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Information Collection and Use</Text>
          <Text style={styles.text}>
            We collect personal information that you voluntarily provide to us when you register for an account, express interest in obtaining information about us or our products and services, or otherwise contact us.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Data Security</Text>
          <Text style={styles.text}>
            The security of your personal information is important to us. We follow industry-standard practices to protect your data from unauthorized access, disclosure, alteration, or destruction.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Third-Party Services</Text>
          <Text style={styles.text}>
            We may employ third-party companies and individuals to facilitate our service, provide service-related services, or assist us in analyzing how our service is used.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.text}>
            If you have any questions about this Privacy Policy, please contact us through our support channels.
          </Text>
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
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray[600],
  },
})

export default PrivacyPolicyScreen