var AppConfig = {
  // "apiHost":"http://api.caipiao.com",
  // "h5Host":"http://api.caipiao.com",
  // "imgHost":"http://static.caipiao.com",
  // "hkHost":"http://wap.lh8898.com",http://422.zhanqun.com/
  "apiHost":"http://api.ch9588.com",
  "h5Host":"http://api.ch9588.com",
  "imgHost":"http://static.ch9588.com",
  // "temh5Host":"http://422.zhanqun.com",
  "temh5Host":JudgeRealmName(),
  "hkHost":"http://wap.lh8898.com",
  "agentId":1,
  "localhost":true
};
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
