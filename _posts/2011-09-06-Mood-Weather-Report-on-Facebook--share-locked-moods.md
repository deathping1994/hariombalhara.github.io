---           
layout: post
title: Mood Weather Report on Facebook -share locked moods
date: 2011-09-06 16:30:39 UTC
updated: 2011-09-06 16:30:39 UTC
comments: false
categories: Bookmarklet facebook Javascript
---

If you are on facebook then you must have used <a href="http://apps.facebook.com/moodweather/%20" target="_self" title="Mood weather Report">this</a> mood sharing application.Its's being used a lot these days.Its a very  good application providing a lot of moods to share.But it restricts the  access to a very few moods.Each day only one new mood is unlocked on sharing an already  unlocked mood on facebook.<br /><br />It seems quite frustrating  when you have to choose from a very few moods and when you have a mood to share you find it locked.<br /><br />Its very easy to share the locked mood and it takes a few seconds.I have tried it with firefox and google-chrome ,though I am sure it will work with any browser which supports javascript.<br /><br />Follow the following steps:<br />
   <ol>
      <li>Be sure to enable javascript if disabled.It is enabled by default in every browser if you have not disabled it.</li>
      <li>Login to your facebook account and go to the Mood Weather Report application.</li>
      <li>Click on any locked mood that you want to share(if the mood is already unlocked then you  should not be here :) )</li>
      <li>
         In the URL field of the browser copy &amp; paste this code 

         {% highlight javascript %}
		 javascript:document.getElementById('app44898431470_PublishArea').style.display='';void(null);
         {% endhighlight javascript %}

      </li>
      <li>You will find a "Publish on your wall" button which wasn't there earlier .Go and publish your mood :)</li>
   </ol>
