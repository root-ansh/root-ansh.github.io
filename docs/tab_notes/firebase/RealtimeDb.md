# Firebase

**TODO : shitty article, need to replace all those "follow the assistant/visit links" with actual data**

So i was recently working on a project with firebase. Firebase is really simple 
to get started with and has strong functionalities and capabilities. Its a 
full fledged scalable , realtime cloud server.  

Firebase provides security at almost every aspect, but for my present project,
The integration with the cloud server was more important than the security 
aspects. So i ended up using only the firebase Realtime database and nothing 
else.  



## Firebase Realtime database.   

Firebase Realtime database is one of the 2 Realtime syncing database solution 
from Google's firebase, the other being cloud firestore. RealtimeDB stores all
user's data in json format, while firestore would store data in documents format.
More details [here](https://medium.com/datadriveninvestor/realtime-database-vs-cloud-firestore-which-database-is-suitable-for-your-mobile-app-87e11b56f50f)  

the data will look something like this:

```json

{ 
  "users" :
  {
        "2f4587e9e837a9bd" : 
        {
          "id" : "2f4587e9e837a9bd",
          "name" : "Joey"
        },
        
        "3955e55ae50efd8c" : 
        {
          "id" : "3955e55ae50efd8c",
          "name" : "Jon Snow"
        },
        
        
        "4f154d1107547ca0" : 
        {
          "id" : "4f154d1107547ca0",
          "name" : "Sheldon"
        },
        
        
        "5f5be88cbfd41d46" :
        {
          "id" : "5f5be88cbfd41d46",
          "name" : "Morty"
        }
  
  }
  
}

```

### Getting Started with Firebase realtime database

#### The easy way.

1. Create your account on [firebase.google.com](https://firebase.google.com)  
2. Login to Android studio with same account. 
3. Click on tools>>Firebase and create new account. All the necessities would be automatically done

#### The Hard way.

1. [https://firebase.google.com/docs/android/setup?authuser=0#console](https://firebase.google.com/docs/android/setup?authuser=0#console)


### integrating Realtime database with our app

- simply add the neccessary dependencies via firebase assistant( it will add old 
dependencies, but those are the most stable)

### using firebase db

download data: for above, we have to make an instance using the "users" child.
**Firebase doesn't allow getting a data directly on our main thread**. Instead
it sends data to us via its listener callbacks.  


!!! danger "NOTE"   
    Firebase Realtime database can only store data of type allowed by json syandards.
    to add data of any other format(image/video/audio,etc), use Firebase cloud storage.


**Downloading data from firebase**
```java
DatabaseReference dbRef= FirebaseDatabase.getInstance().getReference().child("users"); // non-null

 dbRef.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                //do stuff here
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {

            }
        });
        // OR
 
 dbRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                //do stuff here
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {

            }
        });
```


There are 2 kinds of callbacks: `ref.addListenerForSingleValueEvent(<valueEventListener)` 
and simply `ref.addvalueEventListener(<valueEventListener)`. As the name indicates
the formaer will be recieving an update only once, while the latter will recieve
updates every time the server updates.  

`addListenerForSingleValueEvent(..)` is a lot useful when accessing data from 
multiple activites inside an app because firebase reference is powerful enough to remain live 
and bring our destroyed activity  from the activity stack! (i am guessing it 
does not allow activities with active listeners to die).

inside the `onDataChange(...)`, you can do something like:

```java

 for(DataSnapshot usersSnap:dataSnapshot.getChildren()){
 
    String userKey=""+usersSnap.getKey();
    
    Object u = usersSnap.getValue();            //instance of object class
    User u = usersSnap.getValue(User.class);    //instance of User class
 
 }

```

As you can see, you can deserialise the data if its coming in a specific format.  

** Uploading data to firebase **  

```java

  DatabaseReference.CompletionListener completionListener = new DatabaseReference.CompletionListener() {
            @Override
            public void onComplete(@Nullable DatabaseError databaseError, @NonNull DatabaseReference databaseReference) {

                Log.e(TAG, "onComplete: Successfully updated data");
                
                //...

            }
        };

  User u = new User("name","some_key");
  partyRef.child("some_key").setValue(u, completionListener);

```


currently i have to research on weather its possible to add hashmaps or sets to
firebase, because we are facing an issue with that

### Pro Tips(not exactly pro tbh, but from experience)  

1.  `addListenerForSingleValueEvent(..)` is a lot useful when accessing data from 
multiple activites inside an app because firebase reference is powerful enough to remain live 
and bring our destroyed activity  from the activity stack! (i am guessing it 
does not allow activities with active listeners to die).  

2.  **LIST IS A BAD IDEA FOR FIREBASE** . It can store data as list when passed, because a list of objects is an acceptable entry for json. But it is most often a bad idea because the entries of a list are also stored as a key value pairs, the key being their index i.e `List<Object>` would be listed as `{ 0: someObj ,1:someObj}` . and its very often that when 2 users are adding their entry at the same time in that list, both will be adding at the end, and their data would be uploaded with the same key ,i.e `{...,last_index: objectOfUser1}` and `{...,last_index: objectOfUser2}` , causing a race condition. Rather use a `hashmap<UniqueStringKey,Object>`
 
