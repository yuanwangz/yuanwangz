var rule={
    title:'影搜',
    模板:'AlistShare',
    host:'https://yingso.fun/',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    filterable:0,//是否启用分类筛选,
    filter_url:'',
    filter: {},
    searchUrl:'/index.php/vod/search/wd/**.html',
    searchable:1,
    class_parse: 'ul.nav-menu-items&&li.nav-menu-item;a.nav-link&&Text;a.nav-link&&href;/(\\d+).html',
    推荐:'.module-list;.module-items&&.module-item;*;*;*;*',
    double:true,
    一级:'.module-list&&.module-items&&.module-item;.module-item-cover&&.module-item-pic&&a&&title;.module-item-cover&&.module-item-pic&&img&&data-src;.module-item-text&&Text;.module-item-cover&&.module-item-pic&&a&&href',
    二级:{
        "title": "h1&&Text;.video-info-aux a:eq(0)&&Text",
        "img": ".video-cover img&&data-src",
        "desc": ".module-row-title&&p&&Text;.video-info-main&&.video-info-item:eq(2) a&&Text;.video-info-aux a:eq(3)&&Text;.video-info-main&&.video-info-item:eq(1)&&Text;.video-info-main&&.video-info-item:eq(0)&&Text",
        "content": ".sqjj_a&&Text",
    },
    搜索:`js:
        var gitcafecookie = ""
        function get_result(){
            let videos=[];
            let url="https://yingso.fun:3001/v3/ali/search";
            let html = request(url, {data:{"pageSize":30,"pageNum":1,"title":KEY,"root":0,"cat":"all"}, method:'POST'}, true);
            let jRoot = JSON.parse(html);
            let vodList=jRoot.data;
            vodList.forEach(function(vod){
                let aid=""
                if(vod.root==1){
                    aid=("https://www.aliyundrive.com/s/"+vod["key"]+"").trim();
                }
                if(vod.root==2){
                    aid=("https://pan.quark.cn/s/"+vod["key"]+"").trim();
                }
                let title=vod["title"].trim();
                let img="https://www.lgstatic.com/i/image2/M01/15/7E/CgoB5lysLXCADg6ZAABapAHUnQM321.jpg";
                // let remark=vod["date"];
                videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:""})
            })
            return videos
        }
        VODS=get_result();
    `,
}
