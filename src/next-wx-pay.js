(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var wx = global.wx = global.wx;

  var NxWxPay = nx.declare('nx.WxPay', {
    statics: {
      choose: function(inOptions){
        wx.ready(function () {
          return new Promise(function(resove, reject){
            wx.chooseWXPay(
              nx.mix( inOptions, {
                success: function( data ){
                  resove( { status:'success', data: data} );
                },
                fail: function( data ){
                  resove( { status:'fail', data: data} );
                },
                complete: function( data ){
                  resolve( { status:'complete', data: data } )
                }
              })
            );
          });
        });
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWxPay;
  }

}());
