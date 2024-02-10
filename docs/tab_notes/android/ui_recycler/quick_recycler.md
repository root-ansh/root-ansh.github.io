# A Quick RecylerView Adapter

What if I told you, that your recylerview adapter with all the actions for clicking, changing ui, displaying data... etc will just take 15 lines to be created and used? Something like this:
```kotlin
EasyAdapter(object : EasyAdapterInfo<DataType> {
            override fun getHolderInflater() = layoutInflater
            override fun getLayoutRes() = R.layout.item_link
            override fun onCreate(itemView: View) {}
            override fun onBind(itemView: View, item: DataType) {
                with(itemView) {
                    tv_url?.text = item.url
                    iv_cancel?.setOnClickListener { onDeleteItemClicked(item) }
                    setOnClickListener { onUrlListItemClicked(item) }
                    setOnLongClickListener {
                        onUrlListItemClicked(item)
                        true
                    }
                }
            }
        })

```

well its possible now, just use this piece of code:

```kotlin
class EasyAdapter<T>(private val info: EasyAdapterInfo<T>):RecyclerView.Adapter<EasyHolder>(){

    var itemsList = mutableListOf<T>()
       set(value) {
           field = value
           notifyDataSetChanged()

       }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): EasyHolder {
        val easyHolder = EasyHolder(
            info.getHolderInflater().inflate(info.getLayoutRes(), parent, false)
        )
        info.onCreate(easyHolder.itemView)
        return  easyHolder
    }

    override fun onBindViewHolder(holder: EasyHolder, position: Int) {
        info.onBind(holder.itemView,itemsList[position])
    }
    override fun getItemCount()= itemsList.size

}

class EasyHolder(v:View):RecyclerView.ViewHolder(v)

//todo:Improve it( add defaults)
interface EasyAdapterInfo<MODEL_TYPE>{
    fun getHolderInflater():LayoutInflater
    fun getLayoutRes(): Int
    fun onCreate(itemView: View)
    fun onBind(itemView: View, item:MODEL_TYPE)
}
```

here `MODEL_TYPE` and `T` will be your data model for the list of items that you wanna show.
go full on recycler!
