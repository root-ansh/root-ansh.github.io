# Networking Basics : Image Loading  

As we saw in networking , there are a no. of concepts involved, like downloading the reponse , parsing reponse handling background thread, keeping this object alive, etc.  

Image downloading is similar , except the fact that use case of image are a lot.  

-  Image could be used as background and needs to be loaded as fast as possible
- Image could be used in list as profile pic or contact imagge, and needs to be loaded on demand/ on click + cached so that multiple network calls does not happen  
- Shimmer/Loading Blur/placeholder effect could be expected from images while being loaded   

- gif support could be required  
- transformations like streching the image, contracting the image, resizing the image, rotation of image, cropping of image, etc could be expected from the downloader.  
- and many more.  

The natie code for a basic image loading is again large, but simple. However the implicity is limited to that only. For anything advance, the code grows and gets more complicated/inefficient. That's where Libraries thrive.   
There are many libraries, but I have used only Glide and Picasso for most of my needs. you can check [this link](https://ourcodeworld.com/articles/read/929/top-10-best-android-image-loading-and-caching-libraries)  for more info.  

Let's check some of them.  


## Glide

Glide is developed by bumptech and its one of the most popular mage library out there, i mean you can not expect less from a product recommended by Google, its currently in version 4.0.0. Glide is about 476 kb in size and has a method count of 2879.  

To use it you will have to add the this your project dependency:  

```
compile 'com.github.bumptech.glide:glide:3.7.0'
```

Getting started with glide is as easy as follows  

```
Glide
    .with(mContext)
    .load(img_url)
    .centerCrop()
    .placeholder(R.drawable.loading_spinner)
    .into(mImageView);
```

Additional configuration for glide:  
   
```
.error(Image_uri); this is the image shown in case of error
.fitcenter(); this makes the image to be centered in the imageView
.centerCrop()
.fades()
.transform()
.fetch()
```

**Pros**  

- Very easy to use.  
- it support gif loading.  
- it requires little configuration.  
- its been actively maintained.  
- it download image with the Size of the view been loaded into, this will reduce time and computation required to display the image.  


**Cons**  

- its kind of large in terms of size and memory.  
- it requires large amount of caching space cause it saves different sizes of image separately.  

---


## Picasso  
Picasso is named after the Spanish artist Pablo Picasso and its developed by square. its uses Fluent Api just like Glide, this library is not only powerful and fast but also very light in weight, its 121 kb in size with a total method count of 849. its currently in it version 2.5.2.  


To use Picasso in your project add the this to your dependency  
```
compile 'com.squareup.picasso:picasso:2.5.2'
```

Using Picasso is very easy too  

```
Picasso
   .with(mContext)
   .load(img_url)//insert the image url
   .placeholder(R.drawable.user_image)
   .into(mImageView);
```

Additional configurations  

```
.rotate(float degree)
.resize(int height,int breath)
.fade()
.transform(Transformation trans)
.centerCrop
.fit()
```  

**Pros**  

- Small size and method count
- very easy to use
- little configuration to set up
- very easy to configure with the builder class  

**Cons**  

- it cannot load gif  
- it cannot be used to load a very large file  
- it download and cache the the original image which will be re-sized to the view its been loaded to, this is an additonal computation at display time.  


## Fresco  
This is developed by Facebook, its built to present the best optimization for image loading and processing, when you have over one billion user to tend to, you cant possibly settle for less. As the popular adage has it “with greater power comes greater resposibility”, Fresco is freaking 1.6mb and has a method count of 5714 thats huge if you are working against the 64k method count.  

Getting started with Fresco  
```
compile 'com.facebook.fresco:fresco:1.3.0'
```  

You will use the custom view SimpleDraweeView instead of imageView  

```
<com.facebook.drawee.view.SimpleDraweeView
    android:id="@+id/my_image_view"
    android:layout_width="130dp"
    android:layout_height="130dp"
    fresco:placeholderImage="@drawable/my_drawable"
  />
```  

Then you just specify the image url:  

```
Uri uri = Uri.parse(image_url);
draweeView = (SimpleDraweeView) findViewById(R.id.my_image_view);
draweeView.setImageURI(uri);
```  


**pros**  

- its has a custom view for its configuration, which makes it very easy to use  
- its well optimized in terms of memory usage and allocation  
- its has a lot of configuration option  
- its has a very verbose documentation  
- its easy to configure  
- its load progressive JPEG,webP, gif  
- it does not require alot configuration to get started  

**Cons**  

- its very large  
- its documentation are kind of complicated   

---   


## Extras:  

**Resources**  

- [Glide](https://github.com/bumptech/glide)  
- [Picasso](http://square.github.io/picasso/)  
- [Getting Started with Fresco](http://frescolib.org/docs/getting-started.html)  
- [this article i heavily copy from](https://medium.com/@afomic/android-image-processing-libraries-a68e306f58d1)    
- [This](https://stackoverflow.com/questions/29363321/picasso-v-s-imageloader-v-s-fresco-vs-glide) SO post on glide vs frseco vs picasso vs... everything.  
- [Other libs](https://ourcodeworld.com/articles/read/929/top-10-best-android-image-loading-and-caching-libraries)

**Other Notable Libraries**  

- [Universal Image Loader](https://github.com/nostra13/Android-Universal-Image-Loader)  
- [Ion image loader](https://github.com/koush/ion)  
- [Volley Image loader](https://www.truiton.com/2015/03/android-volley-imageloader-networkimageview-example/)