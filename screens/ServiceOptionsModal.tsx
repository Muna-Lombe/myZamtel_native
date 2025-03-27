import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { X, Signal, CreditCard, Phone, User, Wifi } from "react-native-feather"
import { colors } from "../styles/colors"

interface ServiceOptionsModalProps {
  navigation: any
}

const ServiceOptionsModal = ({ navigation }: ServiceOptionsModalProps) => {
  return (
    <View style={styles.container}>
      {/* Dimmed Background */}
      <View style={styles.dimmedBackground}>
        {/* Main Dashboard (Blurred) */}
        <View style={styles.blurredContent}>
          <View style={styles.blurredHeader}>
            <View style={styles.blurredHeaderContent}>
              <View style={styles.blurredBackButton} />
              <View style={styles.blurredAvatar} />
            </View>
          </View>

          <View style={styles.blurredBody}>
            <View style={styles.blurredCard}>
              <View style={styles.blurredTitle} />
              <View style={styles.blurredBalance} />
            </View>

            <View style={styles.blurredServicesGrid}>
              {[1, 2, 3, 4, 5].map((i) => (
                <View key={i} style={styles.blurredServiceItem}>
                  <View style={styles.blurredServiceIcon} />
                  <View style={styles.blurredServiceLabel} />
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* Modal */}
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>What would you like to do?</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate("Dashboard")}>
              <X width={24} height={24} color={colors.gray[500]} />
            </TouchableOpacity>
          </View>

          <View style={styles.servicesGrid}>
            {/* Recharge */}
            <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate("Recharge")}>
              <View style={styles.serviceIconContainer}>
                <Signal width={28} height={28} color={colors.emerald[600]} />
              </View>
              <Text style={styles.serviceLabel}>Recharge</Text>
            </TouchableOpacity>

            {/* Balance */}
            <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate("Balance")}>
              <View style={styles.serviceIconContainer}>
                <CreditCard width={28} height={28} color={colors.emerald[600]} />
              </View>
              <Text style={styles.serviceLabel}>Balance</Text>
            </TouchableOpacity>

            {/* BuyMinutes */}
            <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate("BuyMinutes")}>
              <View style={styles.serviceIconContainer}>
                <Phone width={28} height={28} color={colors.emerald[600]} />
              </View>
              <Text style={styles.serviceLabel}>BuyMinutes</Text>
            </TouchableOpacity>

            {/* BuyForOther */}
            <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate("BuyForOther")}>
              <View style={styles.serviceIconContainer}>
                <User width={28} height={28} color={colors.emerald[600]} />
              </View>
              <Text style={styles.serviceLabel}>BuyForOther</Text>
            </TouchableOpacity>

            {/* FTTH */}
            <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate("FTTH")}>
              <View style={styles.serviceIconContainer}>
                <Wifi width={28} height={28} color={colors.emerald[600]} />
              </View>
              <Text style={styles.serviceLabel}>FTTH</Text>
            </TouchableOpacity>

            {/* Yango */}
            <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate("Yango")}>
              <View style={styles.yangoIconContainer}>
                <Text style={styles.yangoText}>YANGO</Text>
              </View>
              <Text style={styles.serviceLabel}>Yango</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dimmedBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  blurredContent: {
    flex: 1,
    opacity: 0.6,
    pointerEvents: "none",
  },
  blurredHeader: {
    backgroundColor: colors.emerald[500],
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  blurredHeaderContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  blurredBackButton: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
  },
  blurredAvatar: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
  },
  blurredBody: {
    flex: 1,
    padding: 20,
  },
  blurredCard: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  blurredTitle: {
    height: 24,
    width: "33%",
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    borderRadius: 4,
    marginBottom: 8,
    alignSelf: "center",
  },
  blurredBalance: {
    height: 40,
    width: "66%",
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    borderRadius: 4,
    alignSelf: "center",
  },
  blurredServicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  blurredServiceItem: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20,
  },
  blurredServiceIcon: {
    width: 56,
    height: 56,
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    borderRadius: 28,
    marginBottom: 8,
  },
  blurredServiceLabel: {
    width: 48,
    height: 16,
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    borderRadius: 4,
  },
  modal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  modalContent: {
    padding: 20,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.gray[800],
  },
  closeButton: {
    padding: 4,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceItem: {
    width: "33%",
    alignItems: "center",
    marginBottom: 20,
  },
  serviceIconContainer: {
    backgroundColor: colors.emerald[100],
    borderRadius: 50,
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  yangoIconContainer: {
    backgroundColor: colors.red[500],
    borderRadius: 12,
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  yangoText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  serviceLabel: {
    fontSize: 14,
    color: colors.gray[700],
  },
})

export default ServiceOptionsModal

