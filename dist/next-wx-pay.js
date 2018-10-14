(function() {
  var global = global || this || window || Function("return this")();
  var nx = global.nx || require("next-js-core2");
  var wx = (global.wx = global.wx);

  var NxWxPay = nx.declare("nx.WxPay", {
    statics: {
      choose: function(inOptions) {
        wx.ready(function() {
          return new Promise(function(resolve, reject) {
            if (global.__WEIXIN_READY___) {
              wx.chooseWXPay(
                nx.mix(inOptions, {
                  success: function(data) {
                    resolve({ status: "success", data: data });
                  },
                  fail: function(data) {
                    resolve({ status: "fail", data: data });
                  },
                  complete: function(data) {
                    resolve({ status: "complete", data: data });
                  }
                })
              );
            } else {
              reject({
                status: "fail",
                msg: "微信SDK还未初始化"
              });
            }
          });
        });
      }
    }
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = NxWxPay;
  }
})();
