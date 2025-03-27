
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { User, Settings, Shield, Bell, FileText } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Profile" showBackButton={true} />
      
      <View style={styles.content}>
        <View style={styles.profileHeader}>
          <Image 
            source={require("../assets/avatar.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.phone}>+260 95 276 8272</Text>
        </View>

        <View style={styles.menuSection}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <User width={24} height={24} stroke={colors.emerald[600]} />
            <Text style={styles.menuText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate("SecuritySettings")}
          >
            <Shield width={24} height={24} stroke={colors.emerald[600]} />
            <Text style={styles.menuText}>Security Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Bell width={24} height={24} stroke={colors.emerald[600]} />
            <Text style={styles.menuText}>Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigation.navigate("PrivacyPolicy")}
          >
            <FileText width={24} height={24} stroke={colors.emerald[600]} />
            <Text style={styles.menuText}>Privacy Policy</Text>
          </TouchableOpacity>
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
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 32,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 4,
  },
  phone: {
    fontSize: 16,
    color: colors.gray[600],
  },
  menuSection: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
  menuText: {
    marginLeft: 16,
    fontSize: 16,
    color: colors.gray[800],
  },
})

export default ProfileScreen
