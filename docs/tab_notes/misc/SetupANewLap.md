# Setup a new PC or Laptop for development

1. Installing tools
2. Setting up specific tools

## Installing tools

Some common tools for development are:

| **tool name**        | **usage**                           | **additional notes**                         |
|---------------------|-------------------------------------|----------------------------------------------|
| Android Studio      | Developing Apps                     |                                              |
| VS Code             | Opening Code files                  |                                              |
| brew                | for installing tools                | add to path, ensure its access               |
| openjdk11(via brew) | for running java code               | add to path, ensure its access               |
| python3             | for running python apps             | add to path, ensure its access               |
| nvm                 | for managing node+pip versions      | add to path, ensure its access               |
| gradle              | for running gradle commands on apps | add to path, ensure its access               |
| git                 | for vcs                             | usually already present, but setup local ssh |
| misc mac            |                                     | enable hidden files                          |


# Setup Specific tools

### Git

1. Git is already installed in most of the OS, if its not there, simply install via https://git-scm.com/downloads
2. ensure its access via `git -v`

#### Setting up Git SSH Access
Git basically connects to VCS Repo Hosting Sites like Github via some form of authentication. Before 2019, we would usually use 
username+password, which git would store in a credentials manager and automatically use while making an Https Request.

However, it was deprecated and now we are left with either setting Https mechanims, or setting up SSH .
SSH is relatively easy and very helpful. 
In SSH, there are basically 2 entities : Local key and server key

0. (If steps 1-4 fail, redo them, **BUT** first delete the contents of `~/.ssh`
1. We generate 2 keys with the following command ` ssh-keygen -o -t rsa -C "myemail.work@company.com"`
2. It will ask some question for passphrase, and name, just press enter
3. It will create 2 keys id_rsa and id_rsa.pub . both are text files if you try opening them in a text editor
4. add those keys in `~/.ssh` folder (read steps for enabling hidden files in the section below)

**So now you have a local ssh environment setup!**   

Next time you want to use SSH login with any Online VCS Dashboard account for "myemail.work@company.com", you simply have to do the following steps:

1. goto the VCS dashboard and register your ssh public key there (the contents of `id_rsa.pub`)
2. `git clone <ssh_url_of_dashboards_repo>`
3. it will show a message like this:
 ```shell
root:user:username$ git pull

The authenticity of host 'github.com (88.888.88.88)' can't be established.
XY12XYZ12 key fingerprint is SHA256:+XXXxxxxXXXXxxxxXXX/yyyYYYYyyyYYYyyyYYYyy.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```
4. press yes, and it will start downloading the content!

```shell
Warning: Permanently added 'github.com' (XY12XYZ12) to the list of known hosts.
remote: Enumerating objects: 60209, done.
remote: Counting objects: 100% (7498/7498), done.
remote: Compressing objects: 100% (2083/2083), done.
remote: Total 60209 (delta 4238), reused 6922 (delta 3850), pack-reused 52711
Receiving objects: 100% (60209/60209), 152.98 MiB | 7.63 MiB/s, done.
Resolving deltas: 100% (31395/31395), done.

```


---


- [ ] TODO : Add Details for all the tools that needs to be installed
