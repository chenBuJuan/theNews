$(document).ready(function() {
    getUser();
});
function getUser() {
    var ajax = $.ajax({
        url: "http://localhost:3000/user",
        type: "get",
        cache: true,
        dataType: "jsonp",
        jsonp: "callback",
        crossDomain: true,
        success: function(data) {
            $("#user").find(".username").children("span").text(data.userName);

            if(data.userSex == "m"){
                $("#user").find(".info").children("span").eq(1).toggle();
            }else{
                $("#user").find(".info").children("span").eq(0).toggle();
            }

            $("#user").find(".info").children("span").eq(2).text(data.userEmail);

            if(data.userMsg){
                $("#user").find(".msg").children("p").text(data.userMsg);
            }else{
                $("#user").find(".msg").children("p").text("这个家伙很懒，一句话也没有留下");
            }

            $.each(data.news, function(index, value) {
                if(value.thumbnail_pic_s03){
                    var wrapper = $("<div class=\"cell-imgs\"></div>");
                    wrapper.appendTo($("#news"));
                    var a = $("<a href=\"item.html?id=" + value.newsid + "\"></a>");
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
                    wrapper.appendTo($("#news"));
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
        },
        error: function(request, errInfo, errObj) {
            alertMsg("获取用户信息失败");
            console.log(errInfo);
            console.log(errObj);
        },
    });
}