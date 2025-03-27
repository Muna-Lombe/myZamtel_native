import type React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { colors } from "../styles/colors"

interface ActionCardProps {
  icon: React.ReactNode
  label: string
  onPress?: () => void
  variant?: "primary" | "secondary" | "outline"
}

const ActionCard: React.FC<ActionCardProps> = ({ icon, label, onPress, variant = "primary" }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        variant === "primary" && styles.primaryContainer,
        variant === "secondary" && styles.secondaryContainer,
        variant === "outline" && styles.outlineContainer,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.iconContainer,
          variant === "primary" && styles.primaryIconContainer,
          variant === "secondary" && styles.secondaryIconContainer,
          variant === "outline" && styles.outlineIconContainer,
        ]}
      >
        {icon}
      </View>
      <Text
        style={[
          styles.label,
          variant === "primary" && styles.primaryLabel,
          variant === "secondary" && styles.secondaryLabel,
          variant === "outline" && styles.outlineLabel,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryContainer: {
    backgroundColor: colors.emerald[500],
    shadowColor: colors.emerald[500],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  secondaryContainer: {
    backgroundColor: colors.emerald[100],
  },
  outlineContainer: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  iconContainer: {
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  primaryIconContainer: {
    backgroundColor: colors.emerald[400],
  },
  secondaryIconContainer: {
    backgroundColor: colors.white,
  },
  outlineIconContainer: {
    backgroundColor: colors.emerald[50],
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  primaryLabel: {
    color: colors.white,
  },
  secondaryLabel: {
    color: colors.emerald[700],
  },
  outlineLabel: {
    color: colors.gray[800],
  },
})

export default ActionCard

