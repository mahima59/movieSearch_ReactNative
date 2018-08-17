import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Constant from "./Constant";
var movieList = [];
/**
 * 
 @description: In this class the list of the search movies is shown
 */
export default class ListScreen extends Component {
  static navigationOptions = {
    title: "LIST",
    headerStyle: { backgroundColor: "#1DD07D" },
    headerTitleStyle: {
      color: "white",
      fontSize:17,
      fontWeight:'bold'
    },
    headerTintColor: "white"
  };

  /**
   * @description:render function
   */
  render() {
    movieList = this.props.navigation.state.params.data;
    console.log("moveis", movieList);
    if (movieList.length == 0) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
         <Text>No Data Found</Text>
        
        </View>
      );
    }
    else{
    return (
      <FlatList
        style={{ flex: 1 }}
        data={movieList}
        renderItem={({ item }) => (
          <View style={{flex: 1,margin: 15,borderWidth: 1,borderColor: "lightgray"
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.imageConatiner}>
                <Image
                  style={styles.imageStyle}
                  resizeMode="cover"
                  source={{ uri:item.poster_path != null ? Constant.URL.IMAGE_URL + item.poster_path : Constant.URL.PLACEHOLDER_IMAGE}}/>
              </View>
              <View style={styles.textConatiner}>
                <Text style={styles.input}>{item.original_title}</Text>
                <Text style={styles.textStyle}>Release Date</Text>
                <Text style={{ fontSize: 17, margin: 5, color: "gray" }}>
                  {item.release_date}
                </Text>
                {}
                <Text style={styles.textStyle}>Popularity</Text>
                <Text style={{ fontSize: 14, color: "gray", margin: 5 }}>
                  {item.popularity}
                </Text>
              </View>
            </View>
            <Text style={styles.textStyle}>Description</Text>
            <Text
              style={{ fontSize: 14, color: "gray", margin: 5, padding: 5 }}
            >
              {item.overview}
            </Text>
          </View>
        )}
      />
    );
  }
}
}

/**
 * @description:StyleSheet for the component
 */
const styles = StyleSheet.create({
  imageConatiner: {
    flex: 1
  },
  imageStyle: {
    height: 180,
    width: 120,
    resizeMode: "cover"
  },
  textConatiner: {
    flex: 2,
    margin: 25
  },
  input: {
    margin: 5,
    fontSize: 17,
    fontWeight: "bold"
  },
  buttonStyle: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#1DD07D"
  },
  textStyle: {
    fontSize: 17,
    margin: 5,
    color: "black",
    marginBottom: 5
  },

  emptyView: {
    height: "30%",
    width: "80%",
    borderColor: "gray",
    borderWidth: 1.0
  }
});
