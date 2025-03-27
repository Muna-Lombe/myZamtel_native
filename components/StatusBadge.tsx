import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import { colors } from "../styles/colors"

interface StatusBadgeProps {
  children: React.ReactNode
  variant?: "success" | "warning" | "error" | "info"
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ children, variant = "info" }) => {
  return (
    <View
      style={[
        styles.container,
        variant === "success" && styles.successContainer,
        variant === "warning" && styles.warningContainer,
        variant === "error" && styles.errorContainer,
        variant === "info" && styles.infoContainer,
      ]}
    >
      <Text
        style={[
          styles.text,
          variant === "success" && styles.successText,
          variant === "warning" && styles.warningText,
          variant === "error" && styles.errorText,
          variant === "info" && styles.infoText,
        ]}
      >
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: "flex-start",
  },
  successContainer: {
    backgroundColor: colors.green[100],
  },
  warningContainer: {
    backgroundColor: colors.yellow[100],
  },
  errorContainer: {
    backgroundColor: colors.red[100],
  },
  infoContainer: {
    backgroundColor: colors.blue[100],
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
  },
  successText: {
    color: colors.green[800],
  },
  warningText: {
    color: colors.yellow[800],
  },
  errorText: {
    color: colors.red[800],
  },
  infoText: {
    color: colors.blue[800],
  },
})

export default StatusBadge

