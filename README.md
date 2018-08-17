1.To install React Native :
    In Android :
      You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio
    In iOS:
    You will need Node, Watchman, the React Native command line interface, and Xcode.
    
     The following command can be used to install React Native
    
      npm  install -g create-react-native-app

2.To create project in React Native

    react-native init Project Name

3.To run Project:
 
    In android the command is :
     
       react-native run-android

   In iOS the command is

       react-native run-ios
     

In this MovieSearchApp :
Component Used:
HomeScreen
ListScreen

In HomeScreen:
   The Text entered in the TextInput is keyword on the basis of which search is applied
   On search button action: Service of search is called

 In ListScreen:
  The listing of movies along with name,Image,popularity,release date and description is shown

  In Constant.js:
   The constant file consist of constant used like  base url of api along with the url used for image

About DB and API:
 TMDB was used for searching movies. From where we receive the API key to access TMDb data.

 The API used is "http://api.themoviedb.org/3+'/search/movie?api_key=3b0357883aabbc1f358973c354d4e896&query=mm"
 key is the api key generated
 query is the search keyword entered
