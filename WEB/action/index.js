$(document).ready(function() {
    getNews();
});
function getNews() {
    var ajax = $.ajax({
        url: "http://localhost:3000/index",
        type: "get",
        cache: true,
        dataType: "jsonp",
        jsonp: "callback",
        crossDomain: true,
        success: function(data) {
            $.each(data.result.data, function(index, value) {
                if(value.thumbnail_pic_s03){
                    var wrapper = $("<div class=\"cell-imgs\"></div>");
                    wrapper.appendTo($("#newsWrapper-l"));
                    var a = $("<a href=\"item.html?id=" + value.url.match(/\d+/)[0] + "\"></a>");
                    a.appendTo(wrapper);

                    var header = $("<header></header>");
                    header.appendTo(a);
                    $("<h3></h3>").text(value.title).appendTo(header);

                    var div = $("<div class=\"img\">");
                    div.appendTo(a);
                    $("<img src=\"" + value.thumbnail_pic_s + "\">").appendTo(div);
                    $("<img src=\"" + value.thumbnail_pic_s02 + "\">").appendTo(div);
                    $("<img src=\"" + value.thumbnail_pic_s03 + "\">").appendTo(div);

                    var footer = $("<footer></footer>");
                    footer.appendTo(a);
                    var p = $("<p></p>");
                    p.appendTo(footer);
                    $("<span></span>").text(value.author_name).appendTo(p);
                    $("<span></span>").text(value.date).appendTo(p);
                }else{
                    var wrapper = $("<div class=\"cell-img\"></div>");
                    wrapper.appendTo($("#newsWrapper-r"));
                    var a = $("<a href=\"item.html?id=" + value.url.match(/\d+/)[0] + "\"></a>");
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
        },
        error: function(request, errInfo, errObj) {
            alertMsg("获取新闻列表失败");
            console.log(errInfo);
            console.log(errObj);
        },
    });
}