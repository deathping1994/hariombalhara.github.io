---           
layout: post
title: setAttribute throws exception for an attribute obtained from attributes list
date: 2011-09-06 16:32:10 UTC
updated: 2011-09-06 16:32:10 UTC
comments: false
categories: learning javascript
---

node.attributes can give attributes that can't be set back on the element. Infact setAttribute will throw error when it encounters such an attribute.

Consider following html. Note, and extra " at the end of src attribute value.
{% highlight html %}
<img id="img" src="img.png"" /> 
{% endhighlight html %}

Now, lets try getting the attributes of this node.
{% highlight javascript %}
> document.getElementById('img').attributes
{% endhighlight javascript %}

It will give three attributes, the last one being '"'.
Lets try prefixing every attribute value with '_';
{% highlight javascript %}
	var img = document.getElementById('img'),
		attributes = img.attributes;
	for (var i = 0; i < attributes.length; i++) {
		img.setAttribute(attributes[i].name, '_' + attributes[i].value)
	}
{% endhighlight javascript %}
<a class="jsbin-embed" href="http://jsbin.com/vifefebopa/embed?html,js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.12"></script>
