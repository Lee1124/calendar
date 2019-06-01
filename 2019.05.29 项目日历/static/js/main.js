"use strict";

/**
 * 腾讯云资源地址：
 */
var cosIp = "https://xlfile-1256392453.file.myqcloud.com/";

/**
 * 获取信息
 * @returns {Object}
 */

function getkevalue() {
  // var returnval = window.localStorage.userinfo;
  var returnval = 'http://localhost/|1|2|xlhl|http://localhost:5819/|http://171.211.126.122:8092/|1,1|http://192.168.1.253:8095/|http://192.168.1.253:8092';
  var vararry = returnval.split("|");
  var keyobj = new Object();
  keyobj.url = vararry[0]; //处理服务器ip   211.

  keyobj.userid = vararry[1];
  keyobj.branchid = vararry[2];
  keyobj.key = vararry[3];
  keyobj.brinchip = vararry[4]; //文件上传处理 171

  keyobj.branchshowip = vararry[5]; //文件展示ip

  keyobj.rolestate = vararry[6]; // 0 本店管理 1 管理员 10以上部门id

  keyobj.loackshowip = vararry[7];
  keyobj.apiurl = vararry[8]; //处理服务器ip   211.

  return keyobj;
}

/**
 * 获取相应的时间段:
 *@param天数，根据天数获取至今的时间段 注意：至今指的是 明天
 *@type，特殊符号，例如 2019.05.24或2019/05/24中的‘.’或‘/’
 */


function getTimeSlot(param, type) {
  var dayNum = param;
  var symbol = type;

  if (param == '' || param == undefined) {
    dayNum = 1;
  }

  if (type == '' || type == undefined) {
    symbol = '/';
  }

  var myDate = new Date();
  myDate.setDate(myDate.getDate() + 1); //加一天

  var nowY = myDate.getFullYear();
  var nowM = myDate.getMonth() + 1;
  var nowD = myDate.getDate();
  var endTime = nowY + symbol + (nowM < 10 ? "0" + nowM : nowM) + symbol + (nowD < 10 ? "0" + nowD : nowD); //当前日期(注意：多加了1天)
  //获取相应的日期

  var lw = new Date(myDate - 1000 * 60 * 60 * 24 * parseInt(dayNum)); //最后一个数字是几天的意思

  var lastY = lw.getFullYear();
  var lastM = lw.getMonth() + 1;
  var lastD = lw.getDate();
  var startTime = lastY + symbol + (lastM < 10 ? "0" + lastM : lastM) + symbol + (lastD < 10 ? "0" + lastD : lastD);
  return {
    startTime: startTime,
    endTime: endTime
  };
}

/**
 * 格式化时间
 * @timeVal new Date 格式的时间
 * @typeStr 分割符号 例：'/'  '.'  '-'
 */
function getFormatTime(timeVal, typeStr) {
  if (typeStr == undefined || typeStr == '') {
    typeStr = '/';
  }
  if (timeVal != null) {
    var date = new Date(timeVal);
    var nowY = date.getFullYear();
    var nowM = date.getMonth() + 1;
    var nowD = date.getDate();
    var result = nowY + typeStr + (nowM < 10 ? "0" + nowM : nowM) + typeStr + (nowD < 10 ? "0" + nowD : nowD); //当前日期
    return result;
  } else {
    return '时间参数不能为空！';
  }
}

/**
 * 返回两个日期相差的月数
 * @timeVal new Date 格式的时间
 * @typeStr 分割符号 例：'/'  '.'  '-'
 */
function MonthsBetw(date1, date2) {
  //用-分成数组
  date1 = date1.split("-");
  date2 = date2.split("-"); //获取年,月数

  var year1 = parseInt(date1[0]);
  var month1 = parseInt(date1[1]);
  var year2 = parseInt(date2[0]);
  var month2 = parseInt(date2[1]); //通过年,月差计算月份差

  return (year2 - year1) * 12 + (month2 - month1);
}

/**
 * 获取当前时间
 * @typeStr 分割符号 例：'/'  '.'  '-'
 */
function getNowTime(typeStr) {
  if (typeStr == undefined || typeStr == '') {
    typeStr = '/';
  }

  var myDate = new Date();
  var nowY = myDate.getFullYear();
  var nowM = myDate.getMonth() + 1;
  var nowD = myDate.getDate();
  var nowTime = nowY + typeStr + (nowM < 10 ? "0" + nowM : nowM) + typeStr + (nowD < 10 ? "0" + nowD : nowD); //当前日期

  return nowTime;
}

/**
 * 返回两时间段相差多少小时 向上取整
 * @startDate  开始时间
 * @endDate  结束时间
 */
function getIntervalHour(startDate, endDate) {
  var ms = endDate.getTime() - startDate.getTime();
  if (ms < 0) return 0;
  return Math.ceil(ms / 1000 / 60 / 60);
}


/**
 * 获取url地址栏的值：
 * @name 要从url地址栏获取的字段
 */
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
