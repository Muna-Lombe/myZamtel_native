import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Trash2 } from "react-native-feather"
import { colors } from "../styles/colors"
import Header from "../components/Header"

const CartScreen = ({ navigation }) => {
  const cartItems = [
    { id: "1", name: "iPhone 13", price: "999.99", quantity: 1, image: require("../assets/placeholder.png") },
    { id: "2", name: "Samsung S21", price: "899.99", quantity: 1, image: require("../assets/placeholder.png") },
  ]

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Cart" showBackButton={true} />
      
      <ScrollView style={styles.content}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
              <View style={styles.quantityContainer}>
                <Text>Quantity: {item.quantity}</Text>
                <TouchableOpacity>
                  <Trash2 stroke={colors.red[500]} width={20} height={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.buttonText}>Proceed to Checkout</Text>
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
    padding: 16,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 15,
    color: colors.emerald[600],
    fontWeight: "500",
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[800],
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.emerald[600],
  },
  checkoutButton: {
    backgroundColor: colors.emerald[500],
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
})

export default CartScreen