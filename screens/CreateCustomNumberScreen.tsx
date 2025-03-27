import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const CreateCustomNumberScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Create Custom Number" showBackButton={true} />
      
      <View style={styles.content}>
        <Text style={styles.description}>
          Choose your preferred mobile number from our available options.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter desired number:</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 0970XXXXXX"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price:</Text>
          <Text style={styles.price}>K50.00</Text>
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.buttonText}>Purchase Number</Text>
        </TouchableOpacity>

        <View style={styles.noteContainer}>
          <Text style={styles.noteTitle}>Please Note:</Text>
          <Text style={styles.noteText}>
            • Custom numbers are subject to availability{"\n"}
            • The price may vary based on the number pattern{"\n"}
            • Purchase is non-refundable{"\n"}
            • Number will be activated within 24 hours
          </Text>
        </View>
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
    padding: 20,
  },
  description: {
    fontSize: 16,
    color: colors.gray[600],
    marginBottom: 24,
    lineHeight: 24,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[700],
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  priceLabel: {
    fontSize: 16,
    color: colors.gray[700],
    marginRight: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.emerald[600],
  },
  submitButton: {
    backgroundColor: colors.emerald[500],
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  noteContainer: {
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    padding: 16,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 8,
  },
  noteText: {
    fontSize: 14,
    color: colors.gray[600],
    lineHeight: 22,
  },
})

export default CreateCustomNumberScreen