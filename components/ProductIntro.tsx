import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

function ProductIntro({
  truncateString,
  item,
  reduceProduct,
  addProduct,
}: any) {
  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.cartItemGeneralDetails}>
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>
            {truncateString(item?.title)[0]}{" "}
            <Text style={{ fontWeight: "500", color: "#36454F" }}>
              {truncateString(item?.title)[1]}
            </Text>
          </Text>
          <View style={styles.ratingRow}>
            <Text style={styles.rating}>⭐ {item?.rating.rate}</Text>
            <Text style={styles.reviews}>({item?.rating.count}k)</Text>
          </View>
        </View>
        <View>
          <Text style={styles.unitText}>Base Discount</Text>
          <Text style={styles.itemPrice}>${item?.price}</Text>
          <Text style={styles.unitText}>500m Unit</Text>
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
        </View>
        <View style={styles.quantityContainer}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => reduceProduct(item)}>
                <AntDesign name="minus" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={styles.quantityText}>{item?.quantity}</Text>
            <TouchableOpacity onPress={() => addProduct(item)}>
              <View style={styles.iconContainer}>
                <AntDesign name="plus" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  groupBuyContainer: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "#eaeaea",
  },
  groupOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#cacaca",
    borderRadius: 5,
    marginRight: 5,
  },
  selected: {
    backgroundColor: "#d2d79f",
  },
  deselectedText: {
    color: "#aaaaaa",
  },
  groupOptionText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  groupOptionPrice: {
    fontSize: 10,
    color: "#777",
  },
  cartItemContainer: {
    backgroundColor: "#eaeaea",
    padding: 10,
    borderRadius: 8,
    gap: 10,
  },
  cartItemGeneralDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    width: "60%",
    paddingLeft: 10,
    // backgroundColor: "red",
  },
  itemName: {
    fontSize: 30,
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
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginVertical: 2,
  },
  unitText: {
    fontSize: 13,
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

export default ProductIntro;
