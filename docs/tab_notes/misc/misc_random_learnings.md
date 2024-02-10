# Miscallanous : Random learnings in android  

```
https://android-developers.googleblog.com/2011/11/android-40-graphics-and-animations.html

https://source.android.com/devices/graphics/arch-tv.html#surface_or_texture
```   

Choosing SurfaceView or TextureView
Note: In API 24 and higher, it's recommended to implement SurfaceView instead of TextureView.
SurfaceView and TextureView fill similar roles and are both citizens of the view hierarchy. However, SurfaceView and TextureView have different implementations. A SurfaceView takes the same parameters as other views, but SurfaceView contents are transparent when rendered.

A TextureView has better alpha and rotation handling than a SurfaceView, but a SurfaceView has performance advantages when compositing UI elements layered over videos. When a client renders with a SurfaceView, the SurfaceView provides the client with a separate composition layer. SurfaceFlinger composes the separate layer as a hardware overlay if supported by the device. When a client renders with a TextureView, the UI toolkit composites the TextureView's content into the view hierarchy with the GPU. Updates to the content may cause other view elements to redraw, for example, if the other views are positioned on top of a TextureView. After view rendering completes, SurfaceFlinger composites the app UI layer and all other layers, so that every visible pixel is composited twice.

Note: DRM-protected video can be presented only on an overlay plane. Video players that support protected content must be implemented with SurfaceView

---  


```  
https://stackoverflow.com/search?q=%5Bexoplayer%5D+ads  

An application level media player for Android that supports features not currently provided by MediaPlayer including Dynamic adaptive streaming over HTTP (DASH), SmoothStreaming, and persistent caching.
```  

So apparently, media player **DOES NOT** support dash, smooth streaming, etc



