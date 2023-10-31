import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { categories, sources } from "../API/api";
import { NewsContext } from "../API/Context";
import Search from "../components/Search";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const DiscoverScreen = () => {
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  console.log(sources)

  return (
    <View style={styles.discover}>
      <Search />
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
      >
        Categories
      </Text>
      <Carousel
        layout={"default"}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => setCategory(item.name)}
              style={styles.category}
            >
              <Image source={{ uri: item.pic }} style={styles.categoryImage} />
              <Text
                style={{ ...styles.name, color: darkTheme ? "white" : "black" }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
      >
        Sources
      </Text>
      <ScrollView style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            style={{...styles.sourceContainer, borderColor: darkTheme ? "white" : "black"}}
          >
            <Image source={{ uri: s.pic }} alt="image" style={styles.sourceImage} />
            <Text style={{ ...styles.sourceName, color: darkTheme ? "white" : "black" }} >{s.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.sources}>

      </View>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  sources: {
    height: 450,
    width: windowWidth
  },
  sourceContainer: {
    flex: 1,
    flexDirection: "row",
    height: 80,
    width: "95%",
    borderRadius: 10,
    margin: 15,
    border: 3,
    // borderColor: "black",
    borderWidth: 3,
    // backgroundColor: "#4B39F2",
  },
  sourceImage: {
    height: "100%",
    width: "30%",
    borderRadius: 10,
    resizeMode: "contain",
  },
  sourceName: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: 10,
  }
});
