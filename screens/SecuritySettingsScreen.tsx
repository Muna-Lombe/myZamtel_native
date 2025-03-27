import { View, Text, Switch, StyleSheet, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Lock, Fingerprint, Bell, Shield } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const SecuritySettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Security Settings" showBackButton={true} />
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Authentication</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Lock stroke={colors.gray[600]} width={24} height={24} />
              <Text style={styles.settingLabel}>PIN Authentication</Text>
            </View>
            <Switch value={true} />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Fingerprint stroke={colors.gray[600]} width={24} height={24} />
              <Text style={styles.settingLabel}>Biometric Authentication</Text>
            </View>
            <Switch value={false} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Transaction Security</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Bell stroke={colors.gray[600]} width={24} height={24} />
              <Text style={styles.settingLabel}>Transaction Notifications</Text>
            </View>
            <Switch value={true} />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Shield stroke={colors.gray[600]} width={24} height={24} />
              <Text style={styles.settingLabel}>Extra Verification</Text>
            </View>
            <Switch value={true} />
          </View>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  settingInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingLabel: {
    fontSize: 16,
    color: colors.gray[700],
    marginLeft: 12,
  },
})

export default SecuritySettingsScreen