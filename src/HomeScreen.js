import React, {Component} from 'react';
import {StyleSheet, Text, View,Button,TextInput,TouchableOpacity,ScrollView,Image,} from 'react-native';
import Constant from "./Constant";

/**
 * 
 @description: In this class the keyword on which the data is found is entered in the TextInput
 */
export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'HOME',
        headerStyle: { backgroundColor: "#1DD07D"},
        headerTitleStyle:{
          color:'white',
          fontSize:17,
          fontWeight:'bold'
      },
      };
      constructor(props){
        super(props);
        this.state = {searchText:""}
        
      }
      
     
    /**
     * @description:function to hit api
     */
    async navigatetoDetail (){
        if (this.state.searchText != ""){
         
         const url = Constant.URL.BASE_URL+'/search/movie?api_key=3b0357883aabbc1f358973c354d4e896&query='+ this.state.searchText
         console.log(url);
       await this.setState({searchText: ""});
         console.warn("state", this.state.searchText)
      await fetch(url,{
        method:'GET',
        
       
    }).then((response) =>   response.json().then((responseJson) => {
        console.log(responseJson);
        let movieData = responseJson.results
       
       console.warn(movieData);
       
       const {navigate} = this.props.navigation;
           navigate('ListScreen',{data:movieData})
         })
    )
       .catch((error) => {
           console.error(error);
         });
          
       }
      
       else{
         alert("Please enter the search Keyword")
       }
     }

 /**
   * @description:render function
   */
render(){
  return(
        <ScrollView>     
           <View style = {styles.container}>
              <View style = {styles.imageConatiner}>
                <Image style = {styles.imageStyle} 
                        source={{ uri:Constant.URL.LOGO_URL}}/>
              </View>
              <View style = {styles.textContainer}>
                 <TextInput style = {styles.input}
                value={this.state.searchText}

               placeholder = "Search for a movie"
                autoCapitalize = "none"
              onChangeText={(text)=>
                  this.setState({
                    searchText:text
                  })}/>
              <TouchableOpacity style = {styles.searchButton}
                onPress ={() =>

                  this.navigatetoDetail()}>
               <Text style = {styles.textStyle}>Search</Text>
              </TouchableOpacity>
              </View>
           </View>

        </ScrollView>


   )

   }
   }
   
/**
 * @description:StyleSheet for the component
 */

const styles = StyleSheet.create({

  container:{
    flex:1
  },
  imageConatiner:{
    margin:50,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  imageStyle:{
    height:100,
    width:100,
    resizeMode:'cover',
    marginTop:20
  },
  textContainer:{
    flex:2,
    justifyContent:'center',
   
  },
  input :{
    margin: 20,
     height: 40,
     borderWidth: 1,
     padding:5
    
  },
  searchButton:{
    backgroundColor:'#1DD07D',
    height:50,
    margin : 20,
    justifyContent:'center',
     alignItems:'center'
  },
  textStyle:
  {
    fontSize:18,
    color:'white',
    fontWeight:'bold'
  }

})

