!function t(n,e,i){function o(a,s){if(!e[a]){if(!n[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=e[a]={exports:{}};n[a][0].call(c.exports,function(t){var e=n[a][1][t];return o(e?e:t)},c,c.exports,t,n,e,i)}return e[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(t,n,e){(function(t){var e,i=function(t,n){return function(){return t.apply(n,arguments)}};e=function(){function t(){this.hasToken=i(this.hasToken,this),this.createIdentification=i(this.createIdentification,this),this.checkIdentificationCallback=i(this.checkIdentificationCallback,this),this.checkIdentification=i(this.checkIdentification,this),this.getIdentification=i(this.getIdentification,this),this.login=i(this.login,this),this.me=void 0,this.identification=void 0,this.getIdentification(),this.getLoginStatus(),this.bind()}return t.prototype.bind=function(){return bind(".button-github-login","click",function(t){return function(){return t.login("github")}}(this)),bind(".button-bitbucket-login","click",function(t){return function(){return t.login("bitbucket")}}(this)),bind(".button-facebook-login","click",function(t){return function(){return t.login("facebook")}}(this)),bind(".button-logout","click",this.logout)},t.prototype.login=function(t){return redirect(AUTH_URL+t)},t.prototype.logout=function(){return Cookies.set("_ggid","",{expires:0,path:"/",domain:".kobeengineer.io"}),setTimeout(function(){return redirect("/")},500)},t.prototype.getLoginStatus=function(){return this.hasToken()?get(API_URL+"me",function(t){return"connected"===t.status?(this.me=t.user,this.me.verified?View.switch("verified-user"):View.switch("user")):(Cookies.set("_ggid","",{expires:0,path:"/",domain:".kobeengineer.io"}),View.switch("guest"))}.bind(this),{token:ACCESS_TOKEN}):View.switch("guest")},t.prototype.getIdentification=function(){return null===localStorage.getItem("identification")?this.createIdentification():(this.identification=localStorage.getItem("identification"),this.checkIdentification(this.identification))},t.prototype.checkIdentification=function(t){return post(API_URL+"client/check",this.checkIdentificationCallback,{identification:t})},t.prototype.checkIdentificationCallback=function(t){if("undefined"==typeof t.message)return this.createIdentification()},t.prototype.createIdentification=function(){return post(API_URL+"client",function(t){var n;return n=t.data.identification,localStorage.setItem("identification",n),this.identification=n}.bind(this))},t.prototype.hasToken=function(){return void 0!==ACCESS_TOKEN&&""!==ACCESS_TOKEN},t}(),t.User=new e,n.exports=e}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(t,n,e){var i,o,r,a,s,l;l=t("./../view/View"),a=t("./../view/FeedView"),o=t("./../view/FeedAuthorsView"),s=t("./../component/User"),i=t("./../partial/FeedAuthors"),r=t("./../partial/FeedNav")},{"./../component/User":1,"./../partial/FeedAuthors":3,"./../partial/FeedNav":4,"./../view/FeedAuthorsView":5,"./../view/FeedView":6,"./../view/View":7}],3:[function(t,n,e){var i,o=function(t,n){return function(){return t.apply(n,arguments)}};i=function(){function t(){this.callback=o(this.callback,this),this.loadPage=o(this.loadPage,this),this.container=$("#author-list .row"),this.loading=$(".loading-progress"),this.url=API_URL+"feed/authors",this.current_page=1,this.total_page=1,this.loadPage()}return t.prototype.loadPage=function(){return this.loading.show(),get(this.url,this.callback,{page:this.current_page})},t.prototype.callback=function(t){return this.loading.hide(),t.success?(this.total_page=t.data.total_page,FeedAuthorsView.main.create(t.data.authors)):View.message.failed(this.container)},t}(),i=new i,n.exports=i},{}],4:[function(t,n,e){var i,o=function(t,n){return function(){return t.apply(n,arguments)}};i=function(){function t(){this.initial=o(this.initial,this),this.container=$("#feed"),this.sort=inputGet("sort"),this.author=inputGet("author"),""===this.sort&&(this.sort="newest"),void 0===FEED.sorting[this.sort]&&(this.sort="newest"),this.initial()}return t.prototype.initial=function(){return FeedView.feed_nav.create(FEED.sorting,this.sort)},t}(),i=new i,n.exports=i},{}],5:[function(t,n,e){(function(t){var e;e=function(){function t(){}return t.prototype.main={parent:$("#author-list .row"),create:function(t,n){var e,i;null==n&&(n="");for(i in t)e=this.handleContent(t[i].post),n+=this.__author(t[i],e);return this.parent.append(n)},handleContent:function(t,n){var e,i,o;return null==n&&(n=""),void 0!==t.reply_to&&(n+=this.__replyTo(t.reply_to)),"text"!==(e=t.type)&&"link"!==e&&"code"!==e||(n+=t.content),void 0!==t.hashtag&&(n+=t.hashtag),"image"===(i=t.type)&&(n+=this.__postImage(t.image)),"code"===(o=t.type)&&(n+=this.__postCode(t.code)),n},__replyTo:function(t){return'RE: <a href="/post/'+t+'/">#'+PAGE_NAME+t+"</a>&nbsp;"},__postImage:function(t){return'<div><img src="'+t+'" class="img-responsive" /></div>'},__postCode:function(t){return"<pre>"+t+"</pre>"},__author:function(t,n){return'<div class="span3">\n  <div class="author-card old-school-scroll">\n    <div class="content">\n      <ul>\n        <li>\n          <a href="/feed/?author='+t.name+'">\n            <h4 style="padding-bottom: 10px;"><strong>\n              <mark>'+t.name+'</mark>\n            </strong></h4>\n            <div class="post-content">'+n+"</div>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"}},t}(),t.FeedAuthorsView=new e,n.exports=e}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(t,n,e){(function(t){var e;e=function(){function t(){}return t.prototype.feed={parent:$("#feed"),create:function(t,n,e){var i,o,r;for(null==n&&(n=""),null==e&&(e=""),""!==n&&0===$("#author-header").length&&(e+=this.__header(n)),i=0,o=t.length;i<o;i++)r=t[i],r.content=this.handleContent(r),e+=this.__post(r);return this.parent.append(e),this.parent.linkify()},create_ranking:function(t,n,e){var i,o,r,a;for(null==n&&(n=1),null==e&&(e=""),i=0,o=t.length;i<o;i++)r=t[i],r.content=this.handleContent(r),a="TOP"+n,e+=this.__post(r,a),n++;return this.parent.append(e),this.parent.linkify()},handleContent:function(t,n){var e,i,o;return null==n&&(n=""),void 0!==t.reply_to&&(n+=this.__replyTo(t.reply_to)),"text"!==(e=t.type)&&"link"!==e&&"code"!==e||(n+=t.content),void 0!==t.hashtag&&(n+="<br />"+t.hashtag),"image"===(i=t.type)&&(n+=this.__postImage(t)),"code"===(o=t.type)&&(n+=this.__postCode(t.code)),n},__replyTo:function(t){return'RE: <a href="/post/'+t+'/">#'+PAGE_NAME+t+"</a>&nbsp;"},__postImage:function(t){return'<div>\n  <a href="/post/?id='+t.id+'">\n    <img src="'+t.image+'" class="img-responsive" />\n  </a>\n</div>'},__postCode:function(t){return"<pre>"+t+"</pre>"},__header:function(t){return'<div class="alert alert-block" id="author-header">\n  <img class="pull-left" src="/images/old/mchammer.gif" width="40" style="margin-right:10px;">\n  <h2 style="color: black;">'+t+" 的發文</h2>\n</div>"},__post:function(t,n){return null==n&&(n=""),'<div class="post old-school-scroll">\n  <div class="content">\n    <ul>\n      <li>\n        <strong>\n          '+n+'\n          <a href="/post/?id='+t.id+'"><mark>#'+PAGE_NAME+t.id+'</mark></a>\n        </strong><br />\n        <small style="font-size:14px;">Published at '+t.published_at+'</small><br />\n        <div class="post-content">'+t.content+"</div>\n        <div>\n          <br />\n          "+View.like_button.create(t)+"\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"}},t.prototype.feed_nav={parent:$("#feed-nav"),create:function(t,n,e){var i,o;null==e&&(e=""),e+=this.__header("Feed filter");for(o in t)i=o===n&&"/feed/"===ROUTE?"active":"",e+=this.__li(o,t[o],i);return this.parent.html(e)},__header:function(t){return'<li class="nav-header">'+t+"</li>"},__li:function(t,n,e){return null==e&&(e=""),'<li class="'+e+'"><a href="/feed/?sort='+t+'">+ '+n+"</a></li>"}},t}(),t.FeedView=new e,n.exports=e}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(t,n,e){(function(t){var e;e=function(){function t(){}return t.prototype.switch=function(t){return"verified-user"===t?($("body").removeClass("guest").addClass("user verified"),this.navbar.user()):"user"===t?($("body").removeClass("guest").addClass("user"),this.navbar.user()):($("body").removeClass("user verified").addClass("guest"),this.navbar.guest())},t.prototype.navbar={parent:$("#main-menu-left"),user:function(){var t;return t='<li class="dropdown" id="preview-menu">\n  <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n    Member <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><a href="/me/posts/">My posts</a></li>\n    <li><a href="/me/setting/">Setting</a></li>\n    <li><a href="javascript:void(0)" class="button-logout">Logout</a></li>\n  </ul>\n</li>',this.parent.append(t)},guest:function(){var t;return t='<li class="dropdown" id="preview-menu">\n  <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n    Login <b class="caret"></b>\n  </a>\n  <ul class="dropdown-menu">\n    <li><a href="javascript:void(0)" class="button-github-login">GitHub登入</a></li>\n    <li><a href="javascript:void(0)" class="button-bitbucket-login">Bitbucket登入</a></li>\n    <li><a href="javascript:void(0)" class="button-facebook-login">Facebook登入</a></li>\n  </ul>\n</li>',this.parent.append(t)}},t.prototype.message={failed:function(t){var n;return n="<span>Load failed</span>",t.append(n)},failed_table:function(t,n){var e;return null==n&&(n=1),e='<tr>\n  <td colspan="'+n+'">\n    <span>Load failed</span>\n  </td>\n</tr>',t.append(e)},null_table:function(t,n,e){var i;return null==n&&(n=1),null==e&&(e=""),i='<tr>\n  <td colspan="'+n+'">\n    <span>No record. '+e+"</span>\n  </td>\n</tr>",t.append(i)},page_not_found:function(t){var n;return n='<div class="alert alert-block alert-danger text-center">\n  <img src="/images/old/shark.gif" /><br /><br />\n  <h4 class="alert-heading">Thiss paage isn avilabie</h4><br />\n  <p>\n    Tho likn yuo flolowed mav bi borken, orr tle pgae mya heva beem remvoed.\n    <br /><br />\n    Wi cann not doo amything fro yyu, pleese fcuk yurself or go home.\n  </p>\n  <br />\n</div>',t.append(n)}},t.prototype.like_button={create:function(t){return this.__view(t.id,t.likes,t.liked)},updateLikeCount:function(t,n,e,i,o){return null==i&&(i=!1),null==o&&(o=""),o+=this.__view(n,e,i),t.parent().replaceWith(o)},__view:function(t,n,e){var i;return null==e&&(e=!1),e=e?" btn-primary":"",i=e?TEXT.liked:TEXT.like,'<div class="like-wrapper">\n  <button type="button" class="btn'+e+' button-like" data-id="'+t+'">\n    <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> '+i+'\n  </button>\n  <span class="post-likes-count">\n    '+n+TEXT.people_liked+"\n  </span>\n</div>"}},t}(),t.View=new e,n.exports=e}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[2]);