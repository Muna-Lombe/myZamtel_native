"use client"

import { useState } from "react"
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from "react-native"
import {
  User,
  ArrowUpRight,
  Smartphone,
  Download,
  FileText,
  Send,
  CreditCard,
  Wallet,
  QrCode,
  ChevronRight,
  Bell,
  Plus,
} from "react-native-feather"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

import BottomNavigation from "../components/BottomNavigation"
import SearchBar from "../components/SearchBar"
import TabButton from "../components/TabButton"
import ActionCard from "../components/ActionCard"
import { colors } from "../styles/colors"

const DashboardScreen = () => {
  const navigation = useNavigation()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar backgroundColor={colors.emerald[500]} barStyle="light-content" />

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>11:37</Text>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("Profile")}>
            <User width={24} height={24} stroke={colors.white} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Mobile Money</Text>

          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("Notifications")}>
            <Bell width={24} height={24} stroke={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceLabel}>Balance (ZMW)</Text>
            <TouchableOpacity style={styles.topUpButton}>
              <Plus width={16} height={16} stroke={colors.emerald[500]} />
              <Text style={styles.topUpText}>Top Up</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.balanceAmount}>30,592.25</Text>

          <View style={styles.tabContainer}>
            <TabButton active={activeTab === "all"} onPress={() => setActiveTab("all")}>
              All
            </TabButton>
            <TabButton active={activeTab === "recent"} onPress={() => setActiveTab("recent")}>
              Recent
            </TabButton>
            <TabButton active={activeTab === "favorites"} onPress={() => setActiveTab("favorites")}>
              Favorites
            </TabButton>
          </View>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Search */}
          <View style={styles.searchContainer}>
            <SearchBar
              placeholder="Search transactions..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              onClear={() => setSearchQuery("")}
            />
          </View>

          {/* Pay from balance section */}
          <View style={styles.paySection}>
            <Text style={styles.sectionTitle}>Pay from balance</Text>

            <View style={styles.actionGrid}>
              <View style={styles.actionItem}>
                <ActionCard
                  icon={<QrCode width={20} height={20} stroke={colors.white} />}
                  label="Pay by QR"
                  onPress={() => navigation.navigate("QrPayment")}
                />
              </View>

              <View style={styles.actionItem}>
                <ActionCard
                  icon={<Smartphone width={20} height={20} stroke={colors.white} />}
                  label="Pay Bills"
                  onPress={() => navigation.navigate("MakePayment")}
                />
              </View>

              <View style={styles.actionItem}>
                <ActionCard
                  icon={<Wallet width={20} height={20} stroke={colors.white} />}
                  label="Transfer"
                  onPress={() => navigation.navigate("TransferOptions")}
                />
              </View>
            </View>
          </View>

          {/* Transfer Options */}
          <View style={styles.transferSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Transfer Money</Text>
              <TouchableOpacity>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.transferOptions}>
              <TouchableOpacity style={styles.transferOption} onPress={() => navigation.navigate("SendMoney")}>
                <View style={styles.transferOptionLeft}>
                  <View style={styles.transferIconContainer}>
                    <Smartphone width={20} height={20} stroke={colors.emerald[600]} />
                  </View>
                  <View>
                    <Text style={styles.transferTitle}>Zamtel to Zamtel</Text>
                    <Text style={styles.transferDescription}>Send to Zamtel users</Text>
                  </View>
                </View>
                <ChevronRight width={20} height={20} stroke={colors.gray[400]} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.transferOption} onPress={() => navigation.navigate("OtherNetworks")}>
                <View style={styles.transferOptionLeft}>
                  <View style={styles.transferIconContainer}>
                    <Send width={20} height={20} stroke={colors.emerald[600]} />
                  </View>
                  <View>
                    <Text style={styles.transferTitle}>Other Networks</Text>
                    <Text style={styles.transferDescription}>Airtel, MTN</Text>
                  </View>
                </View>
                <ChevronRight width={20} height={20} stroke={colors.gray[400]} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.transferOption} onPress={() => navigation.navigate("BankTransfer")}>
                <View style={styles.transferOptionLeft}>
                  <View style={styles.transferIconContainer}>
                    <CreditCard width={20} height={20} stroke={colors.emerald[600]} />
                  </View>
                  <View>
                    <Text style={styles.transferTitle}>Bank Transfer</Text>
                    <Text style={styles.transferDescription}>Zanaco, FNB, ABSA, UBA, ZNBS</Text>
                  </View>
                </View>
                <ChevronRight width={20} height={20} stroke={colors.gray[400]} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.transferOption}
                onPress={() => navigation.navigate("InternationalMoneyTransfer")}
              >
                <View style={styles.transferOptionLeft}>
                  <View style={styles.transferIconContainer}>
                    <ArrowUpRight width={20} height={20} stroke={colors.emerald[600]} />
                  </View>
                  <View>
                    <Text style={styles.transferTitle}>International Transfer</Text>
                    <Text style={styles.transferDescription}>Send money abroad</Text>
                  </View>
                </View>
                <ChevronRight width={20} height={20} stroke={colors.gray[400]} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.transferOption} onPress={() => navigation.navigate("CashOut")}>
                <View style={styles.transferOptionLeft}>
                  <View style={styles.transferIconContainer}>
                    <Download width={20} height={20} stroke={colors.emerald[600]} />
                  </View>
                  <View>
                    <Text style={styles.transferTitle}>Cash Out</Text>
                    <Text style={styles.transferDescription}>Withdraw at agent</Text>
                  </View>
                </View>
                <ChevronRight width={20} height={20} stroke={colors.gray[400]} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Recent Transactions */}
          <View style={styles.recentTransactionsSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Transactions</Text>
              <TouchableOpacity onPress={() => navigation.navigate("TransactionHistory")}>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.emptyTransactionsContainer}>
              <View style={styles.emptyIconContainer}>
                <FileText width={32} height={32} stroke={colors.gray[400]} />
              </View>
              <Text style={styles.emptyText}>No recent transactions</Text>
              <TouchableOpacity>
                <Text style={styles.makeTransactionText}>Make your first transaction</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <BottomNavigation activeScreen="Money" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  statusBar: {
    backgroundColor: colors.emerald[500],
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "flex-end",
  },
  statusBarText: {
    color: colors.white,
    fontSize: 12,
  },
  header: {
    backgroundColor: colors.emerald[500],
    paddingBottom: 24,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
  iconButton: {
    padding: 8,
  },
  mainContent: {
    flex: 1,
    marginTop: -12,
  },
  balanceCard: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  balanceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  balanceLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[600],
  },
  topUpButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  topUpText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.emerald[500],
    marginLeft: 4,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.gray[800],
    marginBottom: 16,
  },
  tabContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.gray[50],
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 24,
  },
  paySection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.gray[800],
    marginBottom: 16,
  },
  actionGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionItem: {
    width: "31%",
  },
  transferSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.emerald[500],
  },
  transferOptions: {
    marginBottom: 8,
  },
  transferOption: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  transferOptionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  transferIconContainer: {
    backgroundColor: colors.emerald[100],
    borderRadius: 24,
    padding: 12,
    marginRight: 12,
  },
  transferTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.gray[800],
    marginBottom: 2,
  },
  transferDescription: {
    fontSize: 13,
    color: colors.gray[500],
  },
  recentTransactionsSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  emptyTransactionsContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 32,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  emptyIconContainer: {
    backgroundColor: colors.gray[100],
    borderRadius: 24,
    padding: 16,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 15,
    color: colors.gray[500],
    marginBottom: 16,
  },
  makeTransactionText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.emerald[500],
  },
})

export default DashboardScreen

