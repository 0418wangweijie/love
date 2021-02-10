
function share_data_time() {
  window.setTimeout("share_data_time()", 1000);
    //开始时间
    BirthDay = new Date("11/1/2018 00:00:00");
    //获取当前时间
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime()); //总豪秒数
    secondsold = Math.floor(timeold / 1000);          //总秒数
    e_daysold = timeold / (24 * 60 * 60 * 1000);
    daysold = Math.floor(e_daysold);                 //相差天数
    e_hrsold = (e_daysold - daysold) * 24;
    hrsold = Math.floor(e_hrsold);                   //相差小时数
    e_minsold = (e_hrsold - hrsold) * 60;
    minsold= Math.floor(e_minsold)                   //相差分钟数
    seconds = Math.floor((e_minsold - minsold) * 60);  //相差秒数
    //将所获取的时间拼接到一起，再把值显示到页面
   
    document.getElementById('love_days').innerHTML = daysold + '&nbsp;'+'天';
		document.getElementById('love_hours').innerHTML = hrsold +'&nbsp;'+ '时';
		document.getElementById('love_minutes').innerHTML = minsold +'&nbsp;'+ '分';
		document.getElementById('love_seconds').innerHTML = seconds +'&nbsp;'+ '秒';
}
share_data_time();
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    console.log("nihao ")
  }
  return null;
}
// 这样调用：
getQueryString("page-2");

window.onhashchange = function () {
  console.log('URL发生变化了');
};