import { SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Import screens
import HomeScreen from "./screens/HomeScreen"
import DashboardScreen from "./screens/DashboardScreen"
import MakePaymentScreen from "./screens/MakePaymentScreen"
import SendMoneyScreen from "./screens/SendMoneyScreen"
import CashOutScreen from "./screens/CashOutScreen"
import TransactionHistoryScreen from "./screens/TransactionHistoryScreen"
import InternationalMoneyTransferScreen from "./screens/InternationalMoneyTransferScreen"
import ServiceOptionsModal from "./screens/ServiceOptionsModal"
import PinEntryScreen from "./screens/PinEntryScreen"
import ProfileScreen from "./screens/ProfileScreen"
import EditProfileScreen from "./screens/EditProfileScreen"
import TransferOptionsScreen from "./screens/TransferOptionsScreen"
import BankTransferScreen from "./screens/BankTransferScreen"
import OtherNetworksScreen from "./screens/OtherNetworksScreen"
import SupportScreen from "./screens/SupportScreen"
import ServicesScreen from "./screens/ServicesScreen"
import ShopScreen from "./screens/ShopScreen"
import ProductDetailScreen from "./screens/ProductDetailScreen"
import CartScreen from "./screens/CartScreen"
import CreateCustomNumberScreen from "./screens/CreateCustomNumberScreen"
import SecuritySettingsScreen from "./screens/SecuritySettingsScreen"
import NotificationsScreen from "./screens/NotificationsScreen"
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen"
import ServiceShowScreen from "./screens/ServiceShowScreen"
import OfferShowScreen from "./screens/OfferShowScreen"
import OffersScreen from "./screens/OffersScreen"
import HelpScreen from "./screens/HelpScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="MakePayment" component={MakePaymentScreen} />
          <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
          <Stack.Screen name="CashOut" component={CashOutScreen} />
          <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
          <Stack.Screen name="InternationalMoneyTransfer" component={InternationalMoneyTransferScreen} />
          <Stack.Screen name="ServiceOptions" component={ServiceOptionsModal} />
          <Stack.Screen name="PinEntry" component={PinEntryScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="TransferOptions" component={TransferOptionsScreen} />
          <Stack.Screen name="BankTransfer" component={BankTransferScreen} />
          <Stack.Screen name="OtherNetworks" component={OtherNetworksScreen} />
          <Stack.Screen name="Support" component={SupportScreen} />
          <Stack.Screen name="Services" component={ServicesScreen} />
          <Stack.Screen name="Shop" component={ShopScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="CreateCustomNumber" component={CreateCustomNumberScreen} />
          <Stack.Screen name="SecuritySettings" component={SecuritySettingsScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          <Stack.Screen name="ServiceShow" component={ServiceShowScreen} />
          <Stack.Screen name="OfferShow" component={OfferShowScreen} />
          <Stack.Screen name="Offers" component={OffersScreen} />
          <Stack.Screen name="Help" component={HelpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

