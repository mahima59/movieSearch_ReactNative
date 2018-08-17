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

 Screenshot of Application:
 ![screen shot 2018-08-17 at 5 30 31 pm](https://user-images.githubusercontent.com/26082136/44266281-9cb0a480-a247-11e8-8370-bb439e06528d.png)
 ![screen shot 2018-08-17 at 5 32 31 pm](https://user-images.githubusercontent.com/26082136/44266332-c79af880-a247-11e8-85a6-51e9a8711e09.png)

 ![screen shot 2018-08-17 at 5 32 07 pm](https://user-images.githubusercontent.com/26082136/44266362-eef1c580-a247-11e8-904c-53812731d3bd.png)
 ![screen shot 2018-08-17 at 5 32 55 pm](https://user-images.githubusercontent.com/26082136/44266433-31b39d80-a248-11e8-9b0f-a34db02de552.png)



>>>>>>> 434c6b12eb7629dcc51766e852d32243192f1a8a
