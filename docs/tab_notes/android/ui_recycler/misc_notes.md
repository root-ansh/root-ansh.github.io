# Miscellaneous Code Snippets


## 1. Minor Lifecycle Bug fix 

```kotlin
override fun onOptionsItemSelected(item: MenuItem): Boolean {

        if(item.itemId==android.R.id.home){
            onBackPressed()// necessary otherwise old screen will be recreated(??), causing unnecessary  oncreate calls
            return true
        }
        return super.onOptionsItemSelected(item)
    }

```
