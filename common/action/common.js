$(document).ready(function() {
    $("#menuBtn").bind("click", drawerIn);
    $("#bMenuBtn").bind("click", drawerIn);
    $("#drawerClose").bind("click", drawerOut);

    $("#accountBtn").bind("click", accountInOut);
    $("#hSearchBtn").bind("click", hSearchBlockInOut);
    $("#bSearchBtn").bind("click", bSearchBlockInOut);
    $("#alertClose").bind("click", alertInOut);

    $("#loginBtn").bind("click", loginInOut);
    $("#loginClose").bind("click", loginInOut);
    $("#loginSubmit").bind("click", loginSubmit);
    $("#registerBtn").bind("click", registerInOut);
    $("#registerClose").bind("click", registerInOut);
    $("#registerSubmit").bind("click", registerSubmit);

    getWeather();

    getSession();

    $(document).bind("scroll", onScroll);
});

function drawerIn() {
    $("#cover").toggle();
    $("#drawer").animate({left : "0px"}, 250);
}
function drawerOut() {
    $("#cover").toggle();
    $("#drawer").animate({left : "-300px"}, 250);
}
function loginInOut() {
    $("#cover").toggle();
    $("#login").toggle();
    return false;
}
function registerInOut() {
    $("#cover").toggle();
    $("#register").toggle();
    return false;
}
function alertInOut() {
    $("#cover").toggle();
    $("#alert").toggle();
}
function accountInOut() {
    $("#accountMenu").toggle(250);
    $("#accountBtn>i:first").toggle();
    $("#accountBtn>i:last").toggle();
}
function hSearchBlockInOut() {
    $("#hSearchBlock").toggle(250);
}
function bSearchBlockInOut() {
    $("#bSearchBlock").toggle(250);
}
function getWeather() {
    var ajax = $.ajax({
        url: "http://v.juhe.cn/weather/index",
        type: "get",
        data: "cityname=南昌&dtype=json&format=1&key=385337970bc3c3db7e402c4acfbf55f8",
        dataType: "jsonp",
        success: function(data) {
            $("#weather>span").text(data.result.today.temperature);
        },
        error: function(request, errInfo, errObj) {
            $("#weather>span").text("Weather Error");
        }
    });
}
function onScroll() {
    if($(this).scrollTop() >= 160 && $("#banner").attr("isOn") != "true") {
        $("#banner").attr({
            "isOn" : "true",
        });

        $("#banner").animate({
            "top" : "0",
        }, 200);
    }
    if($(this).scrollTop() < 160 && $("#banner").attr("isOn") == "true") {
        $("#banner").attr({
            "isOn" : "false",
        });

        $("#banner").animate({
            "top" : "-50px",
        }, 200);
    }
}
function loginSubmit() {
    var user = {
        acc: $("#loginAcc").val(),
        psw: $("#loginPsw").val(),
    };

    var ajax = $.ajax({
        url: "http://localhost:3000/login",
        data: user,
        type: "post",
        cache: true,
        dataType: "jsonp",
        jsonp: "callback",
        crossDomain: true,
        success: function(data) {
            $("#loginClose").trigger("click");
            $("#accountBtn").trigger("click");
            
            getSession();
        },
        error: function(request, errInfo, errObj) {
            $("#loginClose").trigger("click");
            $("#accountBtn").trigger("click");
            alertMsg("账号或密码错误!");
            console.log(errInfo);
            console.log(errObj);
        },
    });

    return false;
}
function registerSubmit() {
    var user = {
        acc: $("#registerAcc").val(),
        psw: $("#registerPsw").val(),
        name: $("#registerName").val(),
        sex: $("#registerSex").find("option:selected").val(),
        email: $("#registerEmail").val(),
        msg: $("#registerMsg").val(),
    };

    var ajax = $.ajax({
        url: "http://localhost:3000/register",
        data: user,
        type: "post",
        cache: true,
        dataType: "jsonp",
        jsonp: "callback",
        crossDomain: true,
        success: function(data) {
            $("#registerClose").trigger("click");
            $("#accountBtn").trigger("click");
            alertMsg("注册成功!");
        },
        error: function(request, errInfo, errObj) {
            $("#registerClose").trigger("click");
            $("#accountBtn").trigger("click");
            alertMsg("注册失败!");
            console.log(errInfo);
            console.log(errObj);
        },
    });

    return false;
}
function getSession() {
    var ajax = $.ajax({
        url: "http://localhost:3000/session",
        type: "post",
        cache: true,
        dataType: "jsonp",
        jsonp: "callback",
        crossDomain: true,
        success: function(data) {
            if(data){
                $("#accountBtn").toggle();
                $("#account").toggle();
                $("<span></span>").text(data.userName).appendTo($("#account"));
                $("<span></span>").text(data.userId).css("display", "none").appendTo($("#account"));
            }
        },
        error: function(request, errInfo, errObj) {
            console.log(errInfo);
            console.log(errObj);
        },
    });
}

function alertMsg(msg) {
    $("#alert").children("div").eq(0).children("span").text(msg);
    
    alertInOut();
}