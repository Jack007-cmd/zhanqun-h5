// var host = location.host.replace('wap', 'www');
// var baseUrl = 'http://' + host;
// var apiUrl = "http://420.zhanqun.com";
var apiUrl = JudgeRealmName();

//判断域名
function JudgeRealmName() {
    var url = document.domain;
    url = document.location.protocol + "//" + url;
    return url;
}

//获取轮播图数据
var getBanners = function () {
    $.ajax({
        url: apiUrl + "/v1/h5/blog/banner",
        type: "get",
        dataType: "json",
        success: function (rs) {
            if (rs) {
                var allItem = "";
                rs.forEach(function (v) {
                    allItem += "<div class='slider__item'><a href='" + v['url'] + "'><img src='" + v['image'] + "' onerror='this.src=\"./assets/imgs/error.jpg\"' alt=''></a></div>";
                });
                $(".slider").append(allItem);
                // $(".notice_kind").text(rs.data['news']['name']);
                // $(".notice_kind").next().click(function () {
                //     window.location.href = "detail.html?.id=" + rs.data['news']['id'];
                // }).text(rs.data['news']['title']);
                $(".slider-container").ikSlider({
                    responsive: true, touch: true, delay: 1000, speed: 1000, autoPlay: true, pauseOnHover: true
                });
                $(".slider-container").on('changeSlide.ikSlider', function (evt) {
                });
            }
        }, err: function (err) {
            alert(err);
        }
    });
};


//网页图标
function setFavicon(data) {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = data;
    document.getElementsByTagName('head')[0].appendChild(link);
}