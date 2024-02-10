# Networking Basics : Making a Get Post Connection(Native Way) (2023)

So what has changed in 2023 for native ? well nothing,  except that i am a bit more experienced in android dev 😅😅
Moreover, in the native section, you will see that the whole code is mixed with android classes of activity and fragments and user does not find it interestisting to read about the (or even remember it, as in my case. i forgot that i have gone through this before :/ )

So here are my shorter points:

- We use `HttpURLConnection`, a java api to create connection . unlike other libs of retrofit/volley, it simply takes url/headers/params/body etc of request in the same java object as the one in which it returns the response content
- one important point : use setDo input followed by actually setting up the body ONLY IF your connection is a POST request. for get request, it overrides it to POST and it will fail if your server is not returning a response for POST
- some headers like connection and accept-encoding are common and important for each server. okhttp adds them, so we add them too
- most servers send data as per request headers. but some ignore them too. so use appropriate input stream decoders
- the code for deocding connection response to json below is shitty difficult to understand, written by chatgpt, but looks nice.

So here is a function to create a httpclient based request without any dependencies:

(* fun fact: Android provides json library as a part of its own sdks as `api`. but actual java implementation has no json library! so we did technically added  `implementation("org.json:json:20230227")` library :P)
 



```kotlin
object BasicNetworkConnection {
    private const val server = "REDACTED" // checkout https://github.com/root-ansh/web_project_test_server for actual server url that i created
    private  val queryParams = hashMapOf("delay" to "0")
    private  val reqHeaders = hashMapOf(
        "Connection" to "Keep-Alive",
        "Accept-Encoding" to "gzip",
    )

    fun connect(url :String = server, query:Map<String,String> = queryParams, headers:Map<String,String> = reqHeaders, log:(Any)->Unit = { println(it) }){
        log("connect() called with: url = $url, query = $query, headers = $headers, log = $log")
        val finalUrl = buildString {
            append(url)
            append("?")
            append(query.map { "${it.key}=${it.value}"}.joinToString("&"))
        }
        log(finalUrl)
        val urlObj = URL(finalUrl)


        val connection:HttpURLConnection? = urlObj.openConnection() as? HttpURLConnection
        if(connection==null) {
            log("connection failed")
            return
        }

        connection.let {
            it.requestMethod = "GET"
            it.connectTimeout = 10_000
            it.readTimeout = 10_000

            headers.forEach { (t,u)-> connection.setRequestProperty(t,u) }

            //it.doOutput = true //android has very strict library that generates requests in contrast to browsers. if we set doutput to true, it will automatically make a post request, which in turn will fail on the server if a post server is not available

            //-------
            val respCode = connection.responseCode
            val respHeaders= connection.headerFields
            var contentJson : JSONObject? = null


            //either make sure that server returns gzip data, or remove GZIPInputStream wrapper from here
            runCatching {
               val content = BufferedReader(InputStreamReader(GZIPInputStream(connection.inputStream))).useLines { lines ->
                   lines.fold(StringBuilder()) { acc, line -> acc.append(line) }
               }
                log("content string = $content")
                contentJson = JSONObject(content.toString())
           }.getOrElse { e->e.printStackTrace() }

            log("response code: $respCode")
            log("response headers: $respHeaders")
            log("response string: $contentJson")


        }

    }

}
```
