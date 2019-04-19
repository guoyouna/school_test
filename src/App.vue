<template>
  <div id="app">
    <to-top></to-top>
    <router-view/>
  </div>
</template>

<script>
import ToTop from '@/components/common/toTop'
export default {
  name: 'App',
  components: {ToTop},
}
</script>

<style>
@import './assets/css/fsAndfc.css';
@import './assets/css/flex.css';
html,body,#app{
  width: 100%;
  font-size: 24px;
  height: 100%;
    background: #eee;
}
#app {
  font-family:'Microsoft YaHei' ,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0f4f7;
}
.content{
  padding-top: 0.88rem;
  box-sizing: border-box;
  padding-bottom: 1.1rem;
  height: 100%;
}
/* 超出隐藏 */
.overflow-hidden{
  overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:2; 
}
.fs-18{
  font-size: 18px;
}
.fs-16{
  font-size: 16px;
}
.fs-14{
  font-size: 14px;
}
.fc-red{
  color: red;
}
.fc-9c{
  color:#9c9c9c;
}
.fc-00{
  color: #000;
}
.fc-ff{
  color: #fff;
}
.fc-028{
  color: #028eda;
}
/*弹性布局*/

img{
  width: 100%;
}
.van-swipe__indicators{
  bottom: 20px;
}
.van-swipe__indicator {
    width: 12px;
    height: 12px;
}
 .nav-bar .van-search{
    padding: 0;
}
.van-dialog__message p{
    text-align: left;
}
/* .greatalum .van-tab {
    background-color: #4da2e6 !important;
} */
.organization .van-tab--active {
    font-weight: 500;
    color: #1989fa;
}
.organization .van-tabs__line {
    width: 25% !important;
    right: 0;
    left: -6%;
    bottom: 15px;
    height: 3px;
    position: absolute;
    border-radius: 3px;
    background-color: #008bfb;
}
.greatalum .van-tab--active {
    font-weight: 500;
    color: #008bfb;
    /* background: #4da2e6; */
}
.xxgk .van-tab{
    background: #4da2e6 ;
    color: #fff;
}
.xxgk  .van-tab--active{
   font-weight: 500;
    color: #fff;
    background:#4da2e6;
}
.myjob .van-tab {
  background-color: #fff;
}
.myjob .van-ellipsis {
    color: #2c3e50;
}
.xxgk .van-ellipsis{
    color: #eee;
}
.xxgk .van-tabs__line,.greatalum .van-tabs__line {
    width: 25% !important;
    right: 0;
    left: -6%;
    bottom: 15px;
    height: 3px;
    position: absolute;
    border-radius: 3px;
    background-color: #008bfb;
}
a{
  color: #2c3e50;
}
.myjob .van-swipe__indicators {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    left: 85%;
    bottom: 8%;
    transform: translateX(-50%);
}
.reg_id .van-ellipsis {
    color: #969799;
}
.reg_id .van-picker-column__item--selected {
    font-weight: 500;
    color: #323233;
}
.donation .van-tab {
    background: #F8F8F8;
}
.donation .van-tab--active {
    background: #fff;
    border: 1px solid #E5E5E5;
    border-top: none;
}
</style>
