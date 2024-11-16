import React, { SetStateAction, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Alert,
  ListRenderItem,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useCartStore from "@/store/cartStore";
import { Product } from "@/store/interfaces";

const CartScreen: React.FC = () => {
  const { reduceProduct, addProduct, products } = useCartStore();
  const [selectedItems, setSelectedItems] = useState<Array<number>>([]);

  const calculateSubTotal = () => {
    return products
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const truncateString = (input: string, len: number) => {
    if (input.length > len) {
      return input.substring(0, len) + "...";
    } else {
      return input;
    }
  };

  const handleSelectedItems = (id: number) => {
    setSelectedItems((prevSelectedItems: any) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((idx: number) => idx !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  const allItemsSelected = products.length === selectedItems.length;
  const handleAllSelction = () => {
    if (allItemsSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(products.map((item: Product) => item.id));
    }
  };

  const renderItem: ListRenderItem<Product> = ({ item }: any) => (
    <View style={styles.cartItemContainer}>
      <View style={styles.cartItemGeneralDetails}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => handleSelectedItems(item.id)}
        >
          <AntDesign
            name={
              selectedItems.includes(item.id) ? "checkcircle" : "checkcircleo"
            }
            size={24}
            color={selectedItems.includes(item.id) ? "#4CAF50" : "#777"}
          />
        </TouchableOpacity>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{truncateString(item.title, 50)}</Text>
          <Text style={styles.itemDescription}>
            {truncateString(item.description, 30)}
          </Text>
          <View style={styles.ratingRow}>
            <Text style={styles.rating}>⭐ {item.rating.rate}</Text>
            <Text style={styles.reviews}>({item.rating.count}k)</Text>
          </View>
        </View>
      </View>
      <View style={styles.cartItemPriceDetails}>
        <View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={styles.deliveryText}>Free Delivery</Text>
            <Text style={styles.deliveryDate}>
              Get it{" "}
              <Text style={{ fontWeight: "bold", color: "black" }}>
                Tommorrow
              </Text>
              {"\n"} order before{" "}
              <Text style={{ fontWeight: "bold", color: "black" }}>
                Midnight
              </Text>
            </Text>
          </View>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <Text style={styles.unitText}>500m Unit</Text>
        </View>
        <View style={styles.quantityContainer}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => reduceProduct(item)}>
                <AntDesign name="minus" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => addProduct(item)}>
              <View style={styles.iconContainer}>
                <AntDesign name="plus" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.itemTotal}>Item Total</Text>
            <Text style={styles.totalPrice}>
              ${(item.price * item.quantity).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.SecondaryContainer}>
        <View style={styles.header}>
          <View style={{ width: 100 }}>
            <Text style={styles.cartTitle}>Cart</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={styles.selectAllButton}
              onPress={handleAllSelction}
            >
              <Text style={styles.selectAllText}>
                {allItemsSelected ? "Unselect All Items" : "Select All Items"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.subTotalText}>
            Sub Total ${calculateSubTotal()}
          </Text>
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirm Purchase</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.cartList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... existing styles ...
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
    justifyContent: "space-around",
  },
  SecondaryContainer: {
    gap: 10,
    height: "80%",
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 40,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  actionButtons: {
    alignItems: "flex-end",
    marginBottom: 10,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  selectAllButton: {
    padding: 5,
  },
  selectAllText: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "bold",
  },
  priceContainer: {
    width: "100%",
    height: "auto",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 15,
  },
  checkbox: {
    padding: 5,
  },
  cartItemContainer: {
    backgroundColor: "#FFF8E1",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    gap: 10,
  },
  cartItemGeneralDetails: {
    flexDirection: "row",
  },
  cartItemPriceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    paddingLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  itemDescription: {
    fontSize: 12,
    fontWeight: "800",
    color: "#777",
    marginVertical: 2,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  rating: {
    fontSize: 14,
    fontWeight: 700,
    color: "#777",
  },
  reviews: {
    fontSize: 12,
    fontWeight: 700,
    color: "#777",
    marginLeft: 5,
  },
  deliveryText: {
    fontSize: 13,
    height: 20,
    width: 83,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontWeight: "600",
  },
  deliveryDate: {
    fontSize: 9,
    fontWeight: "600",
    color: "#777",
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 2,
  },
  unitText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#777",
  },
  quantityContainer: {
    alignItems: "center",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "700",
    marginHorizontal: 8,
  },
  itemTotal: {
    fontSize: 15,
    color: "#777",
    marginTop: 5,
  },
  totalPrice: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
  subTotalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  confirmButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cartList: {
    paddingBottom: 100,
  },
  iconContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 2,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default CartScreen;
