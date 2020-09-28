# Cupertino Docs

Welcome to the docs for Cupertino's open-sourced projects.

## Table of Contents

[Atlas](https://github.com/Cupertino-Development/docs/tree/master/Atlas)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Post](https://github.com/Cupertino-Development/docs/tree/master/Atlas/Post)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[sendMessage](https://github.com/Cupertino-Development/docs/tree/master/Atlas/sendMessage)

### What are Clubs

"Clubs" are a data structure similar to Discord guilds.
Each club can have multiple Club boards and each board can have posts 
and posts can have comments.
The posts are going to be able to be locked, and they also have a 
comment object embedded instead of a different model linked only by the 
model ID.
Each Club can create question boards and club members can push messages 
to a board.
Each Club owner (and soon:tm: those who have club permissions) can 
either auto approve or manually approve messages before they get turned 
into a board post.
