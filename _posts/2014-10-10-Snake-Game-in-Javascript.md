---           
layout: post
title: Snake Game in Javascript
date: 2014-10-10 15:22:14 UTC
updated: 2014-10-10 15:22:14 UTC
comments: false
categories: 
---

<div dir="ltr" style="text-align: left;" trbidi="on">To play the game just drag and drop the&nbsp; link&nbsp; to your bookmarks bar or right click and bookmark it and play on any page by just clicking on it.<br />I have tested this game on Firefox and Chrome.<br /><br /><b>Update:</b>&nbsp; Now a user can optionally login to the game allowing him to have the following advantages.<br />1. Save the game at any point using F2.<br />2. Will be able to see his highest score ever on top left corner.<br /><br /><b>Note:</b> Pls note that the url has changed cause I shifted the game to OpenShift(Its an awesome platform :) ).So you will have to add the bookmarklet again.<br /><br />Though this code is not written to access any personal information,I want the reader to know that running&nbsp; some random javascript code on a web page can be unsafe cause it gives the code access to your webpage specific client side information. If don't think its safe to run this code just play the game on a page where you are not logged in.<br /><br />You can read more about bookmarklets and how safe they are, <a id="test" href="http://www.bookmarklets.com/about/">here . </a><br /><div style="font-family: &quot;Courier New&quot;,Courier,monospace;"><br /><span style="font-size: large;">Keys:</span></div><div style="font-family: inherit;">Pause/Resume : Space<br />Restart : r </div><div style="font-family: inherit;">Exit : Esc<br />Save: F2 (Only for logged in User)</div><span style="font-family: inherit;">and ofcourse the arrow keys.</span><br /><div style="font-family: Verdana,sans-serif; text-align: center;"><b><span style="font-size: x-large;"><a id="play-snake-game" href="javascript:(function() {var sscript=document.createElement('script');  sscript.src='http://cdn.rawgit.com/hariombalhara/snake/master/php/js/create_snake_playground.js';   sscript.type='text/javascript';  document.getElementsByTagName('head')[0].appendChild(sscript); })();">Play Snake</a></span></b><br /><div class="separator" style="clear: both; text-align: center;"></div><br /></div></div><script type="text/javascript">document.getElementById('test').addEventListener('click',function () {alert('external link');}); </script>