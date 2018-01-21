# next-wx-pay
> Wechat api for WxPay part.


## install:
```bash
npm install -S afeiship/next-wx-pay --registry=https://registry.npm.taobao.org
```

## usage:
```js
import NxWxPay from 'next-wx-pay';

NxWxPay.pay({
  timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
  nonceStr: '', // 支付签名随机串，不长于 32 位
  package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
  signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
  paySign: '', // 支付签名
}).then(({ status, code })=>{
  // codes goes here!
});

```
