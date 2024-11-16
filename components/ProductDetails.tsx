import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import useCartStore from "@/store/cartStore";
import Group from "@/components/Group";
import ProductIntro from "@/components/ProductIntro";
import GroupBuy from "@/components/GroupBuy";
import CollapsibleSection from "./ColapsableSection";
import Button from "./Button";
import { Product } from "@/store/interfaces";

const CartScreen = (response: { response: Product }) => {
  let { response: item } = response;

  const { reduceProduct, addProduct, products } = useCartStore();
  const hasProduct = products.filter((pro) => pro.id === item.id);
  if (hasProduct.length !== 0) {
    item = hasProduct[0];
  }

  const truncateString = (input: string) => {
    const words = input.split(" ");
    const firstTwoWords = words.slice(0, 2);
    const thirdWord = words.slice(2, 3);
    return [firstTwoWords.join(" "), thirdWord];
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#eaeaea" }}>
      <ProductIntro
        truncateString={truncateString}
        item={item}
        reduceProduct={reduceProduct}
        addProduct={addProduct}
      />
      <GroupBuy />
      <Group />
      <CollapsibleSection title="Product Details" content={item?.description} />
      <CollapsibleSection
        title="Shipping & Return"
        content={item?.description}
      />
      <Button text={`Confirm order at $${item?.price}`} link={"./shop"} />
      <View style={{ width: "100%", height: 100, backgroundColor: "white" }} />
    </ScrollView>
  );
};

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

export default CartScreen;
