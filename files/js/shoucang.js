var g_arrCollectList = {
	yahoo:[
		'Yahoo+',
		'"http://myweb.cn.yahoo.com/popadd.html?src=iebookmark&title="+encodeURIComponent(title)+"&url="+encodeURIComponent(url)+"&summary="+encodeURIComponent(summary)+""',
		'scrollbars=no,width=780,height=455,left=5,top=20,status=yes,resizable=yes',
		'雅虎收藏+(yahoo.com)'
	],
	baidu:[
		'百度',
		'"http://cang.baidu.com/do/add?it="+encodeURIComponent(title)+"&iu="+encodeURIComponent(url)+"&dc="+encodeURIComponent(summary)+"&fr=ien#nw=1"',
		'scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes',
		'百度收藏(cang.baidu.com)'
	],
	deli:[
		'Del.icio.us',
		'"http://del.icio.us/post?v=4&noui&jump=close&url="+encodeURIComponent(url)+"&title="+encodeURIComponent(title)+""',
		'width=700,height=400,left=75,top=20,resizable=yes',
		'美味书签(del.icio.us)'
	],
	misterwong:[
		'Wong It!',
		'"http://www.mister-wong.cn/index.php?action=addurl&bm_url="+encodeURIComponent(url)+"&bm_description="+encodeURIComponent(title)+""',
		'scrollbars=no,width=650,height=560,left=0,top=0,status=no,resizable=yes',
		'Mister Wong(www.mister-wong.cn)'
	],
	furl:[
		'FURL',
		'"http://www.furl.net/storeIt.jsp?t="+encodeURIComponent(title)+"&u="+encodeURIComponent(url)+"&c="+encodeURIComponent(summary)+""',
		'width=475,height=575,left=75,top=20,resizable=yes',
		'FURL网摘(www.furl.net)'
	],
	poco:[
		'Poco',
		'"http://my.poco.cn/fav/storeIt.php?t="+escape(title)+"&u="+escape(url)+"&c="+escape(summary)+""',
		'scrollbars=no,width=475,height=575,left=75,top=20,status=no,resizable=yes',
		'POCO网摘(share.poco.cn)'
	],
	hexun:[
		'和迅',
		'"http://bookmark.hexun.com/post.aspx?title="+escape(title)+"&url="+escape(url)+"&excerpt="+escape(summary)+""', // link url
		'scrollbars=no,width=600,height=450,left=80,top=80,status=no,resizable=yes', 
		'和迅网摘(HeXun.com)' 
	],
	'365key':[
		'365key',
		'"http://www.365key.com/storeit.aspx?t="+escape(title)+"&u="+escape(url)+"&c="+escape(summary)+""',
		'scrollbars=no,width=475,height=575,left=75,top=20,status=no,resizable=yes',
		'天天网摘(365key.com)'
	],
	QQ:[
		'QQ书签',

		'"http://shuqian.qq.com/post?jumpback=2&noui=1&title="+encodeURIComponent(title)+"&uri="+escape(url)+""',
		'status=1,scrollbars=1,toolbar=0,resizable=1,width=930,height=470',
		'favit'
		],
	yesky:[
		'天极',
		'"http://hot.yesky.com/dp.aspx?t="+escape(title)+"&u="+escape(url)+"&c="+escape(summary)+"&st=2"',
		'scrollbars=no,width=400,height=480,left=75,top=20,status=no,resizable=yes',
		'天极网摘(hot.yesky.com)'
	],
	'5dig':[
		'5dig',
		'"http://www.5dig.net/submit.php?url="+escape(url)',
		'scrollbars=yes,menubar=yes,toolbar=yes,width=400,height=480,left=75,top=20,status=yes,resizable=yes',
		'我挖网'
		]
};
var g_urlToCollect = '';
var g_titleToCollect = '';
var g_summaryToCollect = '';
function getCollHtml(){
try{
	var ret = '';
	var bfirst = true;
	for(var i in g_arrCollectList){
		ret += '<span style="padding-left:'+(bfirst?'1':'2')+'px;"><a href="javascript:NetCollect(\''+i+'\')" title="收藏到'+g_arrCollectList[i][3]+'"><img src="/files/images/wangzhai/'+i+'.gif" border="0" width="12" height="12" style="padding-right:1px;padding-left:2px;" align="absmiddle" />'+g_arrCollectList[i][0]+'</a></span>';
		bfirst = false;
	}
	return '<div style="text-align:center;padding-bottom:3px;">' + ret + '</div>';
}catch(e){return '';}
}
function NetCollect(netid){
try{
	if(netid.length <= 0 || ! netid in g_arrCollectList)
		return;
	
	var argv = NetCollect.arguments;
	var argc = NetCollect.arguments.length;
	var openSelf = argc > 1 ? argv[1] : false;

	var pos = 0;
	if(g_urlToCollect == ''){
		g_urlToCollect = location.href;
		pos = g_urlToCollect.indexOf('#');
		if(pos > 0){
			g_urlToCollect = g_urlToCollect.substring(0,pos);
		}
	}
	if(g_titleToCollect == ''){
		g_titleToCollect = document.title;
		pos = g_titleToCollect.indexOf(' | 什么是');
		if(pos > 0){
			g_titleToCollect = g_titleToCollect.substring(0,pos);
		}
	}
	if(g_summaryToCollect == ''){
	try{
		var pIntro = null;
		try{
			pIntro = document.getElementById('entry_introduce');
		}catch(e){pIntro = null;}
		try{
			if(null == pIntro) pIntro = document.all['entry_introduce'];
		}catch(e){pIntro = null;}
		if(pIntro != null){
			g_summaryToCollect = pIntro.innerText;
			if(g_summaryToCollect == '') g_summaryToCollect = pIntro.innerHTML;
		}
	}catch(e){}
		if(g_summaryToCollect == '') g_summaryToCollect = g_titleToCollect;
	}

	var pCurColl = g_arrCollectList[netid];
	
	var summary = document.selection?(document.selection.type!='None'?document.selection.createRange().text:g_summaryToCollect):(document.getSelection?document.getSelection():g_summaryToCollect);
	var url = g_urlToCollect;
	var title = g_titleToCollect;

	eval('var urlToOpen = ' + pCurColl[1] + ';');
	if(!openSelf){
		var p = window.open(urlToOpen,netid+'_BookmarkWin',pCurColl[2]);
		p.focus();
	}
	else{
		window.location.href = urlToOpen;
	}
}catch(e){}
}
document.writeln(getCollHtml());