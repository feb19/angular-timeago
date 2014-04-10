/* globals angular */
'use strict';

var app = angular.module('ngApp', [
  'yaru22.angular-timeago'
]);
app.constant('timeAgoStringsConstant', {
      prefixAgo: null,
      prefixFromNow: null,
      suffixAgo: '前',
      suffixFromNow: '今から',
      seconds: '1分以内',
      minute: '1分',
      minutes: '%d 分',
      hour: '1時間',
      hours: '%d時間',
      day: '1日',
      days: '%d日',
      month: '1ヶ月',
      months: '%d月',
      year: '1年',
      years: '%d年',
      numbers: [],
      wordSeparator: ''
});
app.controller('demoController', function ($scope, nowTime) {
  $scope.pageLoadTime = (new Date()).toISOString();
  $scope.nowTime = nowTime;
});
