# Fasting Up Android Studio

## 1. Disabling plugins .

[This](https://android.jlelse.eu/is-your-android-studio-always-slow-heres-how-to-speed-up-immediately-326ef9238024) article says to disable the following plugins via  settings/plugins:  

- Android APK Support  
- Android Games  
- Android NDK  
- App Links Assistant  
- Copyright  
- Coverage  
- CVS Integeration  
- Editor Config  
- Fabric for Android Studio  
- Firebase (App Indexing, Services, Testing)  
- Github  
- Google (Cloud Tools Core, Cloud Tools for Android, Developer Samples, - Login, Services)  
- Markdown Support  
- Mercurial integration  
- hg4idea  
- Settings repository  
- Subversion integration  
- Task management  
- Test recorder  
- TestNG-J  
- YAML  

## 2. Adding exclusions to firewall

As Per dev site [here,](https://developer.android.com/studio/intro/studio-config#optimize-studio-windows) add these to the windows defender exclusions:  

- C:\Program Files\Android\Android Studio  
- C:\Users\anshs\.android   
- C:Wsers\anshA.AndroidStudio3.5  
- C:\Users\anshs\.gradle  
- C:\Users\anshs\AppData\Local\Android\Sdk   
- P:\  
- java.exe  
- studio64.exe  


## 3. custom VM Options  

These are working for me as of october 2019:  

```css
-Xms1024m
-Xmx4096m
-XX:MaxPermSize=1024m
-XX:ReservedCodeCacheSize=256m
-XX:+UseCompressedOops

```

