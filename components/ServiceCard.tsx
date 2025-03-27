import type React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { colors } from "../styles/colors"

interface ServiceCardProps {
  icon: React.ReactNode
  label: string
  onPress?: () => void
  active?: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, label, onPress, active }) => {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.activeContainer]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activeContainer: {
    borderWidth: 2,
    borderColor: colors.emerald[500],
  },
  iconContainer: {
    backgroundColor: colors.emerald[50],
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.gray[800],
    textAlign: "center",
  },
})

export default ServiceCard

