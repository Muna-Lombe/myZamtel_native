
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "../styles/colors"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"

const ShopScreen = ({ navigation }) => {
  const products = [
    { id: "1", name: "iPhone 13", price: "999.99", image: require("../assets/placeholder.png") },
    { id: "2", name: "Samsung S21", price: "899.99", image: require("../assets/placeholder.png") },
    { id: "3", name: "Google Pixel 6", price: "799.99", image: require("../assets/placeholder.png") },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shop" showBackButton={true} />
      
      <ScrollView style={styles.content}>
        <SearchBar placeholder="Search products" />
        
        <View style={styles.productsGrid}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => navigation.navigate("ProductDetail", { productId: product.id })}
            >
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
    padding: 20,
  },
  productsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  productCard: {
    width: "48%",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[800],
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: colors.emerald[600],
    fontWeight: "500",
  },
})

export default ShopScreen
