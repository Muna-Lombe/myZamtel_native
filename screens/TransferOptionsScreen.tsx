
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { CreditCard, Globe, Users } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const TransferOptionsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Transfer Options" showBackButton={true} />
      
      <View style={styles.content}>
        <Text style={styles.subtitle}>Choose transfer method</Text>

        <TouchableOpacity 
          style={styles.option}
          onPress={() => navigation.navigate("BankTransfer")}
        >
          <CreditCard width={24} height={24} stroke={colors.emerald[600]} />
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Bank Transfer</Text>
            <Text style={styles.optionDescription}>Transfer to any bank account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.option}
          onPress={() => navigation.navigate("OtherNetworks")}
        >
          <Users width={24} height={24} stroke={colors.emerald[600]} />
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>Other Networks</Text>
            <Text style={styles.optionDescription}>Send to other mobile money networks</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.option}
          onPress={() => navigation.navigate("InternationalMoneyTransfer")}
        >
          <Globe width={24} height={24} stroke={colors.emerald[600]} />
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>International Transfer</Text>
            <Text style={styles.optionDescription}>Send money abroad</Text>
          </View>
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
    padding: 20,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray[600],
    marginBottom: 24,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  optionText: {
    marginLeft: 16,
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

export default TransferOptionsScreen
