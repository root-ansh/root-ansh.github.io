# Networking Basics : Making a Get Post Connection(Volley)


!!! bug
    **This library is fairly advanced and i have covered a very small part of it. **  




In the 1st article of Networking series we, discussed the different terminologies related to networking in Android, along with some basic steps. As per 1st article,
- We need Internet and access network Permissions for creating a connection
- We might need to check for Internet availability  before  making a connection and during the data transfer(usually handled automatically)
(refer [1st article](https://www.google.co.in/search?q=todo%3A+change+this+link) )

We also saw how volley and okhttp are used to perform network calling and parsing so easy. They were also able to handle get/post requests . Now let's checkout Retrofit, a special library specifically designed for advanced network requests and continuous calling

## Retrofit.  
Retrofit is an advance networking library by square. It can do a lot of powerful operations, so we will learn about them when they come up. For now, let’s work on creating a simple stackoverflow app.


### Implementation

```groovy 
implementation 'com.squareup.retrofit2:retrofit:2.6.0'
implementation 'com.squareup.retrofit2:converter-gson:2.6.0'
```

### Usage(Theory).

Retrofit doesn’t do any networking by itself. It is build upon okhttp layer  which handles.Its basic usage is very similar to that of volley.

suppose we want to receive  list of user ‘root-ansh’ repos from the following github api:  [https://api.github.com/users/root-ansh/repos](https://api.github.com/users/root-ansh/repos) . here, `Https://api.github.com/` is the base url and `users/{user-name}/repos`  is a dynamic query url. The query gives the following result:  

![img](https://i.imgur.com/0kXHG6N.png)

### Usage(Code).  

**1.Define a model class for GSON.**  
As we can see, the root itself is of type  jsonArray. If you had this response as a string, you would have to use the previous mentioned json code to extract value of name key(3rd key in 0{} )  

In retrofit, we define a model like this: 

```java
public class GitHubRepo { // the class name could be anything we like
    private String name; //note that this var name should be exactly same as the key name in response or use @SerializedName("key") annotatation
    
    public GitHubRepo(String name) {this.name = name;}

    public String getName() {return name; }

    public void setName(String name) { this.name = name; }
}
```  


**2.	Define a response client interface.**  

```java
 public interface GitHubClient {

    @GET(Constants.DYNAMIC_QUERY_URL)                                                     //String DYNAMIC_QUERY_URL="/users/{user}/repos";
    Call<List<GitHubRepo>> getReposForUser(@Path("user") String user);
      
     // another cool way(not used in this project)
     @GET("answers")
        Call<StackApiResponse> getAnswers(@Query("page") int page, @Query("pagesize") int pagesize, @Query("site") String site);

        //actual complete api = https://api.stackexchange.com/2.2/answers?page=1&pagesize=50&site=stackoverflow
        // thus the getter part = answers?page=1&pagesize=50&site=stackoverflow , being created dynamically
    
}
```  


**3. In main Activity.** Our network call would be made on a We follow the following steps:  

- Create a pojo convertor instance.  
- Create retrofit instance using baseurl and pojo convertor  
- Create the response client interface instance  
- Create a Retrofit Call using  client instance  
- Create a response handler which will receive asynchronously updates from the network call(There is a synchnous(on the same thread) method to do this too.)  
- Start the network call using call.enque(response handler)    
  
```java  

  @Override
    protected void onCreate(Bundle savedInstanceState) {
        ...
        String baseurl=Constants.BASE_URL; String userName="root-ansh";
        bt4.setOnClickListener(v -> {
            
            GsonConverterFactory pojoConvertor=GsonConverterFactory.create();   //step 1
            Retrofit retrofit =  new Retrofit.Builder().baseUrl(baseurl).addConverterFactory(pojoConvertor).build();  //step2
            GitHubClient client = retrofit.create(GitHubClient.class);  //step3
            Call<ArrayList<GitHubRepo>> call = client.getReposForUser(userName);  //step4
            Callback<ArrayList<GitHubRepo>> responseHandler = getResponseHandler(); //step5
            
            call.enqueue(responseHandler);  //step6
        });

    }
    //step4
    private Callback<ArrayList<GitHubRepo>> getResponseHandler() {
        return new Callback<ArrayList<GitHubRepo>>() {
            @Override
            public void onResponse(@NotNull Call<ArrayList<GitHubRepo>> call, @NotNull Response<ArrayList<GitHubRepo>> response) {
                ArrayList<GitHubRepo> respReposList = response.body();
                if(respReposList!=null) {  tv4.setText(respReposList.toString()); }
           
           }

            @Override
            public void onFailure(@NotNull Call<ArrayList<GitHubRepo>> call, @NotNull Throwable t) {
                tv4.setText(String.format("%s", t));
            }
        };
    }
```   

### Other Resources  

There can be some advance usages like creating a post request( i.e passing objects in the network call) or creating a synchronous call or calling for nested attributes, etc. More are covered here :[https://academy.realm.io/posts/advanced-retrofit-mobilization-2017/](https://academy.realm.io/posts/advanced-retrofit-mobilization-2017/)

