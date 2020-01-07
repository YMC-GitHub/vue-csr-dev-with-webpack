/*
// 基准大小
const baseSize = 16;
// 设计稿宽
const designWidth = 750;
// 设置 rem 函数
function setRem() {
  // 页面宽度与设计稿宽之比
  const scale = document.documentElement.clientWidth / designWidth;
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
}
// 初始化
setRem();
// 文档窗口大小时 重新设置 rem
window.onresize = function() {
  setRem();
};
*/
/**
 * refer:{锐洋智能.移动端适配方案 flexible.js](https://www.cnblogs.com/interdrp/p/9042749.html)
 */

(function(win, lib) {
  // 基准大小
  var baseSize = 16;
  // 设计稿宽
  var designWidth = 750;
  var doc = win.document;
  var docEl = doc.documentElement;
  var metaEl = doc.querySelector('meta[name="viewport"]');
  var flexibleEl = doc.querySelector('meta[name="flexible"]');
  var dpr = 0;
  var scale = 0;
  var tid;
  var flexible = lib.flexible || (lib.flexible = {});
  // 获取dpr
  // case 01:根据在<meta name="viewport"> 中设置的dpr
  if (metaEl) {
    console.warn("将根据已有的meta标签来设置缩放比例");
    var match = metaEl
      .getAttribute("content")
      .match(/initial\-scale=([\d\.]+)/);
    if (match) {
      scale = parseFloat(match[1]);
      dpr = parseInt(1 / scale);
    }
  }
  // case 02:根据在<meta name="flexible"> 中设置的dpr
  else if (flexibleEl) {
    var content = flexibleEl.getAttribute("content");
    if (content) {
      var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
      var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
      if (initialDpr) {
        dpr = parseFloat(initialDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
      if (maximumDpr) {
        dpr = parseFloat(maximumDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
    }
  }

  // case 03：根据设备dpr
  if (!dpr && !scale) {
    var isAndroid = win.navigator.appVersion.match(/android/gi);
    var isIPhone = win.navigator.appVersion.match(/iphone/gi);
    var devicePixelRatio = win.devicePixelRatio;
    if (isIPhone) {
      // iOS下，对于3的屏，用3倍的方案
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3;
      }
      // iOS下，对于2的屏，用2倍的方案，其余的用1倍方案
      else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      // 其他设备下，仍旧使用1倍的方案
      dpr = 1;
    }
    scale = 1 / dpr;
  }
  // 设置dpr
  docEl.setAttribute("data-dpr", dpr);
  if (!metaEl) {
    metaEl = doc.createElement("meta");
    metaEl.setAttribute("name", "viewport");
    metaEl.setAttribute(
      "content",
      "initial-scale=" +
        scale +
        ", maximum-scale=" +
        scale +
        ", minimum-scale=" +
        scale +
        ", user-scalable=no"
    );
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl);
    } else {
      var wrap = doc.createElement("div");
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  }
  // 重新设置 rem
  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    if (width / dpr > designWidth) {
      width = designWidth * dpr;
    }
    //var rem = width / 10;
    var rem = baseSize * Math.min(dpr, 2);
    docEl.style.fontSize = rem + "px";
    flexible.rem = win.rem = rem;
  }
  // 窗口大小重置时
  win.addEventListener(
    "resize",
    function() {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    },
    false
  );
  // 窗口页面显示时
  win.addEventListener(
    "pageshow",
    function(e) {
      if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    },
    false
  );
  // 文档准备完成时
  if (doc.readyState === "complete") {
    doc.body.style.fontSize = baseSize * dpr + "px";
  } else {
    doc.addEventListener(
      "DOMContentLoaded",
      function(e) {
        doc.body.style.fontSize = baseSize * dpr + "px";
      },
      false
    );
  }

  refreshRem();
  flexible.dpr = win.dpr = dpr;
  flexible.refreshRem = refreshRem;
  flexible.rem2px = function(d) {
    var val = parseFloat(d) * this.rem;
    if (typeof d === "string" && d.match(/rem$/)) {
      val += "px";
    }
    return val;
  };
  flexible.px2rem = function(d) {
    var val = parseFloat(d) / this.rem;
    if (typeof d === "string" && d.match(/px$/)) {
      val += "rem";
    }
    return val;
  };
})(window, window["lib"] || (window["lib"] = {}));
