---           
layout: post
title: Sending request to the server  Manually
date: 2011-09-06 16:28:09 UTC
updated: 2011-09-06 16:28:09 UTC
comments: false
categories: Html Javascript Php telnet
---

I am going to show how to send information manually using GET and POST methods to a PHP page on my local apache server.<br /><br />Prerequsites:<br />1. Locally Running apache server.(Though you can test with any website also say google.com)<br />2.A PHP script(say test.php) for testing.<br /><br />test.php<br />

{% highlight php %}
   <?php echo "name=".$_REQUEST['name'].",age=".$_REQUEST['age']; ?>
{% endhighlight php %}

<br /><b>GET METHOD</b><br />

{% highlight php %}
   telnet 127.0.0.1 80
{% endhighlight php %}
<br />Now Type the Request Manually<br />

{% highlight http %}
GET /test.php?name=test&age=20 HTTP/1.0
{% endhighlight http %}

Press enter twice.<br />You will see something similar to the following:

{% highlight http %}
HTTP/1.1 200 OK 
Date: Sun, 13 Mar 2011 08:37:25 GMT
Server: Apache/2.2.11 (Unix) DAV/2 mod_ssl/2.2.11 OpenSSL/0.9.8k PHP/5.2.9 mod_apreq2-20051231/2.6.0 mod_perl/2.0.4 Perl/v5.10.0  
X-Powered-By: PHP/5.2.9  
Content-Length: 21
Connection: close
Content-Type: text/html
name=test,age=20
{% endhighlight http %}

The lines 1-7 respresent Response Header &amp; the text on line 9 is the response message that you would have seen on the browser if used.

<b>POST Method</b><br />
{% highlight bash %}
telnet 127.0.0.1 80
{% endhighlight bash %}

Now Type the Request Manually<br />

{% highlight http %}
POST /test.php HTTP/1.0
content-type:application/x-www-form-urlencoded
content-length:17
{% endhighlight http %}

Now press enter and type the message part.<br />

{% highlight http %}
name=test&age=132
{% endhighlight http %}

Press enter again.<br /><br />
You will see something similar to the following:<br />
   
{% highlight http %}
HTTP/1.1 200 OK
Date: Sun, 13 Mar 2011 08:43:02GMT
X-Powered-By: PHP/5.2.9
Content-Length: 22
Connection: close
Content-Type: text/html

name=test,age=132
{% endhighlight http %}

Again,the text on lines 1-7 is Response Header &amp; the text on line 9 is the response message that you would have seen on the browser if used.
