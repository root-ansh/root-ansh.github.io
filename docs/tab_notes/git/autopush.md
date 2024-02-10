
# Mini Tutorial : automatically push your code on commit.

*Disclaimer: not the best thing to do for every situation, but definitely worth considering*

**Platform** : windows ( but you can figure out for other platforms too)

STEPS:  

1. open .git/hooks folder  
2. create file post-commit (no extension) and open via text editor  
3. add code:  

```
#!/bin/sh
git push --all origin
```
( or any other push statement like git push -u origin master / dev/whatever)

4. You are done. now next time you add a commit, it is automatically pushed to vcs.

good luck.

---

PS : if you liked this tutorial and are a super smart ninja pro hackerman/women dev, then please make multiple accounts handling git credentials manager  :cry:
