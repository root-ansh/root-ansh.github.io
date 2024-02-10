# Public and Private Keys

(Todo: add introduction pages about blockchain) 

I have been thinking about learning blockchain for so long, But i didn't ever gave it some serious thoughts or inputs. Everyone I try talking to, they are like, saying random combination of sexy phrases like "Encrypted", "Public key/private key", "Super secure" , "Hash" ,"Distributed", ... etc , and although i can't make sense about it for most of the time, I get prety excited about it.  

Yesterday I was watching a techalter video on something similar topic. And he gave a very nice analogy of public and private key : think of it as **your email id and password**.    

For eg,  
a Public Key could look like: c344c090-6652-4678-8215-1338acd2f102  
a Private Key could look like: b9ef4856-ebdc-4b85-8c3f-c3455c25540f  

Google knew its difficult to remember this, so in gmail, 

a Public Key could look like: anshsachdeva.w.5798@gmail.com 
a Private Key could look like: mySuperSecretpassword123

Characterstics of a public key:  
- It is unique in nature and is somewhat controlled by the issuer of the key( like every gmail has @gmail.com at the end)
- It is visible to anyone, so that they can contact you.  
- It thus acts as your identity on a network.  
- It can be very less harmful on its own, as a threat cannot retrieve your other info or details via this key.the only way to do that will be to hack the key provider's server(google in this case), which is a non avoidable problem from your end, or somehow lure YOU into interacting with his action( like writing a phisihing mail that could lure you into giving private details to hacker), but accessing that action would also require private key.  



Characterstics of a private key:  
- It is also unique in nature, but completely controlled by the user( except some pttern rules that companies apply to prevent guessing)  
- It is not visible to anyone, and is used as a firewall to prevent unauthorised access to information and mails that are addressed to YOU (i.e your public key) 
- It thus acts as a sole layer of authentication to access your space on a network.  ''
- It can be very harmful if leaked: because a person X having access to person Y's private key can literally take identity of Person Y since public keys are already accessible   