var ACCESS_TOKEN,API_URL,AUTH_URL,FEED,KXGIO_APPS,MESSAGE,PAGE_NAME,ROUTE,TEXT,bind,compoareDatetimes,currentDatetime,dotToArray,get,index,inputGet,inputGetAll,post,postImgur,redirect,text2lines,ucfirst,xx;PAGE_NAME="純靠北工程師",API_URL="https://api.kobeengineer.io/v1/",AUTH_URL="https://api.kobeengineer.io/auth/",KXGIO_APPS=["2PtsxZcjX","2qzmW72SO","40cNDdt3b"],ACCESS_TOKEN=Cookies.get("_ggid"),ROUTE=window.location.pathname,MESSAGE={something_wrong:'kobeengineer.exe - 應用程式錯誤\ufeff"0x00000000" 指令參考的\ufeff"0x00000000" 記憶體',asshole_read_the_license:"請詳細閱讀發文守則",content_is_empty:"請輸入發文內容",code_is_empty:"請輸入程式碼",post_submit_failed:"發文失敗，請稍候再嘗試或聯絡網站管理員",are_you_sure:"刪、都刪？",countdown_failed:"根据相关法律法规和政策，您的发文内容未予发佈",report_this:"您要檢舉的是這篇發文？",report_success:"您的檢舉已送出",report_failed:"檢舉失敗，請稍後再試"},TEXT={published:"已發佈",unpublished:"已下架",denied:"禁止發佈",pending:"審核中",analysing:"分析中",queuing:"佇列中",failed:"發文失敗",state:"發文狀態",created_at:"新增時間",publish_countdown:"發文倒數",like:"靠北",liked:"已靠北",people_liked:"人感覺靠北"},FEED={sorting:{newest:"最新發文",ranking_today:"今日排行",ranking_week:"本週排行",ranking_month:"本月排行",ranking_top100:"TOP100排行"}},xx=function(e){return console.log(e)},index=function(e,t){return e[t]},dotToArray=function(e,t){return t.split(".").reduce(index,e)},redirect=function(e){return window.location=e},bind=function(e,t,n,r){return null==r&&(r="body"),$(r).delegate(e,t,n)},text2lines=function(e){return e.match(/[^\r\n]+/g)},ucfirst=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},currentDatetime=function(e){var t,n,r;return null==e&&(e=0),n=new Date,n.setHours(n.getHours()+e),t=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate(),r=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds(),t+" "+r},compoareDatetimes=function(e,t){return Date.parse(e)>Date.parse(t)},inputGetAll=function(){var e,t,n,r,o,i;for(r=window.location.search.substring(1),i=r.split("&"),o={},t=0;t<i.length;)n=i[t].split("="),"undefined"==typeof o[n[0]]?o[n[0]]=decodeURIComponent(n[1]):"string"==typeof o[n[0]]?(e=[o[n[0]],decodeURIComponent(n[1])],o[n[0]]=e):o[n[0]].push(decodeURIComponent(n[1])),t++;return o},inputGet=function(e,t){var n;return null==t&&(t=""),n=inputGetAll(),void 0===n[e]?t:n[e]},get=function(e,t,n){return null==n&&(n={}),n.token=ACCESS_TOKEN,$.ajax({url:e,type:"get",data:n,dataType:"json",error:function(e){return t(e)},success:function(e){return t(e)}})},post=function(e,t,n,r){return null==n&&(n={}),null==r&&(r=!1),r&&(e+="?token="+ACCESS_TOKEN),$.ajax({url:e,type:"post",data:n,dataType:"json",error:function(e){return t(e)},success:function(e){return t(e)}})},postImgur=function(e,t){return null==t&&(t={}),$.ajax({url:"https://api.imgur.com/3/image",contentType:"application/x-www-form-urlencoded",type:"post",data:t,dataType:"json",beforeSend:function(e){return e.setRequestHeader("Authorization","Client-ID 36f2c6c4618678a")},error:function(t){return e(t)},success:function(t){return e(t)}})},$.ajaxSetup({cache:!1,crossDomain:!0});