import React, { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
  ListRenderItemInfo,
  Text,
} from "react-native";
import { images } from "@/assets/dummyImages";
const { width } = Dimensions.get("window");

const Carousel = (image: any) => {
  const data = [image.image, ...images];
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollX / width);
    setActiveIndex(currentIndex);
  };

  const renderItem = ({ item }: ListRenderItemInfo<string>) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={renderItem}
      />
      <View style={styles.carouselFooter}>
        <View style={styles.dotContainer}>
          {data.map((_, index) => (
            <TouchableOpacity key={index} style={styles.touchable}>
              <View
                style={[styles.dot, activeIndex === index && styles.activeDot]}
              />
            </TouchableOpacity>
          ))}
        </View>
        <EvilIcons name="share-google" size={40} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 20,
  },
  imageContainer: {
    width: width,
    height: 250,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width * 0.8,
    height: "80%",
    resizeMode: "contain",
  },
  carouselFooter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    paddingBottom: 1,
  },
  dotContainer: {
    flexDirection: "row",
    width: "65%",
    justifyContent: "flex-end",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#000",
  },
  touchable: {
    padding: 5,
  },
});

export default Carousel;
