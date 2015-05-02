---
layout: post
title: Swiss-Army Knife for TCP/IP
date: 2011-09-06 16:33:21 UTC
updated: 2011-09-06 16:33:21 UTC
comments: false
categories: Ip spoofing Linux Linux Commands netcat port scan webserver
---
**Netcat** , also referred to as Swiss-army knife for TCP/IP , is a computer networking service for reading from and writing network connections using TCP and UDP.

Download it [here](http://www.downloadnetcat.com/) for Windows/Linux.

Repositories also provide this package

For ubuntu just type in terminal:

{% highlight javascript %}
sudo apt-get install netcat
{% endhighlight javascript %}

This tool can be invoked by typing 'nc' or 'netcat' .The arguments and various options to it differ according to its use.

Without going into further definitions these are some of the gr8 uses of this tool.

### **A simple Chat**

In one Terminal , type:

{% highlight javascript %}
netcat -vvl 127.0.0.1 -p 1400</pre>
{% endhighlight javascript %}

It creates a Listener (-l) which listens at port (-p) 1400 with IP 127.0.0.1 in extra verbose mode (-vv) i.e printing whats happening.

-v will also do ,but will be less verbose.

Fire up another terminal and type:

{% highlight javascript %}
netcat -vv 127.0.0.1 1400
{% endhighlight javascript %}

It creates a connection to IP 127.0.0.1 i.e. localhost which listens at port 1400 in extra verbose mode (-vv).

Now type something and see whatever you type is seen on another terminal.A very simple chat.

### **A simple small webserver**

Make a script:
 _webserver_

{% highlight bash %}
#!/bin/sh
while :
do
{ echo -ne "HTTP/1.1 200 OK\r\n\r\n";
 cat htmlfile.txt;
} | nc -vvl -w 2 -p 8080
done
{% endhighlight bash %}

The script basically runs netcat infinite times..each time sending an HTTP Response "HTTP/1.1 200 OK" along with the data.

-w option to netcat or nc sets the timeout . -w 2 asks to disconnect after 2 seconds if there is no connection request

_htmlfile.txt_

{% highlight html %}
<html>
<head>
<title>A simple Webserver</title>
</head>
<body>
yeah its working
</body>
</html>
</pre>
{% endhighlight html %}

Make this script executable

{% highlight bash %}
chmod +x webserver
{% endhighlight bash %}

Run the script

{% highlight bash %}
./webserver
{% endhighlight bash %}

Open a webbrowser and go to

{% highlight http %}
http://127.0.0.1:8080
{% endhighlight http %}

A very simple webserver is ready :)

Experiment with it yourself ..

**PORT SCANNING**

Lets Scan google.com for open ports b/w 1-100

{% highlight bash %}
netcat -vvz -w 1 google.com 1-100
{% endhighlight bash %}

-z options make sure no data is transferred during connection.It is specifically used for port scanning.
One thing is for sure that 80 port is open ,otherwise you can not google which you do everytime :P
So check it out yourself ..May be you can find any other port open :)

**Making any process a server**
Terminal 1:

{% highlight bash %}
nc -l -p 1400 -e /bin/bash
{% endhighlight bash %}

-e option makes sure a file is executed (int this case /bin/bash) when connection is made
Terminal 2:

{% highlight bash %}
nc  127.0.0.1 1400
{% endhighlight bash %}

This makes a connection at port 1400 to above started listener
After successful connection type this command in teminal 2

{% highlight bash %}
pwd
{% endhighlight bash %}

You know very well what this command does ..prints the current directory
Below is the output in my case on terminal 2:

{% highlight bash %}
/home/hariom/Desktop
{% endhighlight bash %}

when pwd is typed.. this text is forwarded to /bin/bash/ for which it is a valid command and the output i.e. the current directory is printed on the terminal 2.

**IP SPOOFING**

<a href="http://4.bp.blogspot.com/_lNQnTvuzXNg/TOKAgUrkR9I/AAAAAAAAAEg/K1TEaQnvMBw/s1600/screenshot1.png" target="_blank">
	<img src="http://4.bp.blogspot.com/_lNQnTvuzXNg/TOKAgUrkR9I/AAAAAAAAAEg/K1TEaQnvMBw/s1600/screenshot1.png" />
</a>

On Terminal 1 netcat listens on port 1400

{% highlight bash %}
netcat -vvl -p 1400
{% endhighlight bash %}

<a href="http://4.bp.blogspot.com/_lNQnTvuzXNg/TOKApiCC0FI/AAAAAAAAAEk/UwlyC3CViFY/s1600/screenshot2.png" target="_blank">
	<img src="http://4.bp.blogspot.com/_lNQnTvuzXNg/TOKApiCC0FI/AAAAAAAAAEk/UwlyC3CViFY/s1600/screenshot2.png" />
</a>

On terminal 2 netcat specifies source IP address also by using -s and connects to port 1400 on localhost

But first this IP address must be bound with one of your network interfaces

{% highlight bash %}
sudo ifconfig eth0:0 98.137.149.56
{% endhighlight bash %}

Now it can be specified as source IP

{% highlight bash %}
netcat -vvs 98.137.149.56 127.0.0.1 1400
{% endhighlight bash %}

It can be seen in snapshot of terminal1 that there is a connection from yahoo.com as 98.137.149.56 is its IP. You made a connection from localhost but it shows connection from yahoo.com . gr8:)

What's its use??
It can be used to test an IP firewall created using iptables

These are some of the uses of Netcat there are many more that I leave on the reader to explore :)
Happy experimenting with netcat :) :)
<style>
p + p {
 text-indent: 0;
}
</style>


