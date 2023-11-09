var rule = {
title:'看电影',
host:'https://www.kdy666.pro',
// homeUrl:
url:'/Vod/Index/fypage/fyclass/0/0/0?order=0',
searchUrl:'/Home/Search?KeyWord=**&SearchType=2',
searchable:2,//是否启用全局搜索,
quickSearch:0,//是否启用快速搜索,
filterable:0,//是否启用分类筛选,
headers:{//网站的请求头,完整支持所有的,常带ua和cookies
    'User-Agent':'PC_UA',
    "Cookie": "searchneed=ok"
},
 class_name:'电影&电视剧&动漫&综艺',
 class_url:'1&2&4&5',
 play_parse:true,
 lazy:`js:
    var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
    var url = html.url;
    if (html.encrypt == "1") {
        url = unescape(url)
    } else if (html.encrypt == "2") {
        url = unescape(base64Decode(url))
    }
    if (/m3u8|mp4/.test(url)) {
        input = url
    } else {
        input
    }
`,
limit:6,
double:true, // 推荐内容是否双层定位
tab_exclude:'排序|豆瓣',
一级:'.cards a;.card-heading&&Text;img&&data-original;.module-item-note&&Text;a&&href',
二级:{"title":"h2&&Text;.col-md-12 td:eq(2)&&Text","img":"img&&src","desc":".col-md-12 td:eq(5)&&Text;.col-md-12 td:eq(5)&&Text;.col-md-12 td:eq(7)&&Text;.col-md-12 td:eq(9):&&Text;.col-md-12 td:eq(3):&&Text","content":".col-md-12 tr:eq(11):&&Text","tabs":".nav.nav-tabs .active","lists":".pager li a"},
搜索:'.item-heading h4;a&&Text;img&&data-original;.module-item-note&&Text;a&&href',
}
