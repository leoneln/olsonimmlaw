# Using Start Boostrap Template [Start Bootstrap - Clean Blog](https://startbootstrap.com/theme/clean-blog/)

# This is a website for Janice Radler Olson.

# Reference: http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/

Keep gh pages updated

$ git add .
$ git status // to see what changes are going to be commited
$ git commit -m 'Some descriptive commit message'
$ git push origin master

$ git checkout gh-pages // go to the gh-pages branch
$ git rebase master // bring gh-pages up to date with master
$ git push origin gh-pages // commit the changes
$ git checkout master // return to the master branch
