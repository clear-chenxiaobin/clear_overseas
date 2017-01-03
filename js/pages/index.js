/**
 * Created by Administrator on 2017/1/3.
 */
setHeader();

/**
 * 监听窗口缩放
 */
window.onresize = function () {
    setHeader();
}

/**
 * 设置header自适应
 */
function setHeader() {
    var height = document.documentElement.clientHeight;
    $("#fh5co-header").css("height", height);
}