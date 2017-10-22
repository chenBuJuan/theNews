$(document).ready(function() {
    getNews();
});

function getNews() {
    var s = window.location.search.substring(1);

    var ajax = $.ajax({
        url: "http://localhost:3000/search",
        data: s,
        type: "get",
        cache: true,
        dataType: "jsonp",
        jsonp: "callback",
        crossDomain: true,
        success: function(data) {
            if(data.length != 0){
                $.each(data, function(index, value) {
                    if(value.thumbnail_pic_s03){
                        var wrapper = $("<div class=\"searchCell\"></div>");
                        wrapper.appendTo($("#searchRes"));
                        var a = $("<a href=\"item.html?id=" + value.newsid + "\"></a>");
                        a.appendTo(wrapper);
    
                        var div = $("<div class=\"img\">");
                        div.appendTo(a);
                        $("<img src=\"" + value.thumbnail_pic_s + "\">").appendTo(div);
                        
                        var header = $("<header></header>");
                        header.appendTo(a);
                        $("<h3></h3>").text(value.title).appendTo(header);
    
                        var footer = $("<footer></footer>");
                        footer.appendTo(a);
                        var p = $("<p></p>");
                        p.appendTo(footer);
                        $("<span></span>").text(value.author_name).appendTo(p);
                        $("<span></span>").text(value.date).appendTo(p);
                    }else{
                        var wrapper = $("<div class=\"cell-img\"></div>");
                        wrapper.appendTo($("#content"));
                        var a = $("<a href=\"item.html?id=" + value.newsid + "\"></a>");
                        a.appendTo(wrapper);
    
                        var div = $("<div class=\"img\">");
                        div.appendTo(a);
                        $("<img src=\"" + value.thumbnail_pic_s + "\">").appendTo(div);
                        
                        var header = $("<header></header>");
                        header.appendTo(a);
                        $("<h3></h3>").text(value.title).appendTo(header);
    
                        var footer = $("<footer></footer>");
                        footer.appendTo(a);
                        var p = $("<p></p>");
                        p.appendTo(footer);
                        $("<span></span>").text(value.author_name).appendTo(p);
                        $("<span></span>").text(value.date).appendTo(p);
                    }
                });
            }
        },
        error: function(request, errInfo, errObj) {
            alertMsg("获取搜索结果失败");
            console.log(errInfo);
            console.log(errObj);
        },
    });
}