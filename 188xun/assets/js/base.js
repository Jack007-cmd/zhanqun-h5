// var apiUrl = "http://" + document.domain.replace('h5', 'api');
// var xunUrl = apiUrl.replace('www', 'static');

var outUrl = " https://www.kkk9001.com";
// var aboutUrl = "http://api.lh8898.com";
var aboutUrl = "http://api.esuzhan.com";
var developUrl = "http://403.zhanqun.com";
var historyUrl = "http://193163.com";
var apiUrl = JudgeRealmName();
var xunUrl = "https://www.188xun.com";

//判断域名
function JudgeRealmName() {
    var url = document.domain;
    url =  document.location.protocol +"//"+ url;
    // if (url.indexOf(".esuzhan.") == -1) {
    //   url = "http://" + url;
    // } else {
    //   var start = url.indexOf(".") + 1;
    //   var end = url.indexOf(".", start + 1);
    //   url = "http://" + url.replace(url.substring(start, end), "api");
    // }
    return url;
}