"use client"

import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native"
import { ArrowLeft, Calendar, ChevronDown, Filter, Search } from "lucide-react-native"
import { colors } from "../styles/colors"
import BottomNavigation from "../components/BottomNavigation"

interface Transaction {
  id: string
  type: string
  amount: string
  recipient: string
  date: string
  status: "completed" | "pending" | "failed"
}

interface TransactionHistoryScreenProps {
  navigation: any
}

const TransactionHistoryScreen = ({ navigation }: TransactionHistoryScreenProps) => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [dateRange, setDateRange] = useState({ from: "", to: "" })
  const [showDatePicker, setShowDatePicker] = useState(false)

  const transactions: Transaction[] = [
    {
      id: "TX123456",
      type: "Send Money",
      amount: "K250.00",
      recipient: "John Doe",
      date: "Today, 10:30 AM",
      status: "completed",
    },
    {
      id: "TX123455",
      type: "Cash Out",
      amount: "K500.00",
      recipient: "ATM Withdrawal",
      date: "Yesterday, 2:15 PM",
      status: "completed",
    },
    {
      id: "TX123454",
      type: "Bill Payment",
      amount: "K120.00",
      recipient: "ZESCO",
      date: "Yesterday, 9:45 AM",
      status: "completed",
    },
    {
      id: "TX123453",
      type: "Airtime Purchase",
      amount: "K50.00",
      recipient: "Self",
      date: "Mar 15, 2023",
      status: "completed",
    },
    {
      id: "TX123452",
      type: "International Transfer",
      amount: "K1,200.00",
      recipient: "Sarah Smith",
      date: "Mar 14, 2023",
      status: "pending",
    },
    {
      id: "TX123451",
      type: "Send Money",
      amount: "K350.00",
      recipient: "Michael Brown",
      date: "Mar 12, 2023",
      status: "failed",
    },
    {
      id: "TX123450",
      type: "Cash In",
      amount: "K1,000.00",
      recipient: "Self",
      date: "Mar 10, 2023",
      status: "completed",
    },
  ]

  const filteredTransactions = transactions.filter((transaction) => {
    if (activeFilter === "all") return true
    if (activeFilter === "send") return transaction.type === "Send Money"
    if (activeFilter === "cashout") return transaction.type === "Cash Out"
    if (activeFilter === "bills") return transaction.type === "Bill Payment"
    if (activeFilter === "airtime") return transaction.type === "Airtime Purchase"
    return true
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return styles.statusCompleted
      case "pending":
        return styles.statusPending
      case "failed":
        return styles.statusFailed
      default:
        return styles.statusDefault
    }
  }

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case "completed":
        return styles.statusCompletedText
      case "pending":
        return styles.statusPendingText
      case "failed":
        return styles.statusFailedText
      default:
        return styles.statusDefaultText
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ArrowLeft size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Transaction History</Text>
        </View>
        <TouchableOpacity onPress={() => setShowFilters(!showFilters)} style={styles.filterButton}>
          <Filter size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search and Filters */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={colors.gray[400]} style={styles.searchIcon} />
          <TextInput
            placeholder="Search transactions"
            style={styles.searchInput}
            placeholderTextColor={colors.gray[400]}
          />
        </View>

        {showFilters && (
          <View style={styles.filtersContainer}>
            <Text style={styles.filtersTitle}>Filter Transactions</Text>

            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>Transaction Type</Text>
              <View style={styles.filterButtonsContainer}>
                <TouchableOpacity
                  onPress={() => setActiveFilter("all")}
                  style={[
                    styles.filterTypeButton,
                    activeFilter === "all" ? styles.activeFilterButton : styles.inactiveFilterButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      activeFilter === "all" ? styles.activeFilterText : styles.inactiveFilterText,
                    ]}
                  >
                    All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveFilter("send")}
                  style={[
                    styles.filterTypeButton,
                    activeFilter === "send" ? styles.activeFilterButton : styles.inactiveFilterButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      activeFilter === "send" ? styles.activeFilterText : styles.inactiveFilterText,
                    ]}
                  >
                    Send Money
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveFilter("cashout")}
                  style={[
                    styles.filterTypeButton,
                    activeFilter === "cashout" ? styles.activeFilterButton : styles.inactiveFilterButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      activeFilter === "cashout" ? styles.activeFilterText : styles.inactiveFilterText,
                    ]}
                  >
                    Cash Out
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveFilter("bills")}
                  style={[
                    styles.filterTypeButton,
                    activeFilter === "bills" ? styles.activeFilterButton : styles.inactiveFilterButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      activeFilter === "bills" ? styles.activeFilterText : styles.inactiveFilterText,
                    ]}
                  >
                    Bill Payments
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveFilter("airtime")}
                  style={[
                    styles.filterTypeButton,
                    activeFilter === "airtime" ? styles.activeFilterButton : styles.inactiveFilterButton,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterButtonText,
                      activeFilter === "airtime" ? styles.activeFilterText : styles.inactiveFilterText,
                    ]}
                  >
                    Airtime
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>Date Range</Text>
              <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)} style={styles.dateRangeButton}>
                <View style={styles.dateRangeButtonContent}>
                  <Calendar size={18} color={colors.gray[500]} style={styles.calendarIcon} />
                  <Text style={styles.dateRangeText}>
                    {dateRange.from && dateRange.to ? `${dateRange.from} - ${dateRange.to}` : "Select date range"}
                  </Text>
                </View>
                <ChevronDown size={18} color={colors.gray[500]} />
              </TouchableOpacity>

              {showDatePicker && (
                <View style={styles.datePickerContainer}>
                  <View style={styles.dateInputsContainer}>
                    <View style={styles.dateInputWrapper}>
                      <Text style={styles.dateInputLabel}>From</Text>
                      <TextInput
                        style={styles.dateInput}
                        value={dateRange.from}
                        onChangeText={(text) => setDateRange({ ...dateRange, from: text })}
                        placeholder="YYYY-MM-DD"
                        placeholderTextColor={colors.gray[400]}
                      />
                    </View>
                    <View style={styles.dateInputWrapper}>
                      <Text style={styles.dateInputLabel}>To</Text>
                      <TextInput
                        style={styles.dateInput}
                        value={dateRange.to}
                        onChangeText={(text) => setDateRange({ ...dateRange, to: text })}
                        placeholder="YYYY-MM-DD"
                        placeholderTextColor={colors.gray[400]}
                      />
                    </View>
                  </View>
                  <View style={styles.datePickerActions}>
                    <TouchableOpacity
                      onPress={() => {
                        setShowDatePicker(false)
                        // Here you would apply the date filter
                      }}
                      style={styles.applyButton}
                    >
                      <Text style={styles.applyButtonText}>Apply</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>

            <View style={styles.filterActions}>
              <TouchableOpacity
                onPress={() => {
                  setActiveFilter("all")
                  setDateRange({ from: "", to: "" })
                }}
                style={styles.resetButton}
              >
                <Text style={styles.resetButtonText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowFilters(false)} style={styles.applyFiltersButton}>
                <Text style={styles.applyFiltersButtonText}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      {/* Transaction List */}
      <ScrollView style={styles.transactionList}>
        <View style={styles.transactionListContent}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>

          {filteredTransactions.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>No transactions found</Text>
            </View>
          ) : (
            <View style={styles.transactionsContainer}>
              {filteredTransactions.map((transaction) => (
                <TouchableOpacity
                  key={transaction.id}
                  style={styles.transactionCard}
                  onPress={() => {
                    // Navigate to transaction details
                    // navigation.navigate('TransactionDetail', { id: transaction.id });
                  }}
                >
                  <View>
                    <View style={styles.transactionHeader}>
                      <Text style={styles.transactionType}>{transaction.type}</Text>
                      <View style={[styles.statusBadge, getStatusColor(transaction.status)]}>
                        <Text style={[styles.statusText, getStatusTextColor(transaction.status)]}>
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.transactionRecipient}>{transaction.recipient}</Text>
                    <Text style={styles.transactionDate}>{transaction.date}</Text>
                  </View>
                  <View style={styles.transactionAmountContainer}>
                    <Text
                      style={[
                        styles.transactionAmount,
                        transaction.type.includes("Cash In") ? styles.cashInAmount : {},
                      ]}
                    >
                      {transaction.amount}
                    </Text>
                    <Text style={styles.transactionId}>{transaction.id}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation navigation={navigation} activeScreen="dashboard" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
  },
  filterButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  searchContainer: {
    padding: 16,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  searchInputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    position: "absolute",
    left: 12,
    zIndex: 1,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 8,
    fontSize: 16,
    color: colors.gray[800],
  },
  filtersContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: colors.gray[50],
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
  },
  filtersTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12,
    color: colors.gray[800],
  },
  filterSection: {
    marginBottom: 16,
  },
  filterSectionTitle: {
    fontSize: 14,
    color: colors.gray[500],
    marginBottom: 8,
  },
  filterButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  filterTypeButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  activeFilterButton: {
    backgroundColor: colors.primary,
  },
  inactiveFilterButton: {
    backgroundColor: colors.gray[200],
  },
  filterButtonText: {
    fontSize: 14,
  },
  activeFilterText: {
    color: colors.white,
  },
  inactiveFilterText: {
    color: colors.gray[700],
  },
  dateRangeButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 8,
  },
  dateRangeButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  calendarIcon: {
    marginRight: 8,
  },
  dateRangeText: {
    fontSize: 14,
    color: colors.gray[700],
  },
  datePickerContainer: {
    marginTop: 8,
    padding: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  dateInputsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  dateInputWrapper: {
    flex: 1,
  },
  dateInputLabel: {
    fontSize: 12,
    color: colors.gray[500],
    marginBottom: 4,
  },
  dateInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 6,
    fontSize: 14,
    color: colors.gray[800],
  },
  datePickerActions: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  applyButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: colors.primary,
    borderRadius: 6,
  },
  applyButtonText: {
    fontSize: 14,
    color: colors.white,
  },
  filterActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  resetButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 6,
  },
  resetButtonText: {
    fontSize: 14,
    color: colors.gray[700],
  },
  applyFiltersButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: colors.primary,
    borderRadius: 6,
  },
  applyFiltersButtonText: {
    fontSize: 14,
    color: colors.white,
  },
  transactionList: {
    flex: 1,
  },
  transactionListContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: colors.gray[800],
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
  },
  emptyStateText: {
    color: colors.gray[500],
  },
  transactionsContainer: {
    gap: 12,
  },
  transactionCard: {
    padding: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  transactionType: {
    fontWeight: "500",
    color: colors.gray[800],
  },
  statusBadge: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },
  statusCompleted: {
    backgroundColor: colors.green[100],
  },
  statusPending: {
    backgroundColor: colors.yellow[100],
  },
  statusFailed: {
    backgroundColor: colors.red[100],
  },
  statusDefault: {
    backgroundColor: colors.gray[100],
  },
  statusText: {
    fontSize: 12,
  },
  statusCompletedText: {
    color: colors.green[800],
  },
  statusPendingText: {
    color: colors.yellow[800],
  },
  statusFailedText: {
    color: colors.red[800],
  },
  statusDefaultText: {
    color: colors.gray[800],
  },
  transactionRecipient: {
    fontSize: 14,
    color: colors.gray[500],
  },
  transactionDate: {
    fontSize: 12,
    color: colors.gray[400],
  },
  transactionAmountContainer: {
    alignItems: "flex-end",
  },
  transactionAmount: {
    fontWeight: "600",
    color: colors.gray[800],
  },
  cashInAmount: {
    color: colors.green[600],
  },
  transactionId: {
    fontSize: 12,
    color: colors.gray[400],
  },
})

export default TransactionHistoryScreen

