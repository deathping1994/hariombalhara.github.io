---           
layout: post
title: A little bit Technical Redirection
date: 2011-09-06 16:32:10 UTC
updated: 2011-09-06 16:32:10 UTC
comments: false
categories: iptables Linux Linux Commands Php
---

If you are a web developer or learning any server-side languages like PHP ,  ASP then you must have done redirection several times. I am a PHP user so I know how to do this in PHP.<br /><br />There is a header() function in PHP which can do this easily for you<br />

{% highlight php %}
header('Location:http://google.com');
{% endhighlight php %}

Now you will see a  different way of redirection.

##### Requirement:
*   A computer running Linux/Unix with *iptables* installed.
	
	All ubuntu systems have IPTABLES installed by default.If for any reason you can't find it you can install it by this command
	
	{% highlight bash %}
	sudo apt-get install iptables
	{% endhighlight bash %}
	
	Other Linux/Unix users can find installation instructions here
	
	{% highlight http %}
	http://www.netfilter.org/
	{% endhighlight http %}
	
	Note that IPTABLES is a FIREWALL and its a very important tool to learn ,so its worth spending time installing and learning about this tool.
	
	Whatever I am gonna tell you here is a little use of it :)
	
	So you can check whether IPTABLES installed successfully or not by running this command
	
	{% highlight bash %}
	iptables  -h
	{% endhighlight bash %}
	
	It will give some help tips about this tool.If the command run successfully then you are good to go :)

* The computer must have a public IP address.(I use Aircel GPRS .In my case  the computer is given a public IP address every time I dial, though it changes after each dial).

* The 2nd requirement means your IP address must *NOT* be  in the range.

	"10.0.0.0 - 10.255.255.255   ,   172.16.0.0 - 172.31.255.255  ,  192.168.0.0  -  192.168.255.255"

	You can check your IP address by this command

	{% highlight bash %}
	ifconfig
	{% endhighlight bash %}

	OR as a shorcut try this on ubuntu.. not sure for other operating systems ,the address just after `inet addr :` is your IP address

	{% highlight bash %}
	ifconfig |grep 'inet addr'|grep -v 127.0.0.1
	{% endhighlight bash %}

* And the last but not the least you must have a working network connection ;)

Initial Configuration:

{% highlight bash %}
echo 1 > /proc/sys/net/ipv4/ip_forward
{% endhighlight bash %}

It enables  packet forwarding  which is necessary to forward  those packets from your host which don't have there source IP address as yours.

Edit here also:

{% highlight bash %}
sudo vi /etc/sysctl.conf
{% endhighlight bash %}

In this  file uncomment the line (if commented) which is something like this

{% highlight bash %}
net.ipv4.ip_forward=1
{% endhighlight bash %}

It sets packet forwarding in system variables also.

Lets start **'Redirection To Google.com'**

*Assumptions:*-

IP address : 27.248.190.177 (a public Ip address :) )
I used 8080 port for those incoming connections which are redirected to google.com
Google.com's IP : 74.125.47.104  ( <i>It is not an assumption though ; ) )

Fire up a terminal and run the following commands

{% highlight bash %}
sudo iptables -t nat -A PREROUTING -p tcp -d 27.248.190.177 --dport 8080 -j DNAT --to-destination 74.125.47.104:80
{% endhighlight bash %}

{% highlight bash %}
sudo iptables -t nat -A POSTROUTING -p tcp -d 74.125.47.104 --dport 80 -j SNAT --to-source 27.248.190.177
{% endhighlight bash %}

Now try to access  http://27.248.190.177:8080  from ANOTHER PC connected to Internet AND *NOT* THE PC ON WHICH  THESE COMMANDS WERE RUN.(*Try to find out why;)*)

You will see google's homepage  :)

#### EXPLAINATION:
*First command* : appends a rule(-A) to PREROUTING chain   for  those tcp (-p   -&gt;p for protocol) packets in the nat table (-t)  whose destination (-d )  IP address is your IP address(27.248.190.177)  and destination port (--dport ) 8080 and says that when such a packet comes  jump (-j) to DNAT (Destination Network Address Translation ) Target  and change that packet's destination IP address(-- to-destination) from  *27.248.190.177 to 74.125.47.104:80 . ':80 ' specifies the destination port cause google.com opens on this port only  which is  default HTTP port.*

*Second command* : appends a rule(-A) to *POSTROUTING chain* for  those tcp (-p   ->p for protocol) packets in the nat table (-t)  whose destination (-d )  IP address is 74.125.47.104 (which applies for the packet whose destination address is changed by the first command) and destination port (--dport ) 80 (which is also changed to this by the first command) and says that when such a packet comes  jump (-j) to SNAT (Source Network Address Translation ) Target  and change that packet's source IP address(-- to-source) from  earlier(whatever it may be)<i> to 27.248.190.177   .</i></i></i></i><br /><br /><i><i><i><i>How it works:</i></i></i></i><br /><br /><i><i><i><i>Any packet that comes to your host(PC) is first handled by nat table's prerouting chain(to modify incoming packet's destination IP addresse and  port) and after that by the same table's postrouting chain(to modify outgoing packet's source IP address and port) </i></i></i></i><br /><br /><i><i><i><i>Reference: <a href="http://www.faqs.org/docs/iptables/traversingoftables.html">http://www.faqs.org/docs/iptables/traversingoftables.html</a></i></i></i></i><br /><br /><i>The whole situation can be understood by this sample image</i><br /><br /><br />The image explains what is the need for modification of source  IP address before releasing the packet .If source address modification is not done then the source host(the one which http://27.248.190.177:8080 accessed this in his browser ) which actually requested to your PC (host with DNAT rule) will finally get reply from google.com(destination host) (see the diagram) and the obvious reaction to this by the source host will be "Who the hell are you.I did not requested you ;) " or may be "What the hell do you want ? ;)".<br /><br />
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;">
  <tbody>
	 <tr>
		<td style="text-align: center;"><a href="http://3.bp.blogspot.com/_lNQnTvuzXNg/TOKBlaLnB8I/AAAAAAAAAEo/wVZMEcBru8w/s1600/dnat-mistake.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" height="226" src="http://3.bp.blogspot.com/_lNQnTvuzXNg/TOKBlaLnB8I/AAAAAAAAAEo/wVZMEcBru8w/s320/dnat-mistake.png" width="320" /></a></td>
	 </tr>
	 <tr>
		<td class="tr-caption" style="text-align: center;">What's happening</td>
	 </tr>
  </tbody>
</table>
<br />Thats why the source address is modified by the second command so that the source feels that<i><span style="font-style: normal;"> it get reply from the host with (DNAT ,SNAT rule) which was actually requested </span>.</i><br /><br />So this is how this redirection works :)<br /><br />Hope you understood it well ,this is somewhat difficult for those who don't have much knowledge of IPTABLES .<br /><br />Thanks to rvsjoen on #Netfilter :)The whole situation can be understood by this sample image
<style>
p + p {
 text-indent: 0;
}
</style>


