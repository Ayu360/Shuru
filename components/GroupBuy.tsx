import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";

function GroupBuy() {
  const [groupSelected, setGroupSelected] = useState<number>(0);

  const options: Array<{ id: number; title: string; price: string }> = [
    {
      id: 0,
      title: "Group buy",
      price: "₹310 if you buy with 3 people",
    },
    {
      id: 1,
      title: "Individual",
      price: "₹410, No addl. discount",
    },
    {
      id: 2,
      title: "View All",
      price: "₹410",
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: { id: number; title: string; price: string };
  }) => (
    <TouchableOpacity
      style={[styles.groupOption, groupSelected === item.id && styles.selected]}
      onPress={() => setGroupSelected(item.id)}
    >
      <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
        <Fontisto
          name="radio-btn-active"
          size={10}
          color={`${groupSelected !== item.id ? "#aaaaaa" : "black"}`}
        />
        <Text
          style={[
            styles.groupOptionText,
            groupSelected !== item.id && styles.deselectedText,
          ]}
        >
          {item.title}
        </Text>
      </View>
      <Text style={styles.groupOptionPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.groupBuyContainer}>
      <FlatList
        horizontal
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
export default GroupBuy;
