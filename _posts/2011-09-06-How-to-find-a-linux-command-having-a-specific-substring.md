---           
layout: post
title: How to find a linux command having a specific substring
date: 2011-09-06 16:29:21 UTC
updated: 2011-09-06 16:29:21 UTC
comments: false
categories: Linux Linux Commands shell script
---

I am an Ubuntu user and it occurs to me several times that I need to execute a command in shell.This is what I do.

1. Alt+F2
2. Type *gnome-terminal* followed by enter.

The terminal popped open.I start typing the command and suddenly I realise that I do not remember what the  exact command is.I just have a slight idea about the command.I am just sure of a particular word/substring in the command.It happened to me yesterday too when I was trying to modify some configuration of Gnome-Desktop.The actual command for the configuration editor is *gconf-editor*.But I remembered only a part of it(editor :( ),thats when I tried to write a simple script(findscript) for finding a command when you have a slight idea of  a substring or word in it.

#### THE SHELL SCRIPT

*findcommand*

{% highlight bash %}
#!/bin/bash
paths=${PATH//:/ };
find `echo $paths` -name $1;
{% endhighlight bash %}

Make this script executable by the following command

{% highlight bash %}
chmod +x findcommand;
{% endhighlight bash %}

Now move this file to */usr/local/bin* or any other directory in your PATH environment variable.

{% highlight bash %}
mv findcommand /usr/local/bin
{% endhighlight bash %}

Code to check the PATH variable.

{% highlight bash %}
echo $PATH;
{% endhighlight bash %}

So this is the full command I ran after making this script for finding the configuration editor command.

{% highlight bash %}
findcommand *editor
{% endhighlight bash %}

OUTPUT:
{% highlight bash %}
/usr/bin/gconf-editor
/usr/bin/nm-connection-editor
/usr/bin/sensible-editor
/usr/bin/gnome-text-editor
/usr/bin/select-editor
/usr/bin/gmenu-simple-editor
/usr/bin/editor
{% endhighlight bash %}

This script will accept a regex as argument.Other possible arguments for the job can be<br />1. *edit*<br />2. *ed*<br />3. *gconf*<br /><br />The script basically uses the linux file finding utility <span style="font-style: italic; font-weight: bold;">find  </span>to find all the executables in your path having a specific word.Feel free to experiment with it :)<br /><br />Though it can also be done using <span style="font-weight: bold;"><a href="http://en.wikipedia.org/wiki/Apropos_%28Unix%29">apropos</a> </span>command or '<b><i>man -k</i></b> <b>editor</b>' <span style="font-size: xx-small;">(editor is the search term)</span>, but its always fun doing in a different way ;)
