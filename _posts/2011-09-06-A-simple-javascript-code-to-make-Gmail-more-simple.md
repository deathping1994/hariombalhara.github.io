---           
layout: post
title: A simple javascript code to make Gmail more simple
date: 2011-09-06 16:30:07 UTC
updated: 2011-09-06 16:30:07 UTC
comments: false
categories: Bookmarklet Gmail Javascript
---

Those  who use Gmail must know that Gmail's Standard View is quite slow though  it provide a lot of features that Basic Html View doesn't provide.So  you always prefer the earlier to the later if you have a broadband  connection.But what if you aren't a broadband user?<br /><br />If  you use Basic HTML View then this topic is surely going to help you.In  this view of Gmail you can not select all the spams or drafts or  messages at once.This is a big problem if you get a lot of spams daily  and you can't even select all the spams shown on one page at once to  delete.<br /><br />Use the following javascript code to select all the spams or drafts or messages at once.

{% highlight javascript %}
javascript:var nameArray=document.getElementsByName('t');for(i=0;nameArray[i];i++) {if(nameArray[i].checked) nameArray[i].checked=false; else nameArray[i].checked=true;} void(null);
{% endhighlight javascript %}

Go to the inbox or drafts or spams folder and paste the above code in the URL field followed by enter .All the checkboxes will be selected :)
