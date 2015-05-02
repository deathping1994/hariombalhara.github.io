/**
 * This file uses hashchange plugin.
 *
 * Portions, Copyright (c) 2010 "Cowboy" Ben Alman
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
window.vwo_$=window.vwo_$||window.jQuery;
(function(){function h(){window._vwo_ev.apply(this,[].slice.call(arguments))}function za(a){var b;b=a.split(".");var e=b.length,c=b[e-2];if(c&&-1!==vwo_$.inArray(c,"co org com net edu au ac".split(" ")))return b=b[e-3]+"."+c+"."+b[e-1],h(ma,a,b),b;b=c+"."+b[e-1];h(ma,a,b);return b}function na(a,b,e,c){if(!t&&!window._vis_debug)try{if(c=c||"GA",e&&""!==e?"GA"===c&&(e+="."):e="",a=a||window._vis_opt_experiment_id,b=b||Aa||("GA"===c?4:1),v[a].c)if("GA"===c)window._gaq=window._gaq||[],window._gaq.push(function(){"undefined"!==
typeof window.pageTracker&&!e?(window.pageTracker._setCustomVar(b,"VWO-"+a,v[a].n,1),window.pageTracker._trackEvent("VWO","Visit","",0,!0)):window._gaq.push([e+"_setCustomVar",b,"VWO-"+a,v[a].n,1],[e+"_trackEvent","VWO","Visit","",0,!0])});else{var d=window[GoogleAnalyticsObject];d(function(c){c=d.getByName(e)||c;c.set("dimension"+b,"CampId:"+a+", VarName:"+v[a].n);c.send("event","VWO","Custom",{nonInteraction:!0})})}}catch(f){}}function n(a,b,e,c){window._vis_debug&&0!==a.indexOf("debug")&&(a="debug"+
a);var i=!1;if(!isNaN(N=parseFloat(N))&&isFinite(N))e=N;var f="",k="",g;e&&(g=new Date((new Date).getTime()+864E5*e),g=g.toGMTString(),f+="; expires="+g);"undefined"!==typeof T&&(k+="; domain=."+T);document.cookie=a+"="+encodeURIComponent(b)+f+k+"; path=/";"undefined"!==typeof c&&d[c].multiple_domains&&(i=!0,f=vwo_$("<iframe>").attr({height:"1px",width:"1px",border:"0","class":"vwo_iframe",name:"vwo_"+Math.random(),style:"position: absolute; left: -2000px; display: none"}).appendTo("head").load(function(){a.indexOf("split")!==
-1&&this.parentNode.removeChild(this)}),k=G+"ping_tpc.php?account="+K+"&name="+encodeURIComponent(a)+"&value="+encodeURIComponent(b)+"&days="+e+"&random="+Math.random(),/MSIE (\d+\.\d+);/.test(navigator.userAgent)?f.attr("src",k):(f=vwo_$("<form>").attr({action:G+"ping_tpc.php","accept-charset":"UTF-8",target:f.attr("name"),enctype:"application/x-www-form-urlencoded",method:"post",id:"vwo_form",style:"display:none"}).appendTo("head"),f.attr("action",k).submit(),f.remove()));h(Ba,a,b,e,c,i)}function m(a){window._vis_debug&&
(a="debug"+a);var b=document.cookie.match(RegExp("(?:^|;)\\s?"+a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")+"=(.*?)(?:;|$)","i")),b=b&&decodeURIComponent(b[1]);h(Ca,a,b);return b}function U(a){window.vwo_iehack_queue||(window.vwo_iehack_queue=[]);window.vwo_iehack_queue.push(a)}function oa(a){var b={},e,c;-1!==a.indexOf("#")&&(a=a.slice(0,a.indexOf("#")));c=a.slice(a.indexOf("?")+1).split("&").reverse();for(e=c.length;e--;)a=c[e].split("="),b[a[0]]="undefined"===typeof b[a[0]]?a[1]:b[a[0]]+"&"+
a[0]+"="+a[1];return b}function V(a){for(var b=a,a=a+(new Date).getTime();(new Date).getTime()<a;);h(Da,b)}function W(a){var b=document.createElement("div");b.innerHTML='<a href="'+a.split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")+'">x</a>';return b.firstChild.href}function A(a){return-1!==a.indexOf("#")}function B(a){var b=a.indexOf("#"),e=a.indexOf("?"),a=a.indexOf("=");return-1===b?-1!==e||-1!==a:-1!==e&&b>e||-1!==a&&b>a}function C(a,b,e){function c(a){return a.replace(/[\-\[\]{}()*+?.,\/\\^$|#\s]/g,
"\\$&")}function d(a,b){return pa&&!b?pa:a.replace(/^(.*[^\*])(\/(home|default|index)\..{3,4})((\?|#).*)*$/i,"$1$4")}function f(a,b){a=a.replace(/^(https?:\/\/)(www\.)?(.*)$/i,"$1$3");b&&(a=a.replace(/(^\*?|\/\/)www\./i,"$1"));return a}function k(a,b,c){a=a.replace(/\/$/,"");b&&(b=a.indexOf("/?"),a.indexOf("?")-1===b&&(a=a.replace(/\/\?([^\?]*)(.*)/,"?$1$2")));c&&(c=a.indexOf("/#"),a.indexOf("#")-1===c&&(a=a.replace(/\/#([^#]*)(.*)/,"#$1$2")));return a}if("string"!==typeof a||"string"!==typeof b)return!1;
var g=B(b),j=A(b),h=B(a),l=A(a);g||(h&&l?a=a.replace(/^(.*?)(\?[^#]*)(#?.*)$/,"$1$3"):h&&!l&&(a=a.replace(/^(.*)(\?.*)$/,"$1")));j||l&&(a=a.replace(/^(.*?)(#.*)$/,"$1"));"/"!==a&&(a=k(a,h,l));"/"!==b&&(b=k(b,g,j));g=RegExp("^"+c(b).replace(/\\\*/g,"(.*)")+"$","gi");if(g.test(a))return g=RegExp("^"+c(b).replace(/\\\*/g,"(.*)")+"$","gi"),!e||g.exec(a);a=f(a);b=f(b,1);g=RegExp("^"+c(b).replace(/\\\*/g,"(.*)")+"$","gi");if(g.test(a))return g=RegExp("^"+c(b).replace(/\\\*/g,"(.*)")+"$","gi"),!e||g.exec(a);
g=d(b,1);if(-1===b.indexOf("*")&&(j=f(W(a)).replace(/\/$/,"").replace(/\/\?/,"?"),j===b||j===g))return!0;a=d(a);b=g;g=RegExp("^"+c(b).replace(/\\\*/g,"(.*)")+"$","gi");return g.test(a)?(g=RegExp("^"+c(b).replace(/\\\*/g,"(.*)")+"$","gi"),!e||g.exec(a)):!1}function x(a,b){function e(a){return a.replace(/^(https?:\/\/)(?:w{3}\.)?(.*?)(?:\/(?:home|default|index)\..{3,4}|\/$)?(?:\/)?([\?#].*)?$/i,"$1$2$3")}if("string"!==typeof a||"string"!==typeof b)return!1;var c=RegExp(b,"gi").exec(a)||RegExp(b,"gi").exec(e(a));
!c&&0!==a.indexOf("http")&&(c=RegExp(b,"gi").exec(W(a))||RegExp(b,"gi").exec(e(W(a))));return c}function X(){return _vwo_s().f_con(_vwo_s().ua(),"bot")||_vwo_s().f_con(_vwo_s().ua(),"spider")||_vwo_s().f_con(_vwo_s().ua(),"preview")}function Y(a){return(d[a].multiple_domains?m("_vwo_uuid_"+a):m("_vwo_uuid"))||Ea||function(){n("_vwo_uuid_forced","1",365,a);return"Axxxxxxxxxxx4xxxyxxxxxx5xxxxxxxx9".replace(/[xy]/g,function(a){var e=16*Math.random()|0;return("x"==a?e:e&3|8).toString(16).toUpperCase()})}()}
function Z(a){if(!a)return"";a="&u="+a;m("_vwo_uuid_forced")&&(a+="&f=1");return a}function $(a,b){if(!m("_vis_opt_exp_"+b+"_combi")&&!X()){var e=new Image;if(!window._vis_debug){var c;c={};var i=window.screen,f="";i&&(c.sr=i.width+"x"+i.height,c.sc=i.colorDepth);c.de=document.characterSet||document.charset;c.ul=window.navigator&&(window.navigator.language||window.navigator.browserLanguage||"").toLowerCase();c.r=I.get()&&I.get().replace(/&/g,"%26");c.lt=(new Date).getTime();try{for(var k=s(c),g=k.length;g--;)var j=
k[g],f=f+('"'+j+'":"'+c[j]+'",');f="{"+f.slice(0,-1)+"}"}catch(r){}c=(c=f)?"&ed="+c:"";i=Y(b);f=d[b].multiple_domains?"_"+b:"";k="&s="+parseInt((m("_vis_opt_s")||"").split("|")[0],10);m("_vwo_uuid"+f)||n("_vwo_uuid"+f,i,365,b);e.src=G+"l.gif?experiment_id="+b+"&account_id="+K+"&combination="+a+c+Z(i)+k+"&random="+Math.random();U(e)}h(Fa,b,a)}}function D(a,b,e){var a=a||1,b=b||o[0],c=m("_vis_opt_exp_"+b+"_combi"),d="_vis_opt_exp_"+b+"_goal_"+a,f=new Image;!c||m(d)||X()?h(qa,b,a,e,!1):(window._vis_debug||
(f.src=G+"c.gif?experiment_id="+b+"&account_id="+K+"&goal_id="+a+"&combination="+c+Z(Y(b))+"&random="+Math.random()+("undefined"===typeof e?"":"&r="+e),U(f)),n(d,"1",100,b),h(qa,b,a,e,!0))}function O(a){var b=s(d[a].goals),e=b.length,c,i;for(i=!1;e--;)if(c=b[e],isNaN(parseInt(c,10)))h(ra,a,void 0,p);else if(i=d[a].goals[c],"SEPARATE_PAGE"===i.type&&(i=i.urlRegex?!!x(p,i.urlRegex):C(p,i.url)))h(ra,a,c,p),D(c,a)}function sa(a,b){var e=!1;if("string"===typeof a){var a=a.toLowerCase(),c,d,f,k,g;if(c=
document.getElementById("_vis_opt_path_hides_"+b)){if(c.sheet){c.styleSheet||(a=a.replace(/\*:/g,":"));d=c.sheet;f=d.cssRules.length?d.cssRules[0].selectorText.toLowerCase().split(","):"";k="";for(g=0;g<f.length;g++)vwo_$.trim(f[g])!==a&&(k+=f[g]+",");if(k){k=k.substr(0,k.length-1);try{d.insertRule(k+"{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}",1)}catch(j){}finally{d.deleteRule(0)}}else c&&c.parentNode&&c.parentNode.removeChild(c)}else if(c.styleSheet){d=
c.styleSheet;g=0;e=!0;do(c=d.rules[g])&&c.selectorText.toLowerCase()===a?d.removeRule(g):g++;while(c)}h(Ga,a,e)}}}function aa(a,b){return vwo_$(a).hasClass("vwo_loaded")&&vwo_$(a).hasClass("vwo_loaded_"+b)}function P(a,b){return vwo_$(a).addClass("vwo_loaded vwo_loaded_"+b)}function ba(a,b){var e=a.split(","),c=0,i,f,k,g=d[b].type,j,r,l,q,H;try{"VISUAL_AB"===g&&((l=d[b].sections["1"].variations[a])?("object"!==typeof l&&(l=vwo_$.parseJSON(l)),e=Array(l.length)):e=[]);r=e.length;0===vwo_$("#vwo_temp").length&&
vwo_$("<span id='vwo_temp'></span>").css("display","none").appendTo("body").html("<p></p>");for(j=0;j<r;j++){if("VISUAL_AB"===g){c=1;if(!(f=l[j].xpath))continue;"head"!==f.toLowerCase()&&!aa(f,b)?w[f]=[c,a]:delete w[f];i=2===d[b].version?l[j].js:l[j].content}else{if(!(f=d[b].sections[++c].path))continue;"head"!==f.toLowerCase()&&!aa(f,b)&&(w[f]=[c,e[j]]);if(1===d[b].version&&1===parseInt(e[j],10)){h(Q,b,c,e[j],f);P(f,b);sa(f,b);continue}i=d[b].sections[c].variations[e[j]];2===d[b].version&&"string"===
typeof i&&(i=i&&vwo_$.parseJSON(i)||"")}i=i.replace(/VWO_SECTION_ID/g,c);if("head"===f.toLowerCase())d[b].sections[c].loaded=d[b].sections[c].loaded||{},!0!==d[b].sections[c].loaded[j]&&(d[b].sections[c].loaded[j]=!0,h(Q,b,c,"VISUAL"===g?e[j]:a,f),vwo_$("head").append(P(vwo_$(i),b).addClass("_vwo_variation_"+c)),h(ca,b,c,"VISUAL"===g?e[j]:a,f,i),delete w[f]);else if(k=vwo_$(f).filter(function(a,c){return!aa(c,b)}),0<k.length)"VISUAL"===g?h(Q,b,c,e[j],f):h(Q,b,"1",a,f),delete w[f],2!==d[b].version&&
(document.getElementById("vwo_temp").innerHTML="<span class='vwo_span'>"+i+"<script><\/script></span>"),2===d[b].version?(-1!==i.indexOf("_vwo_api_section_callback")&&(q=[],k.each(function(){q.push(vwo_$(this).clone())})),H=new Function("var x=arguments[0],vwo_$=arguments[1];"+i),H.call(this,f,vwo_$),void 0!==q&&vwo_$(q).each(function(){R[c](vwo_$(f),this)})):k.each(function(){if("function"===typeof R[parseInt(c,10)]){h(Ha,b,c,R[c]);R[c](vwo_$("#vwo_temp").children(),vwo_$("<span>"+("undefined"===
typeof this.outerHTML?vwo_$("<div></div>").append(this.cloneNode(true)).html():this.outerHTML)+"</span>"))}}).replaceWith(vwo_$("#vwo_temp").html()),document.getElementById("vwo_temp").innerHTML="<p></p>",sa(f,b),P(f,b),2!==d[b].version&&P(vwo_$(f).find("*"),b),"VISUAL"===g?h(ca,b,c,e[j],f,i):h(ca,b,"1",a,f,i)}}catch(m){h(Ia,b,a,m)}}function da(a){ba(d[a].combination_chosen,a);d[a].timeout=function(a,e,c){var d=this;return setTimeout(function(){a.call(d,e)},c)}.call(window,da,a,50)}function Ja(a){L&&
vwo_$("_vis_opt_hidden").remove();if("SPLIT_URL"===d[a].type&&("RUNNING"===d[a].status||t)){var b,e=m("_vis_opt_exp_"+a+"_split");if(!e)return!1;b="";var c=!1;d[a].sections[1].variationsRegex?(b=d[a].sections[1].variationsRegex[e],c=x(p,b)):(b=d[a].sections[1].variations[e],c=C(p,b));if(c)return h(ea,a,p,b,!0),b=m("_vis_opt_exp_"+a+"_combi"),d[a].combination_chosen=e,h(M,a,e,!0),!b&&!t?($(e,a),n("_vis_opt_exp_"+a+"_combi",e,100,a)):(h(fa,a,!0),t||h(ga,a,b),O(a)),!0;h(ea,a,p,b,!1)}return!1}function Ka(a){if(d[a].exclude_url&&
x(S,d[a].exclude_url))return h(La,a),!1;var b=!1,b=d[a].urlRegex?!!x(p,d[a].urlRegex):C(p,d[a].url_pattern);h(ea,a,p,d[a].urlRegex||d[a].url_pattern,b);return b}function ha(a){var b=d[a].combination_chosen;if(b)return b;var e=Math.random(),c=s(d[a].combs),i=c.length,f={},k={},g=0,j=!1,h=!1,l;for(l=0;l<i;l++)b=c[l],!isNaN(parseFloat(d[a].combs[b]))&&0!=d[a].combs[b]&&("VISUAL_AB"===d[a].type||"SPLIT_URL"===d[a].type?"undefined"!==typeof d[a].sections["1"].segment&&"undefined"!==typeof d[a].sections["1"].segment[b]&&
(0==d[a].sections["1"].segment[b]?(h=!0,k[b]=d[a].combs[b]):d[a].sections["1"].segment[b]&&(1!=d[a].sections["1"].segment[b]&&(j=!0),f[b]=g+d[a].combs[b],g+=d[a].combs[b])):(f[b]=g+d[a].combs[b],g+=d[a].combs[b]));if(!j&&h){c=s(k);i=c.length;for(l=0;l<i;l++)b=c[l],f[b]=g+k[b],g+=k[b]}0<g&&1!==g&&(e*=g);c=s(f);i=c.length;for(l=0;l<i;l++)if(b=c[l],!isNaN(parseFloat(d[a].combs[b]))&&e<=f[b])return b}function ia(a,b){window._vis_opt_queue=[];y=1;var e=!1,c,i,f,k,e=d[a].urlRegex?x(p,d[a].urlRegex):C(p,
d[a].url_pattern,!0);if(!e||1===e.length)f=b;else{f="";k=b.split("*");c=1;for(i=k.length;c<i;c++){if(d[a].urlRegex&&e[c]&&(B(e[c])||A(e[c]))){var g=d[a].sections[1].variations[1];!B(g)&&!A(g)?e[c]=e[c].replace(/\/?[\?#].*/,""):A(g)&&!B(g)?e[c]=e[c].replace(/^(.*?)(?:\/?\?[^#]*)(#?.*)$/,"$1$2"):!A(g)&&B(g)&&(e[c]=e[c].replace(/\/?#.*/,""))}f+=k[c-1]+(e[c]||"")}f+=k[k.length-1]}f=f.replace(/\*/g,"");if(u.search)if(B(f)){k=oa(u.search);c=oa(f);E=s(k);for(i=E.length;i--;)e=E[i],"undefined"===typeof c[e]&&
(f+="&"+e+"="+k[e])}else f=A(f)?f.replace(/(.*?)#(.*)/,"$1"+u.search+"#$2"):f+u.search;u.hash&&-1===f.indexOf("#")&&(f+=u.hash);h(Ma,a,f);this.location.replace(f)}function Na(a){var b=t||m("_vis_opt_exp_"+a+"_combi");if(b=parseInt(b,10))1===b?(h(F,a,void 0,void 0,void 0,!0),O(a),d[a].combination_chosen=b,h(M,a,b,!0),h(ga,a,b)):(n("_vis_opt_exp_"+a+"_split",b,100,a),I.set(),h(ja,a),ia(a,d[a].sections[1].variations[b]));else{if(isNaN(b=parseInt(ha(a),10))){h(M,a,void 0,!1);h(F,a,void 0,void 0,void 0,
!0);return}d[a].multiple_domains&&1!==b?(n("_vis_opt_exp_"+a+"_split",b,100,a),I.set(),y=1,vwo_$(".vwo_iframe").load(function(){h(ja,a);ia(a,d[a].sections[1].variations[b])})):1!==b?(n("_vis_opt_exp_"+a+"_split",b,100,a),I.set(),h(ja,a),ia(a,d[a].sections[1].variations[b])):(d[a].combination_chosen=b,$(1,a),n("_vis_opt_exp_"+a+"_combi",b,100,a),h(M,a,b,!1),h(F,a,void 0,void 0,void 0,!0))}!L&&y&&document.write("<style class='_vis_opt_hidden'>html,body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}</style>")}
function Oa(){for(var a=0,b=o.length,e,c;b--;)if(e=o[b],!0===d[e].ready){a=e;break}if(window._vis_opt_experiment_id=a){e=s(d[a].comb_n);for(c=e.length;c--;)b=e[c],Pa[b]=d[a].comb_n[b]}}function ka(a){if(a)try{vwo_$("head").append(a)}catch(b){}}function ta(a){if(!a)return null;var b=a,e=[],c=a.tagName,d,f,k;if("string"===typeof c&&("body"===c.toLowerCase()||"head"===c.toLowerCase()))return c;for(;a;){c=a.tagName;f=c.match(/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/);if(!c||!f||(f&&f[0])!==c)c="*";try{k=vwo_$(a).attr("id")}catch(g){k=
a.id}if(k&&"string"===typeof k){try{d=vwo_$(c+"#"+k)}catch(h){d=""}if(1===d.length){e.unshift(d.selector);break}else e.unshift(c)}else e.unshift(c);a:if(a.previousElementSibling)a=a.previousElementSibling;else{for(;a=a.previousSibling;)if(1===a.nodeType)break a;a=void 0}}-1===e[0].indexOf("#")&&(e[0]+=":first-child");return ta(b.parentNode)+" > "+e.join(" + ")}function Qa(a){var b,e,c,i,f,k,g=o.length,j=vwo_$(a.target),r,l,q,H=!1;if("undefined"!==typeof j.get(0).tagName){for(;g--;)if(c=o[g],"RUNNING"===
d[c].status){if("a"===j.get(0).tagName.toLowerCase())k=j.attr("href"),q=!0;else if(0<j.parents("a").length)k=j.parents("a").first().attr("href"),q=!0;else if("button"===j.get(0).tagName.toLowerCase()||0<j.parents("button").length||"input"===j.get(0).tagName.toLowerCase()&&("button"===j.attr("type")||"image"===j.attr("type")||"submit"===j.attr("type")))q=!0;r=s(d[c].goals);for(i=r.length;i--;)if(b=r[i],f=d[c].goals[b].type,l=d[c].goals[b].url||d[c].goals[b].urlRegex,H=!1,!isNaN(parseInt(b,10))&&l){"ON_PAGE"===
f&&(H=d[c].goals[b].urlRegex?!!x(k,l):C(k,l));try{if("ENGAGEMENT"===f&&q||H||"CLICK_ELEMENT"===f&&(j.is(l)||j.parents(l).length))e=!0,D(b,c)}catch(n){}}if(d[c].clickmap){b=m("_vis_opt_exp_"+c+"_combi");d[c].clicks=d[c].clicks||0;r=ta(j.get(0));if(-1!==(i=r.search(/[^>+\s]*#[^#]*$/)))r=r.substr(i).replace(/(#[\w_-]+):first-child/g,"$1");if(b&&"string"===typeof r&&"html"!==r.toLowerCase()&&!X()&&++d[c].clicks<=Ra){if("a"===j.get(0).tagName.toLowerCase()||0<j.parents("a").length)e=!0;f=j.offset();i=
Math.round(1E3*(a.pageX-f.left)/j.width())/1E3;f=Math.round(1E3*(a.pageY-f.top)/j.height())/1E3;if(0>i||1<i)i=0.5;if(0>f||1<f)f=0.5;window._vis_debug||(l=new Image,l.src=G+"h.gif?experiment_id="+c+"&account_id="+K+"&combination="+b+Z(Y(c))+"&random="+Math.random()+"&url="+encodeURIComponent(u.href)+"&path="+encodeURIComponent(r)+"&x="+i+"&y="+f,U(l));h(Sa,c,b,r,i,f)}}}k&&e&&(-1===k.indexOf("javascript:")&&"#"!==k.charAt(0))&&V(ua)}}function Ta(){t||vwo_$("body").bind("submit",function(a){var b=vwo_$(a.target).get(0);
"string"===typeof b.tagName&&("form"!==b.tagName.toLowerCase()&&0<vwo_$(b).parents("form").length)&&(b=vwo_$(a.target).parents("form").get(0));if(!("string"===typeof b.tagName&&"form"!==b.tagName.toLowerCase()||"vwo_form"===vwo_$(b).attr("id"))){for(var e=!1,c,i=o.length,f,h,g=!1;i--;){c=o[i];f=s(d[c].goals);for(h=f.length;h--;)if(a=parseInt(f[h],10),g=!1,"FORM_SUBMIT"===d[c].goals[a].type&&(g=d[c].goals[a].urlRegex?!!x(vwo_$(b).attr("action"),d[c].goals[a].urlRegex):C(vwo_$(b).attr("action"),d[c].goals[a].url)),
!isNaN(a)&&("ENGAGEMENT"===d[c].goals[a].type||g))e=!0,D(a,c)}e&&V(ua)}});va=!0}(function(a,b,e){function c(){var a;a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}var d="hashchange",f,h=a.event.special,g=document.documentMode,j="on"+d in b&&(g===e||7<g);a.fn[d]=function(a){return a?this.bind(d,a):this.trigger(d)};a.fn[d].delay=50;h[d]=a.extend(h[d],{setup:function(){if(j)return!1;a(f.start)},teardown:function(){if(j)return!1;a(f.stop)}});f=function(){function f(){var e=c();e!==h&&(h=
e,a(b).trigger(d));q=setTimeout(f,a.fn[d].delay)}var g={},q,h=c();g.start=function(){q||f()};g.stop=function(){q&&clearTimeout(q);q=e};return g}()})(vwo_$,this);var J=[],Ra=window._vwo_clicks||3,pa=window._vis_opt_url,R=window._vwo_api_section_callback={},o=window._vwo_exp_ids||[],d=window._vwo_exp||{},N=window._vis_opt_cookieDays,u=location,z,t=(z=(u.search+u.hash).match(/.*_vis_test_id=(.*?)&.*_vis_opt_preview_combination=(.*)$/))?0<=vwo_$.inArray(z[1],o)&&d[z[1]]&&void 0!==d[z[1]].combs[z[2]]?
z[2]:!1:!1,y=0,Aa=window._vis_opt_GA_slot,Pa=window._vis_opt_comb_name={},wa=!1,xa=!1,va=!1,L=!1,v={},Ea=window._vwo_uuid,K=window._vwo_acc_id,w={},ma="pTLD",Da="p",ea="mW",Ba="sC",Ca="gC",Fa="rH",ga="vS",Ga="dCSSR",fa="cAVGFE",ra="cVGFE",qa="rC",la="oO",F="uAV",La="eURL",ja="sURL",Ia="eLTTE",Q="eL",ca="eCA",Ha="aSC",M="cC",Ma="bRTR",Sa="hCl",E,ua=window._vis_opt_click_pause||500,G=window._vwo_server_url||"//dev.visualwebsiteoptimizer.com/",S=window._vis_opt_url||u.href,p=window._vis_opt_url;p||(p=
-1!==S.search(/_vis_(test_id|hash|opt_(preview_combination|random))=[a-z\.\d,]+&?/)?S.replace(/_vis_(test_id|hash|opt_(preview_combination|random))=[a-z\.\d,]+&?/g,"").replace(/(\/|\?|&)$/,""):S.replace(/\/$/,""));window._vwo_evq=window._vwo_evq||[];var ya=window._vwo_evq;window._vwo_ev=window._vwo_ev||function(){"jI"===arguments[0]?ya.unshift(["jI"]):ya.push([].slice.call(arguments))};var T=window._vis_opt_domain||window._vwo_cookieDomain||za(u.host),I=function(){var a=m("_vwo_referrer");n("_vwo_referrer",
0,-365);"string"!==typeof a&&(a=document.referrer);return{get:function(){return a},set:function(){n("_vwo_referrer",a,1.8E-4)}}}();window._vwo_s=function(){function a(a){return"undefined"!==typeof a}var b=new Date,d=navigator,c=document,h=d.userAgent,f=d.vendor,k=c.createElement("a"),g=h.toLowerCase(),j=d.appVersion,m=[{s:h,sS:" OPR/",p:window.opera,i:"Opera"},{s:f,sS:"Apple",i:"Safari"},{s:f,sS:"KDE",i:"Konqueror"},{s:h,sS:"Firefox",i:"Firefox"},{s:h,sS:"Netscape",i:"Netscape"},{s:h,sS:"MSIE",p:/(?:Trident\/.*?rv:|Windows NT.*?Edge\/)(?:[0-9]+[.0-9]*)/i.test(h),
i:"Explorer"},{s:h,sS:"Chrome",i:"Chrome"}],l=[{s:"search.yahoo.com/",p:"p",i:1},{s:"www.google.",p:"q",i:2},{s:"www.bing.com/",p:"q",i:3},{s:".ask.com/",p:"q",i:4},{s:"www.search.com/",p:"q",i:5},{s:"www.baidu.com/",p:"wd",i:6},{s:"search.aol.com/",p:"q",i:7}];return{ce:function(){return d.cookieEnabled},U:function(){return c.URL},R:function(){return I.get()},ks:function(){return""===this.R()?"":k.search},ors:function(){for(a=0;a<l.length;a++)if(-1!==this.R().indexOf(l[a].s))return l[a].i;return 0},
rt:function(){return this.ors()?"org":this.R()?"ref":"dir"},k:function(){if(this.ors()){var a=RegExp("[\\?&]"+l[this.ors()-1].p+"=([^&#]*)").exec(this.R());if(null!==a)return a[1].split("+").join(" ")}return""},gC:function(a){if(0<c.cookie.length){var b=c.cookie.indexOf(a+"=");if(-1!==b)return b=b+a.length+1,a=c.cookie.indexOf(";",b),-1===a&&(a=c.cookie.length),decodeURIComponent(c.cookie.substring(b,a))}return""},T:function(){var a=this.gC("_vis_opt_s");return a?1<parseInt(a.split("|")[0],10)?"ret":
"new":"new"},qP:function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");return(a=RegExp("[\\?&]"+a+"=([^&#]*)").exec(this.U()))?a[1]:""},f_in:function(b,c){return a(b)&&a(c)&&b.toString().toLowerCase()===c.toString().toLowerCase()},f_nin:function(a,b){return!this.f_in(a,b)},f_cs:function(b,c){return a(b)&&a(c)&&b.toString()===c.toString()},f_ncs:function(a,b){return!this.f_cs(a,b)},f_re_i:function(b,c){if(!a(b)||!a(c))return!1;var d=RegExp(c,"i");return(b+"").match(d)},f_re_s:function(b,c){if(!a(b)||
!a(c))return!1;var d=RegExp(c);return(b+"").match(d)},f_con:function(b,c){return!a(b)||!a(c)?!1:-1<b.toString().toLowerCase().indexOf(c.toString().toLowerCase())},f_d_con:function(a,b){return!this.f_con(a,b)},f_b:function(a){return a?!1:!0},f_n_b:function(a){return!this.f_b(a)},f_e:function(a,b){var c;if("object"===typeof b){for(c=0;c<b.length;c++)if(this.f_in(a,b[c]))return!0;return!1}return this.f_in(a,b)},wk:function(){return-1<g.indexOf("webkit")},de:function(){return-1<g.indexOf("ipod")?"ipod":
-1<g.indexOf("ipad")&&this.wk()?"ipad":-1<g.indexOf("iphone")?"iphone":-1<g.indexOf("android")?"android":-1<g.indexOf("googletv")?"googletv":-1<g.indexOf("symbian")||/series\s*[4-9]0/i.test(g)?"symbian":-1<g.indexOf("blackberry")||-1<g.indexOf("vnd.rim")||-1<g.indexOf("BB10")?"blackberry":-1<g.indexOf("windows phone")?"winphone":""},os:function(){if(-1!==j.indexOf("Win"))return"windows";if(-1!==j.indexOf("Mac"))return"macOS";if(-1!==j.indexOf("X11"))return"unix";if(-1!==j.indexOf("Linux"))return"linux"},
b:function(){return this.sS(m)||""},sS:function(a){var b,c,d;for(b=0;b<a.length;b++)if(c=a[b].s,d=a[b].p,c&&-1!==c.indexOf(a[b].sS)||d)return a[b].i},jv:function(a){try{return window[a]||eval(a)}catch(b){}},ua:function(){return h},DoW:function(){return b.getDay().toString()},Hr:function(){return b.getHours()},Co:function(){var a=window._vwo_geo;return"undefined"!==typeof a&&"undefined"!==typeof a.country?a.country:""},Re:function(){var a=window._vwo_geo;return"undefined"!==typeof a&&"undefined"!==
typeof a.region?a.region:""},Ci:function(){var a=window._vwo_geo;return"undefined"!==typeof a&&"undefined"!==typeof a.city?a.city:""},ip:function(){return window._vwo_ip?window._vwo_ip:""}}};window._vwo_campaignData=v;vwo_$.fn.nonEmptyContents=function(){if(!this||!this.length)return this.contents();for(var a=this.contents(),b,d=a.length;d--;)b=a.get(d),3===b.nodeType&&!/\S/.test(b.nodeValue)&&a.splice(d,1);return a};h("jI");window._vis_opt_queue=window._vis_opt_queue||[];var Ua=window._vis_opt_queue,
s=Object.keys||function(a){var b=[],d;for(d in a)a.hasOwnProperty(d)&&b.push(d);return b};J.execute=function(a){try{a()}catch(b){h("qEE",b)}};J.finish=function(){var a;window._vis_opt_queue.push=J.execute;for(a=0;a<window._vis_opt_queue.length;a++)J.execute(window._vis_opt_queue[a])};_vwo_s().gC("_vis_opt_test_cookie")||((z=_vwo_s().gC("_vis_opt_s"))?n("_vis_opt_s",parseInt(z.split("|")[0],10)+1+"|",100):n("_vis_opt_s","1|",100));n("_vis_opt_test_cookie",1);window._vis_opt_top_initialize=function(){function a(){if(t){h(la,
false);return false}var a=m("_vis_opt_out");if(a||u.href.indexOf("vwo_opt_out=1")>-1){if(!a){(new Image).src=G+"optOut.gif?account="+K+"&domain="+T;n("_vis_opt_out",1,3650);m("_vis_opt_out")==1&&alert("You have successfully opted out of VWO for this website.")}h(la,true);return true}h(la,false);return false}var b,e,c,i=document.getElementById("vwo_temp"),f="",k=false,g,j;c=n("_vis_opt_test_cookie","1")||!m("_vis_opt_test_cookie");for(e=o.length;e--;){b=o[e];if("SPLIT_URL"===d[b].type){o.splice(e,
1);o.push(b)}if(!d[b].goals)d[b].goals={}}if(c||a())h("tIE",void 0,c,a());else{for(e=o.length;e--&&!y;){b=o[e];if(!d[b].globalCode)d[b].globalCode={pre:"",post:""};typeof d[b].third_party_exclude!="undefined"&&n("_vis_opt_exp_"+b+"_exclude","1",100);typeof d[b].third_party_combi!="undefined"&&n("_vis_opt_exp_"+b+"_combi",d[b].third_party_combi,100);if(typeof d[b].third_party_goals!="undefined")for(c=0;c<d[b].third_party_goals.length;c++)n("_vis_opt_exp_"+b+"_goal_"+d[b].third_party_goals[c],"1",100);
if("undefined"!==typeof d[b].third_party)for(c=s(d[b].third_party).length;c;)n(d[b].third_party[c].name,d[b].third_party[c--].value,100);h("tIB",b);c=m("_vis_opt_exp_"+b+"_combi");d[b].ready=false;if(m("_vis_opt_exp_"+b+"_exclude")&&!t)h(F,b,true,true);else if(Ja(b)){h(F,b,void 0,void 0,true);d[b].ready=true}else if(!t&&!c&&Math.random()>d[b].pc_traffic/100){h(F,b,true,void 0,void 0,true);n("_vis_opt_exp_"+b+"_exclude","1",100,b)}else if(("RUNNING"===d[b].status||t)&&("SPLIT_URL"!==d[b].type&&!h(fa,
b)&&O(b)||1)&&Ka(b)){k=true;if("SPLIT_URL"===d[b].type)Na(b);else{c=false;(d[b].combination_chosen=j=t||m("_vis_opt_exp_"+b+"_combi"))&&(c=true);j=d[b].combination_chosen=j||ha(b);if(!d[b].combination_chosen){h(F,b,void 0,void 0,void 0,void 0,void 0,true);continue}ka(d[b].globalCode.pre);h(M,b,j,c);if(d[b].type==="VISUAL_AB"&&d[b].combination_chosen!=1){if(c=(c=d[b].sections["1"].variations[d[b].combination_chosen])&&vwo_$.parseJSON(c))for(j=0;j<c.length;j++)c[j].xpath&&(f=f+(c[j].xpath+","))}else{E=
s(d[b].sections);for(c=E.length;c--;)d[b].sections[E[c]].path&&(f=f+(d[b].sections[E[c]].path+","))}i||vwo_$("<span id='vwo_temp'></span>").css("display","none").appendTo("head");if(f){f=f.substr(0,f.length-1);L||document.write("<style class='_vis_opt_hidden' id='_vis_opt_path_hides_"+b+"'>"+f+"{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}</style>")}h("eLTS",b);da(b)}d[b].ready=true}else{h(fa,b,void 0,k);c=s(d[b].goals);for(j=0;j<c.length;j++){g=d[b].goals[c[j]];
if(m("_vis_opt_exp_"+b+"_combi")&&(g.type==="SEPARATE_PAGE"||g.type==="REVENUE_TRACKING"||g.type==="CUSTOM_GOAL"))if(g=g.urlRegex?!!x(p,g.urlRegex):C(p,g.url)){ka(d[b].globalCode.pre);break}}O(b)}}if(!wa){wa=true;vwo_$(window).hashchange(function(){y=0;window._vis_opt_queue=Ua;L=true;p=window._vis_opt_url||u.href.replace(/_vis_(test_id|hash|opt_(preview_combination|random))=[a-z\.\d,]+&?/g,"").replace(/(\/|\?|&)$/,"");h("hC",p,y);_vis_opt_top_initialize();_vis_opt_bottom_initialize()})}if(y===0){Oa();
J.finish()}h("tIEn")}};window._vis_opt_bottom_initialize=function(){h("bIB");if(1===y)h("bIE",true);else{for(var a,b=o.length,e,c,i,f,k=0;b--;){a=o[b];if(d[a].ready){if("SPLIT_URL"!==d[a].type){if(e=t||m("_vis_opt_exp_"+a+"_combi")){h("eLTSt",a,e);ba(e,a);window.clearTimeout(d[a].timeout);h(ga,a,e)}else{e=ha(a);if(!e)return;h("eLTSt",a,e);ba(e,a);$(e,a);n("_vis_opt_exp_"+a+"_combi",e,100,a);window.clearTimeout(d[a].timeout)}e&&ka(d[a].globalCode.post);for(var g in w)w.hasOwnProperty(g)&&h("eNL",a,
w[g][0],w[g][1],g)}v[a]={};v[a].c=e||m("_vis_opt_exp_"+a+"_combi");v[a].n=d[a].comb_n[v[a].c]||"";if(d[a].GA||d[a].UA){c=d[a].GA?"GA":"UA";na(a,d[a][c].s,d[a][c].p,c)}if(d[a].GTM){k={};k["Campaign-"+a]=v[a].n;window.dataLayer=window.dataLayer||[];window.dataLayer.push(k);k=1}}if("undefined"!==typeof window._vis_opt_revenue){h("cRGFE",a,window._vis_opt_revenue);c=s(d[a].goals);for(i=c.length;i--;){f=c[i];"REVENUE_TRACKING"===d[a].goals[f].type&&D(f,a,window._vis_opt_revenue)}}}k&&window.dataLayer.push({event:"VWO"});
va||Ta();if(!xa){t||vwo_$("body").bind("mousedown",Qa);xa=true}vwo_$("._vis_opt_hidden").remove();L=false;J.finish();h("bIE")}};window._vis_opt_goal_conversion=function(a){if(!isNaN(parseInt(a,10))){h("cGFAE",a);for(var b=o.length,e;b--;){e=o[b];"object"===typeof d[e].goals[a]&&D(a,e)}}};window._vis_opt_revenue_conversion=function(a){if(!isNaN(parseFloat(a,10))){var b,e,c=o.length,i,f;for(h("cARGFAE",a);c--;){e=o[c];i=s(d[e].goals);for(f=i.length;f--;){b=i[f];"REVENUE_TRACKING"===d[e].goals[b].type&&
D(b,e,a)}}}};window._vis_opt_pause=V;window._vis_opt_readCookie=m;window._vis_opt_createCookie=n;window._vis_opt_element_loaded=da;window._vis_opt_GA_track=na;window._vis_opt_register_conversion=D})();
_vis_opt_top_initialize();
vwo_$(function(){_vis_opt_bottom_initialize()});