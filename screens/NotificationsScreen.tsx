import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Bell, DollarSign, AlertCircle, Gift } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const NotificationsScreen = ({ navigation }) => {
  const notifications = [
    {
      id: "1",
      type: "transaction",
      title: "Money Received",
      message: "You received K500.00 from John Doe",
      time: "2 minutes ago",
      icon: DollarSign,
    },
    {
      id: "2",
      type: "alert",
      title: "Security Alert",
      message: "New device login detected",
      time: "1 hour ago",
      icon: AlertCircle,
    },
    {
      id: "3",
      type: "promo",
      title: "Special Offer",
      message: "Get 50% off on your next transfer!",
      time: "2 hours ago",
      icon: Gift,
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Notifications" showBackButton={true} />
      
      <ScrollView style={styles.content}>
        {notifications.map((notification) => (
          <TouchableOpacity key={notification.id} style={styles.notificationItem}>
            <View style={styles.iconContainer}>
              <notification.icon stroke={colors.emerald[500]} width={24} height={24} />
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.title}>{notification.title}</Text>
              <Text style={styles.message}>{notification.message}</Text>
              <Text style={styles.time}>{notification.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  notificationItem: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.emerald[50],
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: colors.gray[400],
  },
})

export default NotificationsScreen