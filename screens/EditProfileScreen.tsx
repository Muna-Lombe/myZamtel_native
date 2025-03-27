
import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Camera } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const EditProfileScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+260 95 276 8272"
  })

  const handleSave = () => {
    // Handle save profile logic here
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Edit Profile" showBackButton={true} />
      
      <View style={styles.content}>
        <View style={styles.avatarContainer}>
          <Image 
            source={require("../assets/avatar.png")}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.cameraButton}>
            <Camera width={24} height={24} stroke={colors.emerald[600]} />
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
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
  avatarContainer: {
    alignItems: "center",
    marginBottom: 32,
    position: "relative",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraButton: {
    position: "absolute",
    right: "32%",
    bottom: 0,
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.emerald[300],
  },
  form: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: colors.emerald[500],
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
})

export default EditProfileScreen
