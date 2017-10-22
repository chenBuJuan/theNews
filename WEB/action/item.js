$(document).ready(function() {
    getNews();

    $("#attention").bind("click", attention);
});
function getNews() {
    var sch = window.location.search.substring(1);

    var ajax = $.ajax({
        url: "http://localhost:3000/item",
        data: sch,
        type: "get",
        cache: true,
        dataType: "jsonp",
        jsonp: "callback",
        crossDomain: true,
        success: function(data) {
            $("#Author").children("span").text(data.author_name);
            $("#Time").children("span").text(data.time);
            $(".mes").children("h3").text(data.title);
            $.each(data.msg, function(index, value) {
                if(/^p\d+$/.test(index))
                    $("<p></p>").text(value).appendTo($(".mes"));
                if(/^img\d+$/.test(index))
                    $("<img>").attr("src", value).appendTo($(".mes"));
            });
        },
        error: function(request, errInfo, errObj) {
            alertMsg("获取收藏列表失败");
            console.log(errInfo);
            console.log(errObj);
        },
    });
}
function attention() {
    if(!$("#account").children("span").eq(2).text()){
        alertMsg("请先登录!");
        return;
    }
    var sch = {
        userid: $("#account").children("span").eq(2).text(),
        newsid: window.location.search.substring(4),
        title: $("#content").find(".mes").children("h3").text(),
        author_name: $("#Author").children("span").text(),
        date: $("#Time").children("span").text(),
        thumbnail_pic_s: $("#content").find(".mes").children("img").eq(0).attr("src"),
        thumbnail_pic_s02: $("#content").find(".mes").children("img").eq(1) ? $("#content").find(".mes").children("img").eq(1).attr("src") : "",
        thumbnail_pic_s03: $("#content").find(".mes").children("img").eq(2) ? $("#content").find(".mes").children("img").eq(2).attr("src") : "",
    }

    var ajax = $.ajax({
        url: "http://localhost:3000/attention",
        data: sch,
        type: "get",
        cache: true,
        dataType: "jsonp",
        jsonp: "callback",
        crossDomain: true,
        success: function(data) {
            console.log(data);
            alertMsg("收藏成功");
        },
        error: function(request, errInfo, errObj) {
            alertMsg("收藏失败");
            console.log(errInfo);
            console.log(errObj);
        },
    });
}